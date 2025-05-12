import type { ButtonHTMLAttributes } from "react"
import type React from "react"

type ButtonProps = {
    children: React.ReactNode
    ref?: React.Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props }: ButtonProps) {
    const className = "py-1.5 px-5 bg-blue-500 text-zinc-50 rounded-md text-sm font-medium transition-all active:scale-105 cursor-pointer focus:outline-[2px] focus:outline-blue-300"

    return (
        <button type="button" className={className} {...props}>{children}</button>
    )
}

export default Button