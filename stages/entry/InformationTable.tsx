function InformationTable() {
  return (
    <section className="information-table" aria-label="Find art in the collection">
      <span className="information-table__floor-shadow" aria-hidden="true" />
      <span className="information-table__leg information-table__leg--left" aria-hidden="true" />
      <span className="information-table__leg information-table__leg--right" aria-hidden="true" />

      <div className="information-table__top">
        <div className="information-table__paper">
          <p className="information-table__line">Find art by how it feels.</p>
          <div className="information-table__search">
            <svg
              className="information-table__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="10.5" cy="10.5" r="6.25" />
              <path d="m15 15 4.25 4.25" />
            </svg>
            <input
              type="text"
              aria-label="Search the collection"
              placeholder="something calm and atmospheric…"
              autoComplete="off"
              spellCheck="false"
            />
            <svg
              className="information-table__icon information-table__icon--mic"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4M9 21h6" />
            </svg>
          </div>
        </div>
      </div>
      <span className="information-table__front-edge" aria-hidden="true" />
    </section>
  )
}

export default InformationTable
