import ReactDOM from "react-dom";
import NftscanPlayer from "../src";

ReactDOM.render(
  <>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="list"
        sourceType="image/png"
        detailLink="https://lh3.googleusercontent.com/-0AYTfTZgTs16_an0GAP0i21NUloJ2Ef7xc86TSne0C8fkI67XyqO8A4W1R-8KCmgZ1Nj1Lu4QTxaWonR02Di-GM1Fy-nRi152Zt=w321"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="list"
        sourceType="video/a"
        detailLink="https://openseauserdata.com/files/3565db33a856b19f48396062e59e6d62.mp4#t=0.001"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="detail"
        sourceType="audio/2"
        detailLink="bafybeibzrfstevuvzzhsysaknhs5ebkdymewit4gzxxntabh244yr65x2m"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="detail"
        sourceType="text/html"
        detailLink="https://lh3.googleusercontent.com/-0AYTfTZgTs16_an0GAP0i21NUloJ2Ef7xc86TSne0C8fkI67XyqO8A4W1R-8KCmgZ1Nj1Lu4QTxaWonR02Di-GM1Fy-nRi152Zt=w321"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="detail"
        sourceType="video/png"
        detailLink="https://lh3.googleusercontent.com/-0AYTfTZgTs16_an0GAP0i21NUloJ2Ef7xc86TSne0C8fkI67XyqO8A4W1R-8KCmgZ1Nj1Lu4QTxaWonR02Di-GM1Fy-nRi152Zt=w321"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
    <div style={{ width: "100px", height: "100px" }}>
      <NftscanPlayer
        scene="detail"
        sourceType="model/png"
        detailLink="https://d32ju6eqdh546d.cloudfront.net/output/pawn/115/Pawn_5618_v3.glb"
        coverLink="https://lh3.googleusercontent.com/jM8itRiSM3hI8RWokMkhR97JdoIzukU3DUEO-9MD3i6r6DnTBW6efbv1617zES0MfoiWzW4f3UaL9lgRr61vf3Cj4DDPIsk_XjNBXQ=s130"
      />
    </div>
  </>,
  document.querySelector("#root")
);
