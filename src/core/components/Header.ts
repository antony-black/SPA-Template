import { Component } from "../abstractClasses/Component";
import { BUTTONS } from "../constants/constants";
import { HTMLElements } from "../enums/htmlElement";

export class Header extends Component {
  constructor(public tagName: string, public className: string) {
    super(tagName, className);
  }

  private renderPageButtons(): void {
    const buttonsContainer = document.createElement(HTMLElements.div);

    BUTTONS.forEach((button) => {
      const buttonHtml = document.createElement(HTMLElements.a);
      const buttonId = `#${button.id}`;
      const buttonText = button.text;

      buttonHtml.href = buttonId;
      buttonHtml.text = buttonText;
      buttonsContainer.append(buttonHtml);
    });

    this.container.append(buttonsContainer);
  }

  public render(): HTMLElement {
    this.renderPageButtons();

    return this.container;
  }
}
