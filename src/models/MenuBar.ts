import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";

export class  MenuBar {
    menus: Menu[] | undefined;
    submenus: SubMenu[] | undefined;
    menuItems: MenuItem[] | undefined;
}