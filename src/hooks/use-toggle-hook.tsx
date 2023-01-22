import { useContext } from "react"
import { ToggleContext } from "../context/toggle-context"
import { ToggleContextProps } from "../context/types"

function useToggleContext(): ToggleContextProps {
    const context = useContext(ToggleContext)
    if (context === undefined) {
        throw new Error('useToggle must be used within Provider')
    }
    const {toggleItem,setToggleItem } = context

    return {toggleItem,setToggleItem }
}

export default useToggleContext