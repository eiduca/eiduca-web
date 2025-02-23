import { CommonModel } from "./Common";

export abstract class ConcreteModel extends CommonModel {
    constructor(
        public deletedAt: Date | null = null,
        public deletedHow: number | null = null
    ) { 
        super();
      }
}