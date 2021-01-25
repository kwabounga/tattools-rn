import { cst } from "../const"
import { local } from "../texts";
const localText = local();
export default class TattoolsFile  {
  constructor() {
    this.name = "";
    this.models = [];
    this.modelsDef = {};
  }

  static instance = TattoolsFile.instance || new TattoolsFile();

  new() {
    this.newFile(localText.placeHolders.fileTitle, []);
  }

  newFile(fileName, modelsDefinition) {
    this.name = fileName;
    this.modelsDef = modelsDefinition;
  }

  stringify() {
    return JSON.stringify(this);
  }
}
