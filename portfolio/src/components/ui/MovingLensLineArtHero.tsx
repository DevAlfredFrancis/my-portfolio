import type { CSSProperties } from "react";
import "../../assets/styles/moving-lens-line-art-hero.css";

type MovingLensLineArtHeroProps = {
  lineImage?: string;
  maskImage?: string;
  className?: string;
};

export function MovingLensLineArtHero({
  lineImage = "/images/moving-line-art-amber.png",
  maskImage = "/images/moving-line-art-mask.png",
  className = "",
}: MovingLensLineArtHeroProps) {
  return (
    <div
      className={`moving-line-art ${className}`.trim()}
      style={
        {
          "--line-art-image": `url("${lineImage}")`,
          "--line-art-mask": `url("${maskImage}")`,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className="moving-line-art__stroke" />
      <div className="moving-line-art__glow" />
      <div className="moving-line-art__flare" />
    </div>
  );
}

export default MovingLensLineArtHero;
