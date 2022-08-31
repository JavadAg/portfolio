import React, { useEffect, useRef, useState } from "react"

/* Mouse trail adapted from a jQuery Codepen
 by Bryan C 
 https://codepen.io/bryjch/pen/QEoXwA 
 */

const Canvas = () => {
  const [state, setState] = useState({
    cHeight: document.body.clientHeight,
    cWidth: document.body.clientWidth
  })

  const canvasRef = useRef(null)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setState({
          cHeight: document.body.clientHeight,
          cWidth: document.body.clientWidth
        })
      },
      false
    )
    if (matchMedia("(pointer:fine)").matches) {
      startAnimation()
    }
  }, [])

  const startAnimation = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    const points = []

    const addPoint = (x: any, y: any) => {
      const point = {
        x,
        y,
        lifetime: 3
      }
      points.push(point)
    }

    document.addEventListener(
      "mousemove",
      ({ clientX, clientY }) => {
        addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop)
      },
      false
    )

    const animatePoints = () => {
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.globalCompositeOperation = "lighter"
      const duration = (11 * (1 * 1000)) / 60 // Last 80% of a frame per point
      ctx.strokeStyle = "hsla(" + Math.round(Math.random()) + ",90%,50%,0.8)"
      ctx.lineJoin = "round"

      for (let i = 0; i < points.length; ++i) {
        const point = points[i]
        let lastPoint

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1]
        } else lastPoint = point

        point.lifetime += 2

        if (point.lifetime > duration) {
          points.shift()
        } else {
          const lifePercent = point.lifetime / duration
          const spreadRate = 12 * (2 - lifePercent)
          ctx.lineWidth = spreadRate

          ctx.beginPath()
          ctx.moveTo(lastPoint.x, lastPoint.y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
          ctx.closePath()
        }
      }
      requestAnimationFrame(animatePoints)
    }

    animatePoints()
  }

  return <canvas ref={canvasRef} width={state.cWidth} height={state.cHeight} />
}

export default Canvas
