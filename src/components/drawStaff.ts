// import drawHeart from './drawHeart';

export default (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

  // let x = 0;
  // let y = 0;
  // let count = 0;

  // const a = () => {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   drawHeart(ctx, 200+x, 300+y, 100, 100, 'red');
  //   y+=0.2;
    
  //   if(count < 500) x+=0.1;
  //   else x-=0.1;

  //   count++;

  //   if(count > 1000) count = 0;

  //   window.requestAnimationFrame(a);
  // }

  // a()

  return ctx;
}