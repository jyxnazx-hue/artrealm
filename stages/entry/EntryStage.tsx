import { useLayoutEffect, useRef } from 'react'
import BottomLedge from '@components/BottomLedge'
import GrainOverlay from '@components/GrainOverlay'
import TopBeam from '@components/TopBeam'
import CourtCorridors from '@stages/entry/CourtCorridors'
import InformationTable from '@stages/entry/InformationTable'
import Pavilion from '@stages/entry/Pavilion'
import { wings } from '@stages/entry/entryData'
import '@stages/entry/entry.css'

function EntryStage() {
  const viewportRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const viewport = viewportRef.current
    const stage = stageRef.current
    if (!viewport || !stage) return

    const fitStage = () => {
      const { width, height } = viewport.getBoundingClientRect()
      const scale = Math.min(width / 1440, height / 900)
      stage.style.setProperty('--stage-scale', String(scale))
    }

    fitStage()
    const observer = new ResizeObserver(fitStage)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="entry-viewport" ref={viewportRef}>
      <div className="entry-stage" ref={stageRef}>
        <h1 className="visually-hidden">ArtRealm entry court</h1>
        <div className="entry-stage__model-base" aria-hidden="true" />
        <CourtCorridors />
        <InformationTable />

        {wings.map((wing) => (
          <Pavilion key={wing.id} wing={wing} />
        ))}

        <TopBeam />
        <BottomLedge />
        <GrainOverlay />
      </div>
    </main>
  )
}

export default EntryStage
