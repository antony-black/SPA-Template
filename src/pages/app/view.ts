import { AbstractPage } from "../../core/abstractClasses/AbstractPage";
import { PageId } from "../../core/enums/pageId";
import { Header } from "../../core/components/Header";

export class View {
  public header: Header;
  protected static container: HTMLElement = document.body;

  constructor(){
    this.header = new Header('header', 'headers-container');
  }

  public static removeCurrentPage(): boolean {
    const currentPageHTML = document.querySelector(`#${PageId.CurrentPage}`);

    if (currentPageHTML) {
      currentPageHTML.remove();
      return true;
    }
    return false;
  }

  public static renderCurrentPage(page: AbstractPage | null): boolean {
    if(page) {
      const pageHTML = page.render();
      pageHTML.id = PageId.CurrentPage;
      View.container.append(pageHTML);
      return true;
    }
    return false;
  }
/**
 * 
 * TODO rather need or not 'static'?
 */
  public getHeader(): HTMLElement {
    const header = this.header.render();
    return View.container.append(header)!;
  }
}