import type React from "react"
import { useMenuContext } from "./context"


function Trigger({ children }: { children: React.ReactNode }) {
    const { triggerRef, toggleMenu } = useMenuContext()
    return <button type="button" ref={triggerRef} onClick={toggleMenu}>
        {children}
    </button>
}

export default Trigger