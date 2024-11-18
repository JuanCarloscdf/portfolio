import { useContext } from "react";
import { MenuContext, MenuValues } from "../context/MenuMobilePortal.context ";

export function useMenuContenxt() {
    const context = useContext(MenuContext) as MenuValues
    if (!context) throw new Error("menu provider must be required.")
    const { closeMenu, menuRef, openMenu } = context
    return { closeMenu, openMenu, menuRef }
}