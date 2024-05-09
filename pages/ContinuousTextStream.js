import { useEffect, useState } from 'react'
import { BannerStrip } from 'web3uikit'
import Image from 'next/image';

const textArray = [
  "Delhi Conference approved 15th finance commission.",
  "Budget queries needs to be reverted in 5 working days",
  "A new Blockchain based system implementation is impllicated from this year. States have to resister with a wallet address.",
  "Finance minister Nirmala Sitaraman earges new system to be enforced from 2024 after watching the implications in this year.",
];

const ContinuousTextStream = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textArray[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      setCurrentText(textArray[currentIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return(
    <div className='banner-strip'>
      {currentText}
    </div>
    
  );
};

export default ContinuousTextStream;
