export abstract class Component {
  protected container: HTMLElement;

  constructor(public tagName: string, public className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  public render() {
    return this.container;
  }
}