import { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import Styles from "./video.less";
import Image from "../image/image";

export default function VideoPlayer(props: {
  src: string;
  cover: string;
  className?: string;
}) {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const timeout = useRef<any>(null);
  const vedioRef = useRef<any>(null);
  useEffect(() => {});
  return (
    <div className={Styles.videoBox + " " + props.className}>
      <div className={Styles.videoPlayer}>
        {play && (
          <ReactPlayer
            ref={vedioRef}
            playing={play}
            loop={true}
            url={props.src}
            width="100%"
            height="100%"
          />
        )}
      </div>
      <div className={Styles.imgBox + ` ${play ? Styles.hidden : ""}`}>
        <Image src={props.cover} />
        <div className={Styles.playIcon} onClick={() => setPlay(true)}>
          <img
            style={{ imageRendering: "auto" }}
            src={require(`../../assets/${play ? "pause" : "play"}.png`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
