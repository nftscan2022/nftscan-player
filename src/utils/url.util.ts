import { MediaType } from "@/interfaces/media.interface";

export function urlForIpfs(url: string, ipfsPrefix?: string) {
  let srcT = url || "";
  if (isIpfs(url)) {
    srcT =
      (ipfsPrefix ? ipfsPrefix : "https://coldcdn.com/api/cdn/yaapfc/") + srcT;
  }
  if (srcT.match(/^http:\/\/(\d*)\.(\d*)\.(\d*)\.(\d*)/)) {
    srcT = "";
    console.log("http ip protocol not allowed");
  }
  return srcT;
}
export function isIpfs(srcT: string): boolean {
  return !!(srcT && (srcT.startsWith("Qm") || srcT.startsWith("ba")));
}
export function mediaType(type: string): MediaType {
  if (typeof type !== "string") return "unknown";
  if (type.indexOf("video") > -1) return "video";
  if (type.indexOf("image") > -1) return "image";
  if (type.indexOf("audio") > -1) return "audio";
  if (type.indexOf("html") > -1) return "html";
  if (type.indexOf("model") > -1) return "model";
  if (type.indexOf("pdf") > -1) return "pdf";
  return "unknown";
}
