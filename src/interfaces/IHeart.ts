export default interface IHeart {
  ctx: CanvasRenderingContext2D,
  color: string,

  draw(): void,
}