import type { LucideIcon } from "lucide-vue-next";
import MenuLink from "~/util/navigation/menu.link";
import type Submenu from "~/util/navigation/submenu";

export default class MenuLinkBuilder {
    
    private menu: MenuLink = new MenuLink();

    title(title: string): MenuLinkBuilder{
        this.menu.title = title;
        return this;
    }

    url(url: string): MenuLinkBuilder{
        this.menu.url = url;
        return this;
    }

    isActive(isActive: boolean): MenuLinkBuilder{
        this.menu.isActive = isActive;
        return this;
    }

    icon(icon: LucideIcon): MenuLinkBuilder{
        this.menu.icon = icon;
        return this;
    }

    permission(permission: string): MenuLinkBuilder{
        this.menu.permission = permission;
        return this;
    }

    items(items: Submenu[]): MenuLinkBuilder{
        this.menu.items = items;
        return this;
    }

    build(): MenuLink{
        return this.menu;
    }

}