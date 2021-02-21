import Heart from '../components/Heart';

export default interface IRenderer {
  hearts: Heart[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,

  run(): void,
};