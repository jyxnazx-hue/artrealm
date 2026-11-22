export type WingId = 'I' | 'II' | 'III' | 'IV'
export type WingTone = 'ancient' | 'renaissance' | 'neoclassical' | 'modern'
export type WingPosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'

export type WingDefinition = {
  id: WingId
  tone: WingTone
  position: WingPosition
  name: string
  range: string
  count: string
  anchorAlt: string
  companionAlt: string
}

export const wings: readonly WingDefinition[] = [
  {
    id: 'I',
    tone: 'ancient',
    position: 'top-left',
    name: 'Ancient & Early Traditions',
    range: 'c. 3000 BCE – 1400 CE',
    count: '30 movements',
    anchorAlt: 'Architectural placeholder for an ancient figural panel with a sun disc.',
    companionAlt: 'A carved vessel displayed inside a small museum vitrine.',
  },
  {
    id: 'II',
    tone: 'renaissance',
    position: 'top-right',
    name: 'Renaissance to Rococo',
    range: 'c. 1400 – 1760',
    count: '30 movements',
    anchorAlt: 'Architectural placeholder for a Renaissance portrait beneath an arch.',
    companionAlt: 'A small framed portrait of a figure in formal dress.',
  },
  {
    id: 'III',
    tone: 'neoclassical',
    position: 'bottom-right',
    name: 'Neoclassicism to Art Nouveau',
    range: 'c. 1760 – 1910',
    count: '30 movements',
    anchorAlt: 'Architectural placeholder for an Art Nouveau botanical composition.',
    companionAlt: 'A small decorative panel with a carved botanical motif.',
  },
  {
    id: 'IV',
    tone: 'modern',
    position: 'bottom-left',
    name: 'Modern & Contemporary',
    range: 'c. 1910 – today',
    count: '30 movements',
    anchorAlt: 'Architectural placeholder for a modern geometric abstract work.',
    companionAlt: 'A tilted museum label table holding a small illuminated screen.',
  },
]
