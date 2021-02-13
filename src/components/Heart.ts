import IHeart from "../interfaces/IHeart";

class Heart implements IHeart {
  ctx: CanvasRenderingContext2D;
  private w: number;
  private h: number;
  private x: number;
  private y: number;
  topCurveHeight: number;
  bottomCurveHeight: number;
  color: string = "#000";

  constructor(
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    w: number,
    h: number,
    color?: string
  ) {
    this.ctx = ctx;
    this.x = startX + w / 2;
    this.y = startY;
    this.w = w;
    this.h = h;
    this.topCurveHeight = h * 0.4;
    this.bottomCurveHeight = h * 0.4;

    if (color) {
      this.color = color;
    }
  }

  draw() {
    // prepare
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.topCurveHeight);

    // top left curve
    this.ctx.bezierCurveTo(
      this.x,
      this.y,
      this.x - this.w / 2,
      this.y,
      this.x - this.w / 2,
      this.y + this.topCurveHeight
    );

    // bottom left curve
    this.ctx.bezierCurveTo(
      this.x - this.w / 2,
      this.y + (this.h + this.topCurveHeight) / 2,
      this.x,
      this.y + (this.h + this.bottomCurveHeight + this.topCurveHeight) / 2,
      this.x,
      this.y + this.h
    );

    // bottom right curve
    this.ctx.bezierCurveTo(
      this.x,
      this.y + (this.h + this.bottomCurveHeight + this.topCurveHeight) / 2,
      this.x + this.w / 2,
      this.y + (this.h + this.topCurveHeight) / 2,
      this.x + this.w / 2,
      this.y + this.topCurveHeight
    );

    // top right curve
    this.ctx.bezierCurveTo(
      this.x + this.w / 2,
      this.y,
      this.x,
      this.y,
      this.x,
      this.y + this.topCurveHeight
    );

    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.restore();
  }

  get posX(): number {
    return this.x - this.w / 2;
  }

  set posX(value: number) {
    this.x = value + this.w / 2;
  }

  get posY(): number {
    return this.y;
  }

  set posY(value: number) {
    this.y = value;
  }

  get width(): number {
    return this.w;
  }

  get height(): number {
    return this.h;
  }
}

export default Heart;
