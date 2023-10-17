import { Controller } from "../../pages/app/controller/controller";

export default class StoreController {
  public static enableRoutChange(): void {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      Controller.createNewPage(hash);
    });
  }
}
