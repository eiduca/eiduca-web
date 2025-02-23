import type { LucideIcon } from "lucide-vue-next";
import type Submenu from "./submenu";
import MenuLinkBuilder from "~/builder/menu-link.builder";

export default class MenuLink{
    constructor(
     public title: string = "",
     public url: string= "",
     public isActive: boolean = true,
     public icon: LucideIcon | null = null,
     public permission: string = "",
     public items: Submenu[] = []
    ){ }

    static create(): MenuLinkBuilder{
        return new MenuLinkBuilder();
    }
}

