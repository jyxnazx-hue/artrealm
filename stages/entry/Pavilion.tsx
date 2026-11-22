import type { WingDefinition, WingTone } from '@stages/entry/entryData'

type PavilionProps = {
  wing: WingDefinition
}

function Architecture({ tone }: { tone: WingTone }) {
  if (tone === 'ancient') {
    return (
      <span className="architecture architecture--ancient" aria-hidden="true">
        <span className="ancient__timber-beam" />
        <span className="ancient__niche">
          <span className="ancient__niche-inner" />
        </span>
      </span>
    )
  }

  if (tone === 'renaissance') {
    return (
      <span className="architecture architecture--renaissance" aria-hidden="true">
        <span className="renaissance__cornice" />
        <span className="renaissance__panels">
          <span />
          <span />
          <span />
          <span />
        </span>
      </span>
    )
  }

  if (tone === 'neoclassical') {
    return (
      <span className="architecture architecture--neoclassical" aria-hidden="true">
        <span className="neoclassical__window">
          <span className="neoclassical__window-light" />
          <span className="neoclassical__mullion neoclassical__mullion--vertical" />
          <span className="neoclassical__mullion neoclassical__mullion--horizontal" />
        </span>
      </span>
    )
  }

  return (
    <span className="architecture architecture--modern" aria-hidden="true">
      <span className="modern__frame modern__frame--one" />
      <span className="modern__frame modern__frame--two" />
      <span className="modern__frame modern__frame--three" />
      <span className="modern__frame modern__frame--four" />
      <span className="modern__frame modern__frame--five" />
    </span>
  )
}

function AnchorArtwork({ wing }: PavilionProps) {
  const className = `artwork artwork--anchor artwork--anchor-${wing.tone}`

  if (wing.tone === 'ancient') {
    return (
      <span className={className}>
        <span className="artwork__frame" />
        <svg className="artwork__surface" viewBox="0 0 96 124" role="img" aria-label={wing.anchorAlt}>
          <title>{wing.anchorAlt}</title>
          <rect width="96" height="124" fill="var(--cream)" />
          <rect x="5" y="5" width="86" height="114" fill="var(--sand)" />
          <path d="M5 29h86M5 94h86" stroke="var(--oak)" strokeWidth="2" opacity="0.55" />
          <circle cx="48" cy="24" r="12" fill="var(--glow)" />
          <path d="M45 39h8l4 18 10 12-5 4-10-10-2 24 10 25H50l-5-22-4 22H31l10-29-2-20-11 12-5-4 15-19z" fill="var(--walnut)" />
          <path d="M41 39c0-5 3-9 8-9s8 4 8 9c0 4-3 7-8 7s-8-3-8-7z" fill="var(--oak)" />
          <path d="M13 103h70M18 109h60" stroke="var(--walnut)" strokeWidth="2" opacity="0.55" />
          <path d="M12 13h22M62 13h22" stroke="var(--ivory)" opacity="0.45" />
        </svg>
      </span>
    )
  }

  if (wing.tone === 'renaissance') {
    return (
      <span className={className}>
        <span className="artwork__frame" />
        <svg className="artwork__surface" viewBox="0 0 104 124" role="img" aria-label={wing.anchorAlt}>
          <title>{wing.anchorAlt}</title>
          <rect width="104" height="124" fill="var(--walnut-dk)" />
          <path d="M12 116V53a40 40 0 0 1 80 0v63z" fill="var(--butter)" />
          <path d="M19 116V55a33 33 0 0 1 66 0v61z" fill="var(--oak)" />
          <path d="M22 67c18-15 41-20 60-8v57H22z" fill="var(--walnut)" />
          <ellipse cx="53" cy="51" rx="13" ry="17" fill="var(--sand)" />
          <path d="M40 48c0-18 25-24 28-4-7-6-19-7-28 4z" fill="var(--walnut-dk)" />
          <path d="M34 116c1-33 8-48 20-48 15 0 22 18 24 48z" fill="var(--walnut-dk)" />
          <path d="m43 70 10 18 10-18 7 46H35z" fill="var(--cream)" opacity="0.78" />
          <path d="M47 52h3M57 52h3M51 60c3 2 5 2 8 0" stroke="var(--walnut)" strokeWidth="1.2" fill="none" />
          <path d="M8 116h88" stroke="var(--gilt)" strokeWidth="3" />
        </svg>
      </span>
    )
  }

  if (wing.tone === 'neoclassical') {
    return (
      <span className={className}>
        <span className="artwork__frame" />
        <svg className="artwork__surface" viewBox="0 0 112 124" role="img" aria-label={wing.anchorAlt}>
          <title>{wing.anchorAlt}</title>
          <rect width="112" height="124" fill="var(--butter)" />
          <path d="M7 117V8h98v109z" fill="var(--cream)" />
          <path d="M56 116C18 86 19 46 51 15M58 116c36-36 33-74 4-101" stroke="var(--oak)" strokeWidth="3" fill="none" />
          <path d="M42 91C23 91 17 78 18 65c17 0 28 9 24 26zM40 61C22 58 21 44 25 34c14 3 22 13 15 27zM70 87c20-2 26-15 24-28-16 1-27 11-24 28zM70 56c17-4 20-16 16-27-15 2-23 12-16 27z" fill="var(--tan)" />
          <path d="M48 40C35 29 40 15 51 7c11 9 14 22-3 33zM63 105c18-2 27 6 28 14H65zM46 105c-17-3-27 5-29 14h28z" fill="var(--gilt)" />
          <circle cx="56" cy="57" r="12" fill="var(--glow)" opacity="0.72" />
          <path d="M12 113h88" stroke="var(--oak)" strokeWidth="2" />
        </svg>
      </span>
    )
  }

  return (
    <span className={className}>
      <span className="artwork__frame" />
      <svg className="artwork__surface" viewBox="0 0 132 124" role="img" aria-label={wing.anchorAlt}>
        <title>{wing.anchorAlt}</title>
        <rect width="132" height="124" fill="var(--cream)" />
        <rect x="8" y="8" width="49" height="70" fill="var(--walnut)" />
        <rect x="62" y="8" width="62" height="31" fill="var(--sand)" />
        <rect x="73" y="45" width="51" height="70" fill="var(--oak)" />
        <circle cx="47" cy="83" r="31" fill="var(--glow)" />
        <path d="M8 115 57 8v107z" fill="var(--tan)" opacity="0.88" />
        <path d="M64 45h60M64 52h60" stroke="var(--ivory)" opacity="0.45" />
        <rect x="8" y="115" width="116" height="3" fill="var(--walnut-dk)" />
      </svg>
    </span>
  )
}

function CompanionArtwork({ wing }: PavilionProps) {
  if (wing.tone === 'ancient') {
    return (
      <span className="companion companion--vitrine">
        <svg viewBox="0 0 72 96" role="img" aria-label={wing.companionAlt}>
          <title>{wing.companionAlt}</title>
          <rect x="3" y="3" width="66" height="86" fill="var(--walnut-dk)" opacity="0.3" />
          <path d="M5 4h62v78H5z" fill="var(--cream)" opacity="0.1" stroke="var(--ivory)" strokeOpacity="0.45" />
          <path d="M11 8 5 38M27 5 7 72" stroke="var(--ivory)" strokeWidth="2" opacity="0.12" />
          <path d="M27 62h18l4 12H23z" fill="var(--oak)" />
          <path d="M30 28h12l-2 9 6 11-4 14H29l-4-14 7-11z" fill="var(--tan)" />
          <path d="M29 29c-8-8 1-15 5-8M42 29c8-8-1-15-5-8" stroke="var(--oak)" strokeWidth="3" fill="none" />
          <path d="M31 42h10M29 51h16" stroke="var(--cream)" opacity="0.35" />
          <rect x="3" y="82" width="66" height="8" fill="var(--walnut)" />
          <rect x="24" y="85" width="24" height="3" fill="var(--cream)" />
        </svg>
      </span>
    )
  }

  if (wing.tone === 'renaissance') {
    return (
      <span className="companion companion--portrait">
        <span className="companion__frame" />
        <svg viewBox="0 0 72 96" role="img" aria-label={wing.companionAlt}>
          <title>{wing.companionAlt}</title>
          <rect width="72" height="96" fill="var(--walnut)" />
          <ellipse cx="37" cy="33" rx="11" ry="15" fill="var(--sand)" />
          <path d="M26 31c-1-17 22-20 23-3-7-6-15-6-23 3z" fill="var(--walnut-dk)" />
          <path d="M12 90c2-31 10-43 24-43 15 0 23 15 25 43z" fill="var(--walnut-dk)" />
          <path d="m27 49 9 17 9-17 7 41H20z" fill="var(--cream)" opacity="0.8" />
          <path d="M5 5h62v86H5z" stroke="var(--gilt)" strokeWidth="2" fill="none" />
        </svg>
      </span>
    )
  }

  if (wing.tone === 'neoclassical') {
    return (
      <span className="companion companion--decorative">
        <span className="companion__frame" />
        <svg viewBox="0 0 88 80" role="img" aria-label={wing.companionAlt}>
          <title>{wing.companionAlt}</title>
          <rect width="88" height="80" fill="var(--cream)" />
          <path d="M44 72C17 57 17 29 42 8M45 72c27-17 26-43 3-64" stroke="var(--oak)" strokeWidth="2.5" fill="none" />
          <path d="M36 54C22 54 17 45 19 36c13 0 20 7 17 18zM52 52c14-1 19-10 17-19-12 1-20 8-17 19zM39 32C29 24 33 13 42 7c9 8 10 18-3 25z" fill="var(--tan)" />
          <circle cx="44" cy="43" r="8" fill="var(--glow)" />
          <path d="M8 72h72" stroke="var(--gilt)" strokeWidth="2" />
        </svg>
      </span>
    )
  }

  return (
    <span className="companion companion--modern" role="img" aria-label={wing.companionAlt}>
      <span className="modern-label__screen">
        <svg viewBox="0 0 64 44" aria-hidden="true">
          <rect width="64" height="44" fill="var(--walnut-dk)" />
          <rect x="5" y="5" width="54" height="34" fill="var(--paper-recess)" />
          <rect x="10" y="10" width="19" height="24" fill="var(--oak)" />
          <circle cx="44" cy="21" r="11" fill="var(--glow)" />
        </svg>
      </span>
      <span className="modern-label__top" />
      <span className="modern-label__leg modern-label__leg--left" />
      <span className="modern-label__leg modern-label__leg--right" />
    </span>
  )
}

function PictureLights() {
  return (
    <>
      <span className="picture-light picture-light--anchor" aria-hidden="true">
        <span className="picture-light__bar" />
        <span className="picture-light__cone" />
      </span>
      <span className="picture-light picture-light--companion" aria-hidden="true">
        <span className="picture-light__bar" />
        <span className="picture-light__cone" />
      </span>
    </>
  )
}

function SignatureLight({ tone }: { tone: WingTone }) {
  if (tone === 'ancient') {
    return (
      <span className="signature-light signature-light--oil" aria-hidden="true">
        <span className="oil-lamp__chain" />
        <span className="oil-lamp__glow" />
        <span className="oil-lamp__cap" />
        <span className="oil-lamp__core" />
        <span className="oil-lamp__bowl" />
      </span>
    )
  }

  if (tone === 'renaissance') {
    return (
      <span className="signature-light signature-light--candles" aria-hidden="true">
        <span className="candle-sconce candle-sconce--left">
          <span className="candle-sconce__glow" />
          <span className="candle-sconce__flame" />
          <span className="candle-sconce__stem" />
          <span className="candle-sconce__arm" />
        </span>
        <span className="candle-sconce candle-sconce--right">
          <span className="candle-sconce__glow" />
          <span className="candle-sconce__flame" />
          <span className="candle-sconce__stem" />
          <span className="candle-sconce__arm" />
        </span>
      </span>
    )
  }

  if (tone === 'neoclassical') {
    return (
      <span className="signature-light signature-light--daylight" aria-hidden="true">
        <span className="daylight__shaft" />
        <span className="daylight__motes">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
      </span>
    )
  }

  return (
    <span className="signature-light signature-light--downlights" aria-hidden="true">
      <span className="downlight downlight--one"><span /></span>
      <span className="downlight downlight--two"><span /></span>
      <span className="downlight downlight--three"><span /></span>
    </span>
  )
}

function Furniture() {
  return (
    <span className="furniture" aria-hidden="true">
      <span className="furniture__floor-glow" />
      <span className="bench">
        <span className="bench__seat" />
        <span className="bench__leg bench__leg--left" />
        <span className="bench__leg bench__leg--right" />
      </span>
      <span className="floor-lamp">
        <span className="floor-lamp__glow" />
        <span className="floor-lamp__shade" />
        <span className="floor-lamp__stem" />
        <span className="floor-lamp__base" />
      </span>
    </span>
  )
}

function InnerWall({ tone }: { tone: WingTone }) {
  const side = tone === 'ancient' || tone === 'modern' ? 'right' : 'left'

  return (
    <span className={`inner-wall inner-wall--${side}`} aria-hidden="true">
      <span className="inner-wall__main" />
      <span className="inner-wall__lower" />
      <span className="inner-wall__door" />
      <span className="inner-wall__sill" />
      <span className="door-lantern">
        <span className="door-lantern__glow" />
        <span className="door-lantern__body" />
        <span className="door-lantern__core" />
      </span>
    </span>
  )
}

function Pavilion({ wing }: PavilionProps) {
  const accessibleName = `${wing.id}, ${wing.name}, ${wing.range}, ${wing.count}. Enter wing.`

  return (
    <button
      type="button"
      className={`pavilion pavilion--${wing.tone} pavilion--${wing.position}`}
      aria-label={accessibleName}
      data-wing={wing.id}
    >
      <span className="pavilion__base pavilion__layer" data-layer="00" aria-hidden="true" />

      <span className="pavilion__room">
        <span className="pavilion__floor pavilion__layer" data-layer="01" aria-hidden="true">
          <span className="floor__material" />
          <span className="floor__light" />
        </span>

        <span className="pavilion__back-wall pavilion__layer" data-layer="02" aria-hidden="true">
          <span className="back-wall__material" />
          <span className="back-wall__wainscot" />
          <span className="back-wall__baseboard" />
        </span>

        <span className="pavilion__architecture pavilion__layer" data-layer="03">
          <Architecture tone={wing.tone} />
        </span>

        <span className="pavilion__works pavilion__layer" data-layer="04">
          <AnchorArtwork wing={wing} />
          <CompanionArtwork wing={wing} />
        </span>

        <span className="pavilion__lights pavilion__layer" data-layer="05">
          <span className="cove-light" aria-hidden="true">
            <span className="cove-light__line" />
            <span className="cove-light__spill" />
          </span>
          <PictureLights />
          <SignatureLight tone={wing.tone} />
        </span>

        <span className="pavilion__furniture pavilion__layer" data-layer="06">
          <Furniture />
        </span>

        <span className="pavilion__front-lip pavilion__layer" data-layer="07" aria-hidden="true">
          <span className="front-lip__grain" />
        </span>

        <span className="pavilion__inner-wall pavilion__layer" data-layer="08">
          <InnerWall tone={wing.tone} />
        </span>

        <span className="pavilion__key-light" aria-hidden="true" />
        <span className="pavilion__vignette" aria-hidden="true" />
      </span>

      <span className="pavilion__sign pavilion__layer" data-layer="09">
        <span className="wing-sign__cartouche">{wing.id}</span>
        <span className="wing-sign__text">
          <span className="wing-sign__name">{wing.name}</span>
          <span className="wing-sign__range">{wing.range}</span>
        </span>
        <span className="wing-sign__count">{wing.count}</span>
      </span>
    </button>
  )
}

export default Pavilion
