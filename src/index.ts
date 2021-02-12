import '@assets/scss/index.scss';
import render from './components/render';
import createNode from './components/createNode';
import drawStaff from './components/drawStaff';

const canvas = <HTMLCanvasElement> createNode(
  'canvas',
  {
    width: '100%',
    height: '100%',
  },
);

drawStaff(canvas);

render(
  canvas,
  'root'
);