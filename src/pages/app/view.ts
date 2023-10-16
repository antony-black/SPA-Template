import { AbstractPage } from "../../core/abstractClasses/AbstractPage";
import { PageId } from "../../core/enums/pageId";
import { Header } from "../../core/components/Header";

export class View {
  public header: Header;
  protected container: HTMLElement = document.body;

  constructor(){
    this.header = new Header('header', 'headers-container');
  }

  public removeCurrentPage(): boolean {
    const currentPageHTML = document.querySelector(`#${PageId.CurrentPage}`);

    if (currentPageHTML) {
      currentPageHTML.remove();
      return true;
    }
    return false;
  }

  public renderCurrentPage(page: AbstractPage | null): boolean {
    if(page) {
      const pageHTML = page.render();
      pageHTML.id = PageId.CurrentPage;
      this.container.append(pageHTML);
      return true;
    }
    return false;
  }

  public getHeader(): HTMLElement {
    const header = this.header.render();
    return this.container.append(header)!;
  }
}