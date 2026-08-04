import type { DevotionalTheme } from "../data/devotionals";

interface AbstractWeekArtworkProps {
  theme: DevotionalTheme;
  className?: string;
  variant?: "banner" | "cover" | "rail";
}

export function AbstractWeekArtwork({
  theme,
  className = "",
  variant = "banner",
}: AbstractWeekArtworkProps) {
  const viewBox =
    variant === "cover" ? "0 0 400 640" : variant === "rail" ? "0 0 40 200" : "0 0 200 80";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      {theme === "secret-place" && <DesertContours variant={variant} />}
      {theme === "unity" && <SoundWaves variant={variant} />}
      {theme === "excellence" && <GoldThreads variant={variant} />}
      {theme === "hope" && <AnchorStaff variant={variant} />}
    </svg>
  );
}

function DesertContours({ variant }: { variant: string }) {
  if (variant === "cover") {
    return (
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.45">
        <path d="M40 520 C120 460, 180 560, 240 500 S340 430, 400 490" strokeWidth="1.2" />
        <path d="M0 460 C90 400, 160 520, 250 440 S340 360, 400 420" strokeWidth="1.2" />
        <path d="M20 380 C110 320, 170 430, 260 360 S350 280, 400 330" strokeWidth="1.1" />
        <path d="M60 300 C140 250, 190 340, 280 280 S360 210, 400 250" strokeWidth="1" />
        <circle cx="200" cy="280" r="3" fill="currentColor" stroke="none" opacity="0.5" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
      <path d="M0 58 C30 48, 50 68, 80 55 S130 40, 160 52 S190 70, 200 58" />
      <path d="M0 48 C25 38, 55 58, 90 44 S140 28, 170 42 S195 58, 200 48" />
      <path d="M0 38 C35 28, 60 48, 100 34 S145 18, 175 32 S195 48, 200 38" />
      <path d="M0 28 C40 20, 70 38, 110 24 S150 10, 180 22 S195 36, 200 28" />
    </g>
  );
}

function SoundWaves({ variant }: { variant: string }) {
  if (variant === "cover") {
    return (
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.5">
        <path d="M40 180 Q80 120, 120 180 T200 180" strokeWidth="1.2" />
        <path d="M40 240 Q90 160, 140 240 T240 240" strokeWidth="1.2" />
        <path d="M40 300 Q100 200, 160 300 T280 300" strokeWidth="1.3" />
        <path d="M120 400 Q200 280, 280 400 T400 400" strokeWidth="2" />
        <path d="M160 400 Q220 340, 280 400 T360 400" strokeWidth="1.4" opacity="0.6" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6">
      <path d="M10 25 Q25 10, 40 25 T70 25" />
      <path d="M10 40 Q25 25, 40 40 T70 40" />
      <path d="M10 55 Q25 40, 40 55 T70 55" />
      <path d="M95 40 Q115 15, 135 40 T175 40" strokeWidth="2" />
      <path d="M100 40 Q115 28, 130 40 T160 40" opacity="0.45" />
      <circle cx="88" cy="40" r="2.5" fill="currentColor" stroke="none" />
    </g>
  );
}

function GoldThreads({ variant }: { variant: string }) {
  if (variant === "cover") {
    return (
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.5">
        <path d="M60 120 C160 120, 160 420, 260 420 S360 180, 400 180" strokeWidth="1.3" />
        <path d="M40 200 C150 200, 170 380, 270 380 S360 240, 400 240" strokeWidth="1.2" />
        <path d="M80 280 C170 280, 190 340, 280 340 S360 300, 400 300" strokeWidth="1.4" />
        <path d="M50 360 C180 360, 180 240, 280 240 S360 360, 400 360" strokeWidth="1.1" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6">
      <path d="M20 20 C60 20, 60 60, 100 60 S140 20, 180 20" />
      <path d="M20 35 C55 35, 70 50, 100 50 S145 35, 180 35" />
      <path d="M20 50 C50 50, 75 30, 100 30 S150 50, 180 50" />
      <path d="M20 65 C65 65, 65 25, 100 25 S135 65, 180 65" />
    </g>
  );
}

function AnchorStaff({ variant }: { variant: string }) {
  if (variant === "cover") {
    return (
      <g opacity="0.45">
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M40 220 H360" />
          <path d="M40 280 H360" />
          <path d="M40 340 H360" />
          <path d="M40 400 H360" />
          <path d="M40 460 H360" />
        </g>
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M200 160 V420" />
          <path d="M200 420 C150 420, 130 370, 130 320" />
          <path d="M200 420 C250 420, 270 370, 270 320" />
          <circle cx="200" cy="150" r="10" fill="currentColor" stroke="none" />
          <path d="M170 210 H230" />
        </g>
      </g>
    );
  }
  return (
    <g opacity="0.55">
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M20 22 H180" />
        <path d="M20 34 H180" />
        <path d="M20 46 H180" />
        <path d="M20 58 H180" />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M100 16 V52" />
        <path d="M100 52 C88 52, 82 44, 82 36" />
        <path d="M100 52 C112 52, 118 44, 118 36" />
        <circle cx="100" cy="14" r="3.5" fill="currentColor" stroke="none" />
        <path d="M92 24 H108" />
      </g>
    </g>
  );
}

/** Hero background: staff lines subtly suggesting an anchor */
export function HeroAnchorArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 900"
      className={`motion-breathe ${className}`}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#E0C27A" strokeLinecap="round" opacity="0.22">
        <path d="M80 180 H720" strokeWidth="1" />
        <path d="M60 260 H740" strokeWidth="1" />
        <path d="M40 340 H760" strokeWidth="1" />
        <path d="M50 420 H750" strokeWidth="1" />
        <path d="M70 500 H730" strokeWidth="1" />
        <path d="M90 580 H710" strokeWidth="1" />
      </g>
      <g
        fill="none"
        stroke="#C89B3C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.28"
      >
        <path d="M400 220 V620" />
        <path d="M400 620 C310 620, 270 540, 270 460" />
        <path d="M400 620 C490 620, 530 540, 530 460" />
        <circle cx="400" cy="200" r="14" fill="#C89B3C" stroke="none" opacity="0.35" />
        <path d="M350 300 H450" />
      </g>
      <g fill="none" stroke="#1F5EA8" strokeWidth="1" opacity="0.18">
        <path d="M120 700 C250 640, 350 760, 480 700 S650 620, 760 680" />
      </g>
    </svg>
  );
}

export function AnchorIcon({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3v14M12 17c-3.5 0-6-2.2-6-5M12 17c3.5 0 6-2.2 6-5M8 7h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="3.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
