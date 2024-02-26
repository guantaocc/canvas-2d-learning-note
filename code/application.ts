// 时间片

class Application {
  protected _start = -1
  protected _lastTime = -1
  protected _ehapseMesc = -1
  public _intervalMesc = -1
  protected _requestId = -1

  constructor(){}

  public start(){
    this._requestId = window.requestAnimationFrame((timestamp: number) => {
      this.stepRender(timestamp)
    })
  }

  stepRender(timestamp){
    if(this._start === -1) this._start = timestamp
    if(this._lastTime === -1) this._lastTime = timestamp
    this._intervalMesc = (timestamp - this._lastTime) / 1000
    this._ehapseMesc = timestamp - this._start
    this._lastTime = timestamp
    this.update(timestamp, this._intervalMesc, this._ehapseMesc)
    this.render()
    this._requestId = requestAnimationFrame((ehapseMesc: number) => {
      this.stepRender(ehapseMesc)
    })
  }

  stop(){
    this._start = -1
    this._lastTime = -1
    cancelAnimationFrame(this._requestId)
    this._requestId = -1
  }

  update(timestamp, intervalMesc, ehapseMesc){
    // console.log('update');
  }

  render(){}
}

export class Canvas2dApplication extends Application {
  constructor(){
    super()
  }
}

export class Stage extends Application {
  constructor(){
    super()
  }
}