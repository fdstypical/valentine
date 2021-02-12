// sotty, bad code widthout types...
export default (ctx: any, fromx: any, fromy: any, lw: any, hlen: any, color: any) => {
  const x = fromx;
  const y = fromy;
  const width = lw ;
  const height = hlen;

  ctx.save();
  ctx.beginPath();
  const topCurveHeight = height * 0.4;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(
    x, y, 
    x - width / 2, y, 
    x - width / 2, y + topCurveHeight
  );

  // bottom left curve
  ctx.bezierCurveTo(
    x - width / 2, y + (height + topCurveHeight) / 2, 
    x, y + (height + 50 + topCurveHeight) / 2, 
    x, y + height
  );

  // bottom right curve
  ctx.bezierCurveTo(
    x, y + (height + 50 + topCurveHeight) / 2, 
    x + width / 2, y + (height + topCurveHeight) / 2, 
    x + width / 2, y + topCurveHeight
  );

  // top right curve
  ctx.bezierCurveTo(
    x + width / 2, y, 
    x, y, 
    x, y + topCurveHeight
  );

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}