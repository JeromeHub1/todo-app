import { useEffect, useState } from "react"
import './QuoteGen.css';

const quotes = [
  "stay consistent, not perfect.",
  "Work hard.",
  "Consistency over perfection.",
  "Do or do not, there is no try.",
  "Consistent hardwork leads to success.",
  "I'd rather hustle 24/7 than slave 9 to 5.",
  "Stay humble, hustle hard.",
  "It always seems impoosible until it's done.",
];

export default function QuoteGen() {

  const [currentQuote, setCurrentQuote] = useState("");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

    setCurrentQuote(getRandomQuote());

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentQuote(getRandomQuote());
        setFade(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-box">
      <p className={`quote-text ${fade ? "fade-out" : "fade-in"}`}
      >{currentQuote}</p>
    </div>
  )
}
