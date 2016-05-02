import {AppDependency} from "./app-dependency";

export class AppDetail {

  id: number;
  appId: number;
  name: string;
  version: string;
  appType: string;
  dependencies: Array<AppDependency>;
  code: string;

  constructor (code: string, id: number, appId: number, name: string, version: string,
      appType: string, dependencies: Array<AppDependency>) {
    this.code = code;
    this.id = id;
    this.appId = appId;
    this.name = name;
    this.appType = appType;
    this.version = version;
    this.dependencies = dependencies;
  }
}
