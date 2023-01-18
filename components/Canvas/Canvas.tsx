import { useEffect, useRef } from 'react'
import styles from './Canvas.module.scss'

interface ColorVars {
  phase: number
  amplitude: number
  frequency: number
  offset: number
}

interface Positions {
  x?: number
  y?: number
}

interface Nodes {
  x?: number
  y?: number
  vy?: number
  vx?: number
}

interface Points {
  spring?: number
  friction?: number
  nodes?: Nodes[]
}

interface PointValues {
  friction: number
  trails: number
  size: number
  dampening: number
  tension: number
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  let ctx: CanvasRenderingContext2D,
    colorVars: ColorVars = {
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    },
    pos: Positions = {},
    points: Points[] = [],
    pointValues: PointValues = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98
    }

  useEffect(() => {
    ctx = canvasRef.current.getContext('2d')
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('touchstart', onMousemove)
    document.body.addEventListener('orientationchange', resizeCanvas)
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('focus', () => {})
    resizeCanvas()
  }, [])

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }

  const getColor = (item: ColorVars) => {
    item.phase = item.phase + item.frequency
    let colorCode: number
    colorCode = item.offset + Math.sin(item.phase) * item.amplitude

    return colorCode
  }

  const createPoints = (item: Points) => {
    let spring = item.spring + 0.1 * Math.random() - 0.05
    let friction = pointValues.friction + 0.01 * Math.random() - 0.005
    let nodes: Nodes[] = []
    for (var t, n = 0; n < pointValues.size; n++) {
      t = { x: 0, y: 0, vy: 0, vx: 0 }
      t.x = pos.x
      t.y = pos.y
      nodes.push(t)
    }

    return { spring, friction, nodes }
  }

  const updatePoints = (point: Points) => {
    let spring = point.spring,
      node = point.nodes[0],
      nodes = []

    node.vx += (pos.x - node.x) * spring
    node.vy += (pos.y - node.y) * spring
    for (var n, i = 0, a = point.nodes.length; i < a; i++) {
      node = point.nodes[i]
      if (0 < i) {
        n = point.nodes[i - 1]
        node.vx += (n.x - node.x) * spring
        node.vy += (n.y - node.y) * spring
        node.vx += n.vx * pointValues.dampening
        node.vy += n.vy * pointValues.dampening
      }
      node.vx *= point.friction
      node.vy *= point.friction
      node.x += node.vx
      node.y += node.vy
      spring *= pointValues.tension
      nodes.push(node)
    }

    return { spring, friction: point.friction, nodes }
  }

  const drawPoints = (point: Points) => {
    let node: Nodes,
      nextNode: Nodes,
      n = point.nodes[0].x,
      i = point.nodes[0].y
    ctx.beginPath()
    ctx.moveTo(n, i)
    for (var a = 1, o = point.nodes.length - 2; a < o; a++) {
      node = point.nodes[a]
      nextNode = point.nodes[a + 1]
      n = 0.5 * (node.x + nextNode.x)
      i = 0.5 * (node.y + nextNode.y)
      ctx.quadraticCurveTo(node.x, node.y, n, i)
    }

    node = point.nodes[a]
    nextNode = point.nodes[a + 1]
    ctx.quadraticCurveTo(node.x, node.y, nextNode.x, nextNode.y)
    ctx.stroke()
    ctx.closePath()
  }

  const onMousemove = (e: MouseEvent | TouchEvent) => {
    function addPoint() {
      for (var i = 0; i < pointValues.trails; i++) {
        points.push(
          createPoints({ spring: 0.45 + (i / pointValues.trails) * 0.025 })
        )
      }
    }
    function updatePos(e: MouseEvent | TouchEvent) {
      if (typeof TouchEvent !== 'undefined' && e instanceof TouchEvent) {
        pos.x = e.touches[0].clientX
        pos.y = e.touches[0].clientY
      } else if (e instanceof MouseEvent) {
        pos.x = e.clientX
        pos.y = e.clientY
      }
    }
    function touch(e: TouchEvent) {
      1 == e.touches.length &&
        ((pos.x = e.touches[0].clientX), (pos.y = e.touches[0].clientY))
    }
    document.removeEventListener('mousemove', onMousemove),
      document.removeEventListener('touchstart', onMousemove),
      document.addEventListener('mousemove', updatePos),
      document.addEventListener('touchmove', updatePos),
      document.addEventListener('touchstart', touch),
      updatePos(e),
      addPoint(),
      render()
  }

  const render = () => {
    ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.globalCompositeOperation = 'lighter'
    ctx.strokeStyle =
      'hsla(' + Math.round(getColor(colorVars)) + ',90%,50%,0.10)'
    ctx.lineWidth = 1
    for (var point: Points, t = 0; t < pointValues.trails; t++) {
      point = updatePoints(points[t])
      drawPoints(point)
    }

    window.requestAnimationFrame(render)
  }

  return (
    <>
      <canvas
        id='canvas'
        ref={canvasRef}
        className={styles.canvas}
      ></canvas>
    </>
  )
}

export default Canvas
