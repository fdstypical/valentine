import Heart from "./Heart";

export default (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

  const heart = new Heart(ctx, 100, 100, 120, 120);
  heart.draw();

  return ctx;
};
