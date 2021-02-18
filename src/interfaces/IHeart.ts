export type DirectionY = 'up' | 'down';
export type DirectionX = 'right' | 'left';

export interface IHeart {
  ctx: CanvasRenderingContext2D;
  color: string;

  draw(): void;
}

export interface IHeartOptions {
  directionY: DirectionY;
  directionX: DirectionX;
  speedY: number;
  speedX: number;
}
