import type { LucideIcon } from "lucide-vue-next";
import MenuApp from "~/util/navigation/menu-app";

export default class MenuAppBuilder {
    
    private menu: MenuApp = new MenuApp();

    name(name: string): MenuAppBuilder{
        this.menu.name = name;
        return this;
    }

    url(url: string): MenuAppBuilder{
        this.menu.url = url;
        return this;
    }

    icon(icon: LucideIcon): MenuAppBuilder{
        this.menu.icon = icon;
        return this;
    }

    permission(permission: string): MenuAppBuilder{
        this.menu.permission = permission;
        return this;
    }

    build(): MenuApp{
        return this.menu;
    }

}