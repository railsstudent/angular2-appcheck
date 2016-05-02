
export class AppDependency {

  name: string;
  type: string;
  version: string;

  constructor(name: string, type: string, version: string) {
    this.name = name;
    this.type = type;
    this.version = version;
  }
}
