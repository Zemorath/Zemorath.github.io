import { useState, useEffect } from 'react';

interface UseTypingAnimationOptions {
  text: string;
  speed?: number;
  delay?: number;
  startOnMount?: boolean;
}

export function useTypingAnimation(options: UseTypingAnimationOptions) {
  const { text, speed = 80, delay = 500, startOnMount = true } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, startOnMount]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed, hasStarted]);

  const reset = () => {
    setDisplayedText('');
    setIsComplete(false);
    setHasStarted(false);
    setTimeout(() => setHasStarted(true), delay);
  };

  return { displayedText, isComplete, reset };
}
