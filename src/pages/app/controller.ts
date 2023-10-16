import { Model } from "./model";
import { View } from "./view";
import { PageId } from "../../core/enums/pageId";

export class Controller {
  private static createNewPage(pageId: string) {
    const page = Model.getPageById(pageId);
    View.removeCurrentPage();
    View.renderCurrentPage(page);
  }

   private static enableRoutChange() {
     window.addEventListener('hashchange', () => {
     const hash = window.location.hash.slice(1);
     Controller.createNewPage(hash);
     });
    }

   private static getHeader() {
    const view = new View();
    view.getHeader();
   }
/**
 * 
 * TODO rather need or not 'static'?
 */
   public static runPage(): void {
    Controller.getHeader();
    Controller.createNewPage(PageId.MainPage);
    Controller.enableRoutChange();
  }
}