import type { LucideIcon } from "lucide-vue-next";
import MenuAppBuilder from "~/builder/menu-app.builder";

export default class MenuApp {
    constructor(
        public name: string = "",
        public url: string = "",
        public permission: string = "",
        public icon: LucideIcon | null = null,
    ) { }

    static create(): MenuAppBuilder {
        return new MenuAppBuilder();
    }

}