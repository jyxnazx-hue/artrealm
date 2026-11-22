function GrainOverlay() {
  return (
    <svg
      className="grain-overlay"
      width="1440"
      height="900"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <filter id="entry-grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.788
                  0 0 0 0 0.667
                  0 0 0 0 0.51
                  1 0 0 0 0"
        />
      </filter>
      <rect
        width="1440"
        height="900"
        fill="var(--sand)"
        filter="url(#entry-grain)"
        opacity="var(--grain-opacity)"
      />
    </svg>
  )
}

export default GrainOverlay
