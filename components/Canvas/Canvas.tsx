import { useEffect, useRef } from "react"
import styles from "./Canvas.module.scss"

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  var ctx,
    colorVars = {
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    },
    pos = {},
    points = [],
    pointValues = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98
    }

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d")
    ctx.running = true
    ctx.frame = 1

    document.addEventListener("mousemove", onMousemove)
    document.addEventListener("touchstart", onMousemove)
    document.body.addEventListener("orientationchange", resizeCanvas)
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true
        render()
      }
    })
    window.addEventListener("blur", () => {
      ctx.running = true
    })
    resizeCanvas()
  }, [])

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20
    ctx.canvas.height = window.innerHeight
  }

  const getColor = (item) => {
    item.phase = item.phase + item.frequency
    let colorCode = {}
    colorCode = item.offset + Math.sin(item.phase) * item.amplitude

    return colorCode
  }

  const createPoints = (item) => {
    var spring = item.spring + 0.1 * Math.random() - 0.05
    var friction = pointValues.friction + 0.01 * Math.random() - 0.005
    var nodes = []
    for (var t, n = 0; n < pointValues.size; n++) {
      t = { x: 0, y: 0, vy: 0, vx: 0 }
      t.x = pos.x
      t.y = pos.y
      nodes.push(t)
    }

    return { spring, friction, nodes }
  }

  const updatePoints = (point) => {
    var e = point.spring,
      t = point.nodes[0],
      nodes = []
    t.vx += (pos.x - t.x) * e
    t.vy += (pos.y - t.y) * e
    for (var n, i = 0, a = point.nodes.length; i < a; i++) {
      ;(t = point.nodes[i]),
        0 < i &&
          ((n = point.nodes[i - 1]),
          (t.vx += (n.x - t.x) * e),
          (t.vy += (n.y - t.y) * e),
          (t.vx += n.vx * pointValues.dampening),
          (t.vy += n.vy * pointValues.dampening)),
        (t.vx *= point.friction),
        (t.vy *= point.friction),
        (t.x += t.vx),
        (t.y += t.vy),
        (e *= pointValues.tension),
        nodes.push(t)
    }

    return { spring: e, friction: point.friction, nodes }
  }

  const drawPoints = (point) => {
    var e,
      t,
      n = point.nodes[0].x,
      i = point.nodes[0].y
    ctx.beginPath()
    ctx.moveTo(n, i)
    for (var a = 1, o = point.nodes.length - 2; a < o; a++) {
      e = point.nodes[a]
      t = point.nodes[a + 1]
      n = 0.5 * (e.x + t.x)
      i = 0.5 * (e.y + t.y)
      ctx.quadraticCurveTo(e.x, e.y, n, i)
    }
    e = point.nodes[a]
    t = point.nodes[a + 1]
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y)
    ctx.stroke()
    ctx.closePath()
  }

  const onMousemove = (e) => {
    function addPoint() {
      for (var i = 0; i < pointValues.trails; i++) {
        points.push(
          new createPoints({ spring: 0.45 + (i / pointValues.trails) * 0.025 })
        )
      }
    }
    function updatePos(e) {
      e.touches
        ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : ((pos.x = e.clientX), (pos.y = e.clientY))
    }
    function touch(e) {
      1 == e.touches.length &&
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
    }
    document.removeEventListener("mousemove", onMousemove),
      document.removeEventListener("touchstart", onMousemove),
      document.addEventListener("mousemove", updatePos),
      document.addEventListener("touchmove", updatePos),
      document.addEventListener("touchstart", touch),
      updatePos(e),
      addPoint(),
      render()
  }

  const render = () => {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.globalCompositeOperation = "lighter"
      ctx.strokeStyle =
        "hsla(" + Math.round(getColor(colorVars)) + ",90%,50%,0.10)"
      ctx.lineWidth = 4
      for (var e, t = 0; t < pointValues.trails; t++) {
        e = updatePoints(points[t])
        drawPoints(e)
      }
      ctx.frame++
      window.requestAnimationFrame(render)
    }
  }

  return (
    <canvas
      id="canvas"
      /*  width={window.innerWidth}
      height={window.innerHeight} */
      ref={canvasRef}
      className={styles.canvas}
    ></canvas>
  )
}

export default Canvas
