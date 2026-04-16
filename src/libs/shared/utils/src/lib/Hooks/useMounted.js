import { useEffect, useRef } from "react";

const useMounted = () => {
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, [mounted]);

  return mounted;
};

export default useMounted;
