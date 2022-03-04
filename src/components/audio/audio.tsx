import { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import Styles from "./audio.less";
import Image from "../image/image";

function toStrokeDasharray(percent: number) {
  const perimeter = Math.PI * 108 * 2;
  return `${percent * perimeter} ${(1 - percent) * perimeter}`;
}
function calcRatate(percent: number) {
  return 360 * 2 * percent;
}
export default function AudioPlayer(props: {
  src: string;
  cover: string;
  className?: string;
}) {
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<ReactPlayer>(null);
  function calcProgress(e: any) {
    const played = e.played;
    if (played === 1) {
      setTimeout(() => {
        setPlay(false);
        setProgress(0);
      });
    } else {
      setProgress(played);
    }
  }
  function audioPlay() {
    setPlay((prev) => !prev);
  }
  function seekTo(e: any) {
    const dom = e.currentTarget;
    const { left } = dom.getBoundingClientRect();
    const currentProgress = (e.clientX - left) / dom.clientWidth;
    audioRef.current?.seekTo(currentProgress);
  }
  return (
    <div className={Styles.audioBox + " " + props.className}>
      <div
        className={Styles.audioCover + " img-container"}
        style={{
          transition: "all 1s linear",
          transform: `rotate(${calcRatate(progress)}deg)`,
        }}
      >
        <Image
          src={props.cover}
          loadingText={true}
          noIcon={true}
          type="medium"
        />
      </div>
      <ReactPlayer
        ref={audioRef}
        playing={play}
        url={props.src}
        onProgress={calcProgress}
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
      />
      <svg
        className={Styles.audioPlayer}
        viewBox="0 0 224 224"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="112"
          cy="112"
          r="108"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          style={{ transition: "all 1s linear" }}
          cx="112"
          cy="112"
          r="108"
          transform="matrix(0,-1,1,0,0,224)"
          stroke="#1450F0"
          strokeWidth="8"
          strokeDasharray={toStrokeDasharray(progress)}
          fill="transparent"
        />
      </svg>
      <div className={Styles.playIcon} onClick={audioPlay}>
        <img
          style={{ imageRendering: "auto" }}
          src={require(`../../assets/${play ? "pause" : "play"}.png`)}
          alt=""
        />
      </div>
    </div>
  );
}
