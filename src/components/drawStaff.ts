import Renderer from './Renderer';

export default (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

  const renderer = new Renderer(canvas, ctx, 50);
  renderer.run();

  return ctx;
};
