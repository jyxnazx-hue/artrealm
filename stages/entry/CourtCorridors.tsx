const doorPaths = ['i', 'ii', 'iii', 'iv'] as const

function CourtCorridors() {
  return (
    <div className="court-corridors" aria-hidden="true">
      <span className="court-corridors__floor" />

      <span className="corridor corridor--north">
        <span className="corridor__light" />
      </span>
      <span className="corridor corridor--south">
        <span className="corridor__light" />
      </span>
      <span className="corridor corridor--west">
        <span className="corridor__light" />
      </span>
      <span className="corridor corridor--east">
        <span className="corridor__light" />
      </span>

      {doorPaths.map((path) => (
        <span className={`door-path door-path--${path}`} key={path}>
          <span className="door-path__slab" />
          <span className="door-path__slab" />
          <span className="door-path__slab" />
        </span>
      ))}
    </div>
  )
}

export default CourtCorridors
