import { MainPage } from "../pageMain/MainPage";
import { PageId } from "../../core/enums/pageId";
import { Controller } from "./controller/controller";

export class App {
  public run(): void {
    Controller.runPage();
  }
}
