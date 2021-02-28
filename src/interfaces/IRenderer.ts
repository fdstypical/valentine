import Heart from '../components/Heart';

export default interface IRenderer {
  hearts: Heart[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  metaFill: CanvasGradient,
  c0: string,
  c1: string,

  run(): void,
  updateGradient(c0: string, c1: string): void,
};