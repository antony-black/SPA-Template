import { AbstractPage } from "../../../core/abstractClasses/AbstractPage";
import { MainPage } from "../../pageMain/MainPage";
import { SettingsPage } from "../../pageSettings/SettingsPage";
import { StatisticsPage } from "../../pageStatistics/StatisticsPage";
import { ErrorPage } from "../../pageError/ErrorPage";
import { PageId } from "../../../core/enums/pageId";

export class Model {
  public static getPageById(pageId: string): AbstractPage | null {
    let page: AbstractPage | null = null;

    if (pageId === PageId.MainPage) {
      page = new MainPage(pageId);
    } else if (pageId === PageId.SettingsPage) {
      page = new SettingsPage(pageId);
    } else if (pageId === PageId.StatisticsPage) {
      page = new StatisticsPage(pageId);
    } else {
      page = new ErrorPage(pageId);
    }

    return page;
  }
}
