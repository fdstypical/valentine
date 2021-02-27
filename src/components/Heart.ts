import IHeart, { IHeartOptions } from '../interfaces/IHeart';

class Heart implements IHeart {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  private w: number;
  private h: number;
  private x: number;
  private y: number;
  topCurveHeight: number;
  bottomCurveHeight: number;
  options: IHeartOptions;
  c0: string = '#FF9298';
  c1: string = '#E4008E';

  constructor(
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    w: number,
    h: number,
    options: IHeartOptions,
  ) {
    const { canvas } = ctx;
    const { width, height } = canvas;

    this.ctx = ctx;
    this.canvas = canvas;
    this.x = startX + w / 2;
    this.y = startY;
    this.w = w;
    this.h = h;
    this.topCurveHeight = h * 0.4;
    this.bottomCurveHeight = h * 0.4;
    this.options = options;
    this.ctx.fillStyle = this.createRadialGradient(ctx, width, height, width, this.c0, this.c1);;
  }

  private createRadialGradient(ctx: CanvasRenderingContext2D, w: number, h: number, r: number, c0: string, c1: string) {
    const gradient = ctx.createRadialGradient(
      w / 1, h / 1, 0,
      w / 1, h / 1, r
    );
    gradient.addColorStop(0, c0);
    gradient.addColorStop(1, c1);
    return gradient;
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
      this.y + this.topCurveHeight,
    );

    // bottom left curve
    this.ctx.bezierCurveTo(
      this.x - this.w / 2,
      this.y + (this.h + this.topCurveHeight) / 2,
      this.x,
      this.y + (this.h + this.bottomCurveHeight + this.topCurveHeight) / 2,
      this.x,
      this.y + this.h,
    );

    // bottom right curve
    this.ctx.bezierCurveTo(
      this.x,
      this.y + (this.h + this.bottomCurveHeight + this.topCurveHeight) / 2,
      this.x + this.w / 2,
      this.y + (this.h + this.topCurveHeight) / 2,
      this.x + this.w / 2,
      this.y + this.topCurveHeight,
    );

    // top right curve
    this.ctx.bezierCurveTo(
      this.x + this.w / 2,
      this.y,
      this.x,
      this.y,
      this.x,
      this.y + this.topCurveHeight,
    );

    const { ctx, c0, c1 } = this;
    const { canvas: { width, height } } = ctx;
    this.ctx.closePath();
    // this.ctx.fillStyle = this.createRadialGradient(ctx, width, height, width, c0, c1);
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
