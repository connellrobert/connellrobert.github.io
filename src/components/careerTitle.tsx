import { useState, useEffect, useRef } from 'react';

const TextAnimation = ({ texts, delay }: { texts: string[], delay: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timeoutId = useRef<NodeJS.Timeout | undefined | null>(null);

  useEffect(() => {
    const typeOrDelete = () => {
      const currentText = texts[currentTextIndex];
      if (isTyping) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
          timeoutId.current = setTimeout(typeOrDelete, delay);
        } else {
          setIsTyping(false);
          timeoutId.current = setTimeout(typeOrDelete, delay * 3);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
          timeoutId.current = setTimeout(typeOrDelete, delay / 2);
        } else {
          setIsTyping(true);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          timeoutId.current = setTimeout(typeOrDelete, delay);
        }
      }
    };

    timeoutId.current = setTimeout(typeOrDelete, delay);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [currentTextIndex, displayedText, isTyping, texts, delay]);

  return (<div>
    <span className="text-accent">{displayedText}</span>
    <span className="animate-blink">|</span>
    </div>)
};

export default TextAnimation;