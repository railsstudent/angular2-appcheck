import {AppDependency} from "./app-dependency";

export class AppDetail {

  id: number;
  appId: number;
  name: string;
  version: string;
  appType: string;
  dependencies: Array<AppDependency>;

  constructor (id: number, appId: number, name: string, version: string,
      appType: string, dependencies: Array<AppDependency>) {
    this.id = id;
    this.appId = appId;
    this.name = name;
    this.appType = appType;
    this.dependencies = dependencies;
  }
}
