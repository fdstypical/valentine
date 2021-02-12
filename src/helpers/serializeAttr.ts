import IDictionary from '../interfaces/IDictionary';

export default (elem: HTMLElement, attrs: IDictionary<string>): HTMLElement => {
  for(let attr in attrs) {
    elem.setAttribute(attr, attrs[attr]);
  }
  return elem;
}