import { TITLES } from "../../core/constants/constants";
import { AbstractPage } from "../../core/abstractClasses/AbstractPage";

export class ErrorPage extends AbstractPage {
  constructor(public id: string) {
    super(id);
  }

  render(): HTMLElement {
    const headerTitle = this.addTitle(TITLES.errorPage);
    this.container.append(headerTitle);
    
    return this.container;
  }
}