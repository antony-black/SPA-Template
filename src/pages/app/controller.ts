import { Model } from "./model";
import { View } from "./view";
import { PageId } from "../../core/enums/pageId";

export class Controller {
  private createNewPage(pageId: string) {
    const view = new View();
    const page = Model.getPageById(pageId);
    view.removeCurrentPage();
    view.renderCurrentPage(page);
  }

   private  enableRoutChange() {
     window.addEventListener('hashchange', () => {
     const hash = window.location.hash.slice(1);
     this.createNewPage(hash);
     });
    }

   private getHeader() {
    const view = new View();
    view.getHeader();
   }

   public runPage(): void {
    this.getHeader();
    this.createNewPage(PageId.MainPage);
    this.enableRoutChange();
  }
}