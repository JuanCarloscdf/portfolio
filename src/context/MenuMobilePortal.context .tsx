import { createContext, ReactNode, useCallback, useRef } from "react";
import { MenuMethods } from "../portals/NavbarMenu";


export type MenuValues = {
    openMenu: () => void,
    closeMenu: () => void,
    menuRef: React.MutableRefObject<MenuMethods | null>
}

export const MenuContext = createContext<MenuValues | null>(null)

export const MenuProvider = ({ children }: { children: ReactNode }) => {

    const menuRef = useRef<MenuMethods>(null)

    const openMenu = useCallback(() => {
        menuRef.current?.openMenu()
    }, [])
    const closeMenu = useCallback(() => {
        menuRef.current?.closeMenu()
    }, [])
    const value = {
        openMenu,
        closeMenu,
        menuRef
    }
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}