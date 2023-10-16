import { AbstractPage } from "../../core/abstractClasses/AbstractPage";
import { MainPage } from "../pageMain/MainPage";
import { SettingsPage } from "../pageSettings/SettingsPage";
import { StatisticsPage } from "../pageStatistics/StatisticsPage";
import { ErrorPage } from "../pageError/ErrorPage";
import { PageId } from "../../core/enums/pageId";

export class Model {
  /** 
   * TODO redo 'model' as array or Map
   * example: [
   * {
   *   id: PageId.MainPage, 
   *   instance: new MainPage(pageId)
   * },
   * {
   *   id: PageId.MainPage, 
   *   instance: new MainPage(pageId)
   * },
   * {
   *   id: PageId.MainPage, 
   *   instance: new MainPage(pageId)
   * },
   * ] or
   * new Map({
   *  {id: PageId.MainPage} : new MainPage(pageId)},
   *  {id: PageId.MainPage} : new MainPage(pageId)},
   *  {id: PageId.MainPage} : new MainPage(pageId)},
   * })
   * then move this function to 'controller', and redo as array method, kind of 'find'
   * method should find inputing id and pick required class and create instance
  */
  public static getPageById(pageId: string): AbstractPage | null {
    let page: AbstractPage | null = null;

    if(pageId === PageId.MainPage) {
      page = new MainPage(pageId);
    } else if(pageId === PageId.SettingsPage) {
      page = new SettingsPage(pageId);
    } else if(pageId === PageId.StatisticsPage) {
      page = new StatisticsPage(pageId);
    } else {
      page = new ErrorPage(pageId);
    }

    return page;
  }
}