import Styles from "./model.less";
import {
  Box3,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Color,
  AmbientLight,
  Vector3,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useRef } from "react";
import { useEffect } from "react";

interface PropType {
  url: string;
}

export default function ModelPlayer(props: PropType) {
  const ref = useRef<any>();
  const requestRef = useRef<any>();
  useEffect(() => {
    const scene = new Scene();
    const renderer = new WebGLRenderer();
    const camera = new PerspectiveCamera(45, 1, 1, 2000);
    renderer.setClearColor(new Color(0xffffff));
    renderer.setSize(ref.current.clientWidth, ref.current.clientWidth);
    const light = new AmbientLight(new Color(0xffffff));
    scene.add(light);
    let gltfScene: any = null;
    let orbitControls: OrbitControls;
    const dom = ref.current.appendChild(renderer.domElement);
    if (props.url) {
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/js/libs/draco/");
      loader.setDRACOLoader(dracoLoader);
      loader.load(
        props.url,
        function (gltf) {
          gltfScene = gltf.scene;
          scene.add(gltf.scene);
          var pos = scene.position;
          var boxFrmScene = new Box3().setFromObject(scene);
          var height = Math.max(
            boxFrmScene.getSize(new Vector3(0, 0, 0)).y,
            boxFrmScene.getSize(new Vector3(0, 0, 0)).x
          );
          var fov = camera.fov * (Math.PI / 180);
          var distance = Math.abs(height / Math.sin(fov / 2));
          const postion = {
            x: (boxFrmScene.max.x + boxFrmScene.min.x) / 2,
            y: (boxFrmScene.max.y + boxFrmScene.min.y) / 2,
            z: (boxFrmScene.max.z + boxFrmScene.min.z) / 2,
          };
          camera.lookAt(pos.x, pos.y, pos.z);
          camera.position.set(pos.x, pos.y, distance);
          camera.updateProjectionMatrix();
          orbitControls = new OrbitControls(camera, ref.current);
          orbitControls.autoRotate = true;
          orbitControls.minDistance = distance / 4;
          orbitControls.maxDistance = 2 * distance;
          orbitControls.target = boxFrmScene.getCenter(new Vector3(0, 0, 0));
        },
        undefined,
        function (error) {
          // console.error(error);
        }
      );
    }
    // orbitControls.autoRotate = true;
    const scne = () => {
      orbitControls && orbitControls.update();
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(scne);
    };
    requestRef.current = requestAnimationFrame(scne);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return <div className={Styles.threeContainer} ref={ref}></div>;
}
