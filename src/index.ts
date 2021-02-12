import '@assets/scss/index.scss';
import render from './components/render';
import createNode from './components/createNode';
import drawStaff from './components/drawStaff';

const width: number = window.innerWidth;
const height: number = window.innerHeight;

const canvas = <HTMLCanvasElement> createNode(
  'canvas',
  {
    background: '#fcb6b6'
  },
  {
    width: `${width}px`,
    height: `${height}px`,
  }
);

drawStaff(canvas);

render(
  canvas,
  'root'
);