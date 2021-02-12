export default (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext('2d');

  return ctx;
}