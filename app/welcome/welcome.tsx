import TextPressure from "../components/TextPressure";

import PixelSnow from "../components/PixelSnow";

export function Welcome() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "#114200",
      }}
    >
      <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />
      <div className="flex items-center justify-center h-screen w-screen">
        <div style={{ position: "relative", width: "600px", height: "300px" }}>
          <TextPressure
            text="Welcome!"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#fc7703"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>
    </div>
  );
}
