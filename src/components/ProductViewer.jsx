import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const modelScale = isMobile ? Math.max(scale - 0.025, 0.035) : scale;

  return (
    <section id="product-viewer" className="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro | Available in 14&quot; &amp; 16&quot; in Space Gray &
          Dark colors
        </p>

        <div className="control-row">
          <div className="color-control">
            <button
              type="button"
              aria-label="Space Gray"
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "color-dot color-dot-light",
                color === "#adb5bd" && "active"
              )}
            />

            <button
              type="button"
              aria-label="Dark"
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "color-dot color-dot-dark",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>

          <div className="size-control">
            <button
              type="button"
              onClick={() => setScale(0.06)}
              className={clsx("size-btn", scale === 0.06 && "active")}
            >
              14&quot;
            </button>

            <button
              type="button"
              onClick={() => setScale(0.08)}
              className={clsx("size-btn", scale === 0.08 && "active")}
            >
              16&quot;
            </button>
          </div>
        </div>
      </div>

      <div className="viewer-canvas">
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <StudioLights />
          <ModelSwitcher scale={modelScale} isMobile={isMobile} />
        </Canvas>
      </div>
    </section>
  );
};

export default ProductViewer;