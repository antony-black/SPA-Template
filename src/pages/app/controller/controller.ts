import { Model } from "../model/model";
import { View } from "../view/view";
import { PageId } from "../../../core/enums/pageId";
import StoreController from "../../../store/controller/storeController";

export class Controller {
  public static createNewPage(pageId: string): void {
    const view = new View();
    const page = Model.getPageById(pageId);
    view.removeCurrentPage();
    view.renderCurrentPage(page);
  }

  private static getHeader(): HTMLElement {
    const view = new View();
    return view.getHeader();
  }

  public static runPage(): void {
    this.getHeader();
    this.createNewPage(PageId.MainPage);
    StoreController.enableRoutChange();
  }
}
