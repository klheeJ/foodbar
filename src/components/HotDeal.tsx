import { useEffect, useRef, useState } from 'react';

const HotDeal = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef()

  const startTimer = (() => {
    const countdownDate = new Date('May 30, 2025 00:00:00').getTime();

    interval = setInterval(()=> {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
      const seconds = Math.floor(((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        /// stop our timer 
        clearInterval(interval.current);
      } else {
        /// update timer 
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  });
  // componentDidMount
  useEffect(()=> {
    startTimer();
    return ()=> {
      clearInterval(interval.current);
    }
  },[])

  return (
    <div className="bg-[url('./public/HotDealBackground.jpg')] bg-cover h-[30em] flex font-bold">
      <div className="text-white ml-40 flex flex-col justify-center">
        <div className="text-xl">We Offer A Hot Deal Offer Every Festival</div>
        <div className="text-4xl">Deal of the day</div>
        <li className="flex gap-3">
          <ul>
            <p className='bg-red-600 min-w-[3em] min-h-[2em] flex flex-col justify-center items-center text-2xl'>{timerDays}</p>
            Days
          </ul>
          <ul>
            <p className='bg-red-600 min-w-[3em] min-h-[2em] flex flex-col justify-center items-center text-2xl'>{timerHours}</p>
            Hours
          </ul>
          <ul>
            <p className='bg-red-600 min-w-[3em] min-h-[2em] flex flex-col justify-center items-center text-2xl'>{timerMinutes}</p>
            Minutes
          </ul>
          <ul>
            <p className='bg-red-600 min-w-[3em] min-h-[2em] flex flex-col justify-center items-center text-2xl'>{timerSeconds}</p>
            Seconds
          </ul>
        </li>
        <button className="bg-white text-slate-600 border-solid font-bold border-white border-2 pt-2 pb-2 w-[10em] rounded-sm">Shop Now</button>
      </div>
    </div>

    
  )
};

export default HotDeal
