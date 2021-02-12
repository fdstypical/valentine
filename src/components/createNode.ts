import IDictionary from '../interfaces/IDictionary';
import serializeStyle from '../helpers/serializeStyles';
import serializeAttr from '../helpers/serializeAttr';

export default (elem: string, styles?: IDictionary<string> | null, attrs?: IDictionary<string> | null): HTMLElement => {
  let element: HTMLElement = document.createElement(elem);
  const styleStr: string = styles ? serializeStyle(styles) : '';

  if(attrs) {
    element = serializeAttr(
      element,
      {
        ...attrs,
        style: styleStr,
      }
    )
  } else {
    element = serializeAttr(element, {style: styleStr});
  }

  return element;
}