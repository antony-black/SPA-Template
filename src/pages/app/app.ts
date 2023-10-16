import { MainPage } from "../pageMain/MainPage";
import { PageId } from "../../core/enums/pageId";
import { Controller } from "./controller";

export class App {
  private initialPage: MainPage;

  constructor() {
    this.initialPage = new MainPage(PageId.MainPage);
  }

  public run() {
    Controller.runPage();
  }
}




