import { 
  useEffect, 
  useState,
  useRef
} from "react";
import { createPortal } from "react-dom";

const Portal= ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const rootPortalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    rootPortalRef.current = document.getElementById('root-portal');
    rootPortalRef.current.style = 'z-index: 10';
    return () => {
      setMounted(false);
      rootPortalRef.current.style = 'z-index: -2';
      rootPortalRef.current = null;
    }
  }, [])

  return mounted
    ? createPortal(children, rootPortalRef.current)
    : null;
}

export default Portal;
