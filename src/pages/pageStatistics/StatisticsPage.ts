import { TITLES } from "../../core/constants/constants";
import { AbstractPage } from "../../core/abstractClasses/AbstractPage";

export class StatisticsPage extends AbstractPage{

  constructor(public id: string) {
    super(id);
  }

  public render() {
    const headerTitle = this.addTitle(TITLES.statisticsPage);
    this.container.append(headerTitle);

    return this.container;
  }
}



