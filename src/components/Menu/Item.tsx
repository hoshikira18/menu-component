import type { ReactNode } from "react"

function Item({ children }: { children: ReactNode }) {
    return (
        <li className="bg-white hover:bg-zinc-200 px-3 py-1 rounded cursor-pointer">{children}</li>
    )
}

export default Item