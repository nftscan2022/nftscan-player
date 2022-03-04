import ModelPlayer from "./components/model/model";
import VideoPlayer from "./components/video/video";
import AudioPlayer from "./components/audio/audio";
import ImagePlayer from "./components/image/image";
import HtmlPlayer from "./components/iframe/iframe";
import { mediaType } from "./utils/url.util";

type SceneType = "list" | "detail";

interface PlayerType {
  sourceType: string;
  coverLink: string;
  detailLink: string;
  scene: SceneType;
}

export default function NftscanPlayer({
  sourceType,
  coverLink,
  detailLink,
  scene,
}: PlayerType) {
  const format = mediaType(sourceType);
  const detailSceneType = (
    <>
      {format === "video" && <VideoPlayer src={detailLink} cover={coverLink} />}
      {format === "audio" && <AudioPlayer src={detailLink} cover={coverLink} />}
      {format === "html" && <HtmlPlayer url={detailLink} />}
      {format === "model" && <ModelPlayer url={detailLink} />}
      {(format === "image" || format === "unknown") && (
        <ImagePlayer notCalc={false} src={coverLink} fills={true} />
      )}
    </>
  );
  const listScene = (
    <>
      {format === "video" && <VideoPlayer src={detailLink} cover={coverLink} />}
      {format !== "video" && (
        <ImagePlayer
          notCalc={false}
          src={coverLink || detailLink}
          fills={true}
        />
      )}
    </>
  );
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {scene === "list" ? listScene : detailSceneType}
    </div>
  );
}
