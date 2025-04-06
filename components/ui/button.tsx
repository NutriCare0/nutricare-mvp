
import { cn } from "@/lib/utils"
export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={cn("bg-black text-white rounded-2xl px-4 py-2 hover:bg-gray-900 transition", className)}
      {...props}
    >
      {children}
    </button>
  )
}
