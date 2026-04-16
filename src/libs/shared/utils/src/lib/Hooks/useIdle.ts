import { useCallback, useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";

interface IdleLogout {
  elapsedIdle: boolean;
  elapsedSession: boolean;
  resetSession: () => void;
}

// Default Idle time 10 seconds if not recieved any
const DEFAULT_IDLE = 10_000;

const useIdleLogout = (timeout: number, session_time: number): IdleLogout => {
  const [elapsedIdle, setElapsedIdle] = useState<boolean>(false);
  const [elapsedSession, setElapsedSession] = useState<boolean>(false);

  const { getRemainingTime } = useIdleTimer({
    timeout: timeout || DEFAULT_IDLE,
    throttle: 1000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (getRemainingTime() <= 0) {
        setElapsedIdle(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const resetSession = useCallback(() => {
    setElapsedSession(false);
    const startedTime = new Date();
    const interval = setInterval(() => {
      const now = new Date();
      const elapsed_time_since_start = now.getTime() - startedTime.getTime();
      if (elapsed_time_since_start >= session_time) {
        setElapsedSession(true);
        clearInterval(interval);
      }
    }, 60000);
  }, [session_time]);

  useEffect(() => {
    resetSession();
  }, [resetSession]);

  return { elapsedIdle, elapsedSession, resetSession };
};

export default useIdleLogout;
