import SubmenuBuilder from "~/builder/submenu.builder";

export default class Submenu {
    constructor(
        public title: string = "",
        public url: string = "",
        public permission: string = ""
    ) { }

    static create(): SubmenuBuilder {
        return new SubmenuBuilder();
    }
}