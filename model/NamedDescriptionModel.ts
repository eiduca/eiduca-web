import { ConcreteModel } from "./Concrete";

export abstract class NamedDescriptionModel extends ConcreteModel {
    constructor(
        public name: String = "",
        public description: String = "",
    ) { 
        super();
      }
}