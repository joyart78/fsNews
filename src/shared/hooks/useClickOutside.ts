import { RefObject, useEffect, useRef } from "react";

type ClickOutsideCallback = (event: MouseEvent) => void;

export default function useClickOutside(
  elRef: RefObject<HTMLElement | null>,
  cb: ClickOutsideCallback,
) {
  const blocked = useRef(true);

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    window.requestAnimationFrame(() => {
      blocked.current = false;
    });

    function clickHandler(e: MouseEvent) {
      if (elRef.current && !blocked.current) {
        if (!elRef.current.contains(e.target as Node)) {
          cb(e);
        }
      }
    }

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, [elRef, cb]);

  return null;
}
