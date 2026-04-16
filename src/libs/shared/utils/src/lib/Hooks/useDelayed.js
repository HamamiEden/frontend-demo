import { useEffect, useState } from "react";

export default function useDelayed(waitBeforeShow = 500) {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return delayed;
}
