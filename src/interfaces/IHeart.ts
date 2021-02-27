export type DirectionY = 'up' | 'down';
export type DirectionX = 'right' | 'left';

export default interface IHeart {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement,
  draw(): void;
}

export interface IHeartOptions {
  directionY: DirectionY;
  directionX: DirectionX;
  speedY: number;
  speedX: number;
}
