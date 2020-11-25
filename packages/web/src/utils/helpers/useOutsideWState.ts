import { useEffect, useState } from "react"

export const useOutsideWState = (ref: any) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false)
      } else {
        setActive(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
  return { active, setActive }
}
