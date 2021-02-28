import Heart from './Heart';
import IRenderer from '../interfaces/IRenderer';

class Renderer implements IRenderer {
  hearts: Heart[];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  metaFill: CanvasGradient;
  c0: string = '#FF9298';
  c1: string = '#E4008E';

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, amountHearts: number) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.hearts = this.initHearts(canvas, ctx, amountHearts);
    this.metaFill = this.createRadialGradient(ctx, canvas.width, canvas.height, canvas.width, this.c0, this.c1);
  }

  private initHearts(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, length: number): Heart[] {
    const hearts = Array.from(new Array(length), () => {
      const x = Math.floor(Math.random() * (canvas.width - 120));
      const y = canvas.height + 120;
  
      return new Heart(
        ctx,
        x,
        y,
        120,
        120,
        {
          directionY: 'up',
          directionX: Math.random() > 0.5 ? 'right' : 'left',
          speedY: Math.random() * 4,
          speedX: Math.random() * 4,
        },
      );
    });

    return hearts;
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

  private renderHearts(): void {
    this.ctx.fillStyle = this.metaFill;

    this.hearts.forEach((heart) => {
      heart.draw();

      // change directionY
      if (heart.posY <= 0) heart.options.directionY = 'down';
      if (heart.posY >= this.canvas.height - heart.height) { heart.options.directionY = 'up'; }

      // chnage directionX
      if (heart.posX <= 0) heart.options.directionX = 'right';
      if (heart.posX >= this.canvas.width - heart.width) { heart.options.directionX = 'left'; }

      // increment posY
      if (heart.options.directionY === 'up') heart.posY -= heart.options.speedY;
      else heart.posY += heart.options.speedY;

      // increment posX
      if (heart.options.directionX === 'right') heart.posX += heart.options.speedX;
      else heart.posX -= heart.options.speedX;
    });
  }

  private renderLoop(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    window.requestAnimationFrame(() => this.renderLoop(ctx, canvas));
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderHearts();
  }

  updateGradient(c0: string, c1: string): void {
    const { width, height } = this.canvas;

    this.c0 = c0;
    this.c1 = c1;

    this.metaFill = this.createRadialGradient(this.ctx, width, height, width, this.c0, this.c1);
  }

  run(): void {
    this.renderLoop(this.ctx, this.canvas);
  }
}

export default Renderer;