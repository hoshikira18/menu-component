import { createContext, useContext, type RefObject } from "react";
import type { Side } from "./types";

interface MenuContextProps {
    isOpen: boolean
    toggleMenu: () => void
    triggerRef: RefObject<HTMLButtonElement | null>
    dropdownRef: RefObject<HTMLUListElement | null>
    position: Side
    offset: number
}

export const MenuContext = createContext<MenuContextProps>(null as any)
export const useMenuContext = () => {
    return useContext(MenuContext)
}