import '@assets/scss/index.scss';
import render from './components/render';
import createNode from './components/createNode';
import drawStaff from './components/drawStaff';

const canvas = <HTMLCanvasElement> createNode(
  'canvas',
  null,
  {
    width: '1000px',
    height: '1000px',
  }
);

drawStaff(canvas);

render(
  canvas,
  'root'
);