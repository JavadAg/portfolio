import { useEffect } from "react"

const Test2 = () => {
  var ctx,
    f,
    e = 0,
    pos = {},
    points = [],
    E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98
    }

  function ColorObject(e) {
    this.phase = e.phase || 0
    this.offset = e.offset || 0
    this.frequency = e.frequency || 0.001
    this.amplitude = e.amplitude || 1
  }

  //////////////////////////////////////////////////////

  useEffect(() => {
    ctx = document.getElementById("canvas").getContext("2d")
    ctx.running = true
    ctx.frame = 1
    f = new ColorObject({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    })
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

  function updateColor({ phase, offset, frequency, amplitude }) {
    return (phase += frequency), (e = offset + Math.sin(phase) * amplitude)
  }
  var spring,
    friction,
    nodes = []

  function Point(e) {
    spring = e.spring + 0.1 * Math.random() - 0.05
    friction = E.friction + 0.01 * Math.random() - 0.005

    for (var t, n = 0; n < E.size; n++) {
      t = { x: 0, y: 0, vy: 0, vx: 0 }
      t.x = pos.x
      t.y = pos.y
      nodes.push(t)
    }
  }

  const updatetrail = () => {
    var e = spring,
      t = nodes[0]
    console.log(t)
    t.vx += pos.x - t.x * e
    t.vy += pos.y - t.y * e

    for (var n, i = 0, a = nodes.length; i < a; i++) {
      t = nodes[i]
      if (0 < i) {
        n = nodes[i - 1]
        t.vx += (n.x - t.x) * e
        t.vy += (n.y - t.y) * e
        t.vx += n.vx * E.dampening
        t.vy += n.vy * E.dampening
        t.vx *= friction
        t.vy *= friction
        t.y += t.vy
        e *= E.tension
      }
    }
  }

  const draw = () => {
    var e,
      t,
      n = nodes[0].x,
      i = nodes[0].y

    ctx.beginPath()
    ctx.moveTo(n, i)

    for (var a = 1, o = nodes.length - 2; a < o; a++) {
      e = nodes[a]
      t = nodes[a + 1]
      n = 0.5 * (e.x + t.x)
      i = 0.5 * (e.y + t.y)
      ctx.quadraticCurveTo(e.x, e.y, n, i)
    }
    e = nodes[a]
    t = nodes[a + 1]
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y)
    ctx.stroke()
    ctx.closePath()
  }

  /////////////////////////////////////////////RENDER FUNCTIONS //////////////////////////////////

  const onMousemove = (e) => {
    function addPoint() {
      points = []
      for (var i = 0; i < E.trails; i++) {
        points.push(new Point({ spring: 0.45 + (i / E.trails) * 0.025 }))
      }
    }
    function updatePos(e) {
      if (e.touches) {
        pos.x = e.touches[0].pageX
        pos.y = e.touches[0].pageY
      } else {
        e.preventDefault()
        pos.x = e.clientX
        pos.y = e.clientY
      }
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
      ctx.strokeStyle = "hsla(" + Math.round(updateColor(f)) + ",90%,50%,0.25)"

      ctx.lineWidth = 1
      for (var e, t = 0; t < E.trails; t++) {
        updatetrail((e = points[t]))
        draw(e)
        /* e = Point.updatetrail(points[t])
        Point.draw(e) */
      }
      ctx.frame++
      window.requestAnimationFrame(render)
    }
  }

  return <canvas id="canvas" />
}

export default Test2
