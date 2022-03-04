interface PropType {
  className?: string;
  url: string;
}

export default function HtmlPlayer(props: PropType) {
  return (
    <iframe
      src={props.url}
      className={props.className}
      scrolling="no"
      frameBorder="0"
      seamless={true}
      width="100%"
      height="100%"
      sandbox="allow-same-origin allow-scripts"
    ></iframe>
  );
}
