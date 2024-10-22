"use client";
import { useState, useEffect } from "react";
import { RedImageText } from "./red-image-text";
// import RedImageText from 'src@app/components/RedImageText';  // Import your custom component
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (endDate: string): TimeLeft => {
  const difference = +new Date(endDate) - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Cap the days at 3
    if (days > 3) {
      days = 3;
    }

    timeLeft = {
      days,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

interface FlashSaleProps {
  saleEndDate: string;
}

const FlashSale: React.FC<FlashSaleProps> = ({ saleEndDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(saleEndDate));
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(saleEndDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [saleEndDate]);

  if (!hasMounted) return null;

  return (
    <div className="text-center mt-6">
      {/* Insert RedImageText Component here */}
      <RedImageText
      categoryText="Today`s" headingText=""
        />  {/* This will render the alternative text */}

      <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-10 xl:space-x-12">
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-black">Days</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
        </div>
        <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 mt-5">
          :
        </span>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-black">Hours</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
        </div>
        <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 mt-5">
          :
        </span>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-black">Minutes</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
        </div>
        <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 mt-5">
          :
        </span>
        <div>
          <div className="text-sm sm:text-base lg:text-lg font-bold text-black">Seconds</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
