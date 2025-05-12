import { useEffect, useState, type ReactNode } from "react"
import { useMenuContext } from "./context"
import { calculateCoordsFromPlacement } from "./helper";

function Dropdown({ children }: { children: ReactNode }) {
    const { triggerRef, dropdownRef, isOpen, position, offset } = useMenuContext()
    const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        updatePosition()
    }, [isOpen])

    const updatePosition = () => {
        if (!isOpen) return
        const reference = triggerRef.current?.getBoundingClientRect()
        const floating = dropdownRef.current?.getBoundingClientRect()
        if (!reference || !floating) return

        const { x, y } = calculateCoordsFromPlacement({ reference, floating }, position, offset)
        setCoords({ x, y })
    }

    useEffect(() => {
        let currentEl = dropdownRef.current?.parentElement;
        console.log(currentEl)
        const scrollableParents: HTMLElement[] = [];

        // Walk up to find all scrollable ancestors
        while (currentEl) {
            const overflowY = window.getComputedStyle(currentEl).overflowY;
            if (overflowY === "auto" || overflowY === "scroll") {
                scrollableParents.push(currentEl);
            }
            currentEl = currentEl.parentElement;
        }

        // Attach scroll listeners
        scrollableParents.forEach((parent) => {
            parent.addEventListener("scroll", updatePosition, true);
        });
        window.addEventListener("resize", updatePosition, true);
        window.addEventListener("scroll", updatePosition, true);

        return () => {
            scrollableParents.forEach((parent) => {
                parent.removeEventListener("scroll", updatePosition, true);
            });
            window.removeEventListener("resize", updatePosition, true);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [triggerRef, dropdownRef, isOpen]);

    if (!isOpen) return null
    return (
        <ul key={JSON.stringify(coords)} style={{
            width: "max-content",
            position: "fixed",
            top: coords.y,
            left: coords.x,
        }}
            ref={dropdownRef}
            className="p-0.5 bg-white border border-gray-300 rounded-md shadow z-40"
        >{children}</ul>
    )
}

export default Dropdown