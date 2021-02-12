export default (elem: HTMLElement, insertId: string): void => {
  const root = document.getElementById(insertId);
  root?.append(elem);
}