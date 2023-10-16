import { HTMLElements } from "../enums/htmlElement";

export abstract class AbstractPage {
  protected container: HTMLElement;

  constructor(public id: string) {
    this.id = id;
    this.container = document.createElement(HTMLElements.div);
  }

  private createHeader() {
    const header = document.createElement(HTMLElements.h1);

    return header;
  }

  protected addTitle(title: string): HTMLElement {
    const header = this.createHeader();
    header.innerText = title;

    return header;
  }

  abstract render(): HTMLElement;
}
