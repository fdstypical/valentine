import IDictionary from '../interfaces/IDictionary';

export default (styles: IDictionary<string>): string => {
  let styleStr: string = '';

  for(let style in styles) {
    styleStr += `${style}: ${styles[style]}; `;
  }

  return styleStr;
}