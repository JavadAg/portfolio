export interface ColorVars {
  phase: number
  amplitude: number
  frequency: number
  offset: number
}

export interface Positions {
  x?: number
  y?: number
}

export interface Nodes {
  x?: number
  y?: number
  vy?: number
  vx?: number
}

export interface Points {
  spring?: number
  friction?: number
  nodes?: Nodes[]
}

export interface PointValues {
  friction: number
  trails: number
  size: number
  dampening: number
  tension: number
}
