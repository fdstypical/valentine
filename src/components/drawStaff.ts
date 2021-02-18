import Heart from './Heart';

export default (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

  const hearts = Array.from(new Array(30), () => {
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
        speedY: Math.random() * 10,
        speedX: Math.random() * 5,
      },
      `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    );
  });

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((heart) => {
      heart.draw();

      // change directionY
      if (heart.posY <= 0) heart.options.directionY = 'down';
      if (heart.posY >= canvas.height - heart.height) { heart.options.directionY = 'up'; }

      // chnage directionX
      if (heart.posX <= 0) heart.options.directionX = 'right';
      if (heart.posX >= canvas.width - heart.width) { heart.options.directionX = 'left'; }

      // increment posY
      if (heart.options.directionY === 'up') heart.posY -= heart.options.speedY;
      else heart.posY += heart.options.speedY;

      // increment posX
      if (heart.options.directionX === 'right') { heart.posX += heart.options.speedX; } else heart.posX -= heart.options.speedX;
    });

    window.requestAnimationFrame(render);
  };

  render();

  return ctx;
};
