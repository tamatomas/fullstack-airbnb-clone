import { useEffect } from "react";

/**
 * Functions which performs a click outside event listener
 * @param {*} ref dom element you want to hear outside
 * @param {*} setOutside function to set outside state
 * @param {*} cleanup when false prevents cleaning other listeners
 */
export const useOutside = (
  ref: any,
  setOutside: () => void,
  cleanup = true
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    if (cleanup)
      return () => {
        document.removeEventListener("click ", handleClickOutside, true);
      };
  }, [ref, setOutside, cleanup]);
};
