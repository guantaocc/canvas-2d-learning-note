let start = 0
let lastTime = 0
let ehapseMesc = 0
let intervalMesc = 0
let count = 0

// 速度
let speedX = 10.0
let posX = 0.0

const step = (timestamp) => {
  if(!start) start = timestamp
  if(!lastTime) lastTime = timestamp

  ehapseMesc - timestamp - start

  // 时间差
  intervalMesc = timestamp - lastTime

  update(timestamp, ehapseMesc, intervalMesc)

  lastTime = timestamp

  count++

  console.log(`初始时间${start}ms,上一次时间${lastTime}ms,时间差${intervalMesc}ms,循环次数${count},  帧率${1000 / intervalMesc}`,)
  requestAnimationFrame(step)
}

function update(timestamp, ehapseMesc, intervalMesc){
  let t = intervalMesc / 1000
  posX = posX + speedX * t
  console.log(posX)
}

requestAnimationFrame(step)