import { MediaType } from "@/interfaces/media.interface";
import { isIpfs, urlForIpfs } from "@/utils/url.util";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
} from "react";
import Styles from "./image.less";

interface ImageType {
  src: string;
  alt?: string;
  fills?: boolean;
  notCalc?: boolean;
  type?: "normal" | "small" | "big" | "detail" | "tiny" | "medium";
  loadingText?: boolean;
  media?: MediaType;
  noIcon?: boolean;
  datapost?: (data: any) => void;
  className?: string;
}

const IpfsNodeList = [
  "https://coldcdn.com/api/cdn/yaapfc/",
  "https://coldcdn.com/api/cdn/mi7doz/",
  "https://coldcdn.com/api/cdn/1j7a8a",
];

const ImageContainer: ForwardRefRenderFunction<any, ImageType> = (
  props,
  ref
) => {
  const imgType: any = {
    small: Styles.small,
    big: Styles.big,
    detail: Styles.detail,
    tiny: Styles.tiny,
    medium: Styles.medium,
  };
  const imgCover = {
    loading: require(`../../assets/loading.png`),
    error: require(`../../assets/error.png`),
    noCover: require(`../../assets/no-preview.png`),
    success: "",
  };

  let [src, setSrc] = useState("");
  let [status, setStatus] = useState<
    "loading" | "error" | "success" | "noCover"
  >("loading");
  ref = useRef<any>(null);
  if (Reflect.has(props, "fills")) {
    delete props["fills"];
  }
  if (props.datapost) Reflect.deleteProperty(props, "datapost");

  const [ipfsNodeIndex, setIpfsNodeIndex] = useState(0);

  useEffect(() => {
    setIpfsNodeIndex(0);
    if (!props.src || props.src === "-") {
      setStatus("noCover");
    } else {
      setStatus("loading");
      setSrc(urlForIpfs(props.src, IpfsNodeList[0]));
    }
  }, [props.src]);

  const handlerOnload = (e: any) => {
    if (status === "noCover") return;
    if (!props.notCalc) {
      const width = e.target.naturalWidth;
      const height = e.target.naturalHeight;
      if (props.fills ? width > height : width <= height) {
        e.target && (e.target.style.width = "100%");
        e.target && (e.target.style.height = "auto");
      } else {
        e.target && (e.target.style.height = "100%");
        e.target && (e.target.style.width = "auto");
      }
    }
    setStatus("success");
  };

  const handleImageErrored = (e: any) => {
    if (status === "noCover") return;
    if (isIpfs(props.src) && ipfsNodeIndex < IpfsNodeList.length - 1) {
      setSrc(urlForIpfs(props.src, IpfsNodeList[ipfsNodeIndex + 1]));
      setIpfsNodeIndex((e) => e + 1);
      return;
    }
    setStatus("error");
  };
  return (
    <>
      {(status === "error" || status === "noCover") && (
        <div className={Styles.statuxBox}>
          <img src={imgCover[status]} alt="" />
        </div>
      )}
      <div
        className={
          Styles.imgMask +
          ` ${status === "loading" && Styles.active}  ${
            imgType[props.type as any]
          }`
        }
      >
        {!props.noIcon && (
          <>
            <img src={imgCover[status]} alt="" />
          </>
        )}
      </div>
      {/* )} */}
      {props.src && (
        <img
          ref={ref}
          {...props}
          className={`${props.className ? props.className : ""} ${
            Styles.imgInstance
          } ${status === "success" && Styles.active}`}
          src={src}
          onLoad={handlerOnload}
          onError={handleImageErrored}
        />
      )}
    </>
  );
};

const ImagePlayer = forwardRef(ImageContainer);
export default ImagePlayer;
