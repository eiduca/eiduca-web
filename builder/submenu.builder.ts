import Submenu from "~/util/navigation/submenu";

export default class SubmenuBuilder {
    
    private submenu: Submenu = new Submenu();

    title(title: string): SubmenuBuilder{
        this.submenu.title = title;
        return this;
    }

    url(url: string): SubmenuBuilder{
        this.submenu.url = url;
        return this;
    }

    permission(permission: string): SubmenuBuilder{
        this.submenu.permission = permission;
        return this;
    }

    build(): Submenu{
        return this.submenu;
    }

}