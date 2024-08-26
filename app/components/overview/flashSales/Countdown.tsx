"use client"
import React from 'react'
import { useState, useEffect } from 'react';

interface countdownProps {
    targetDate: Date;
    className?: string;
}

const Countdown: React.FC<countdownProps> = ({ targetDate, className }) => {


    //time state
    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const millisecondsRemaining = targetDate.getTime() - now.getTime();

            if (millisecondsRemaining <= 0) {
                clearInterval(intervalId);
                setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(millisecondsRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (millisecondsRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((millisecondsRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((millisecondsRemaining % (1000 * 60)) / 1000);

            setRemainingTime({ days, hours, minutes, seconds });
        }, 1000);

     
        return () => clearInterval(intervalId);
    }, [targetDate]);

    const renderer = () => {
        return (
            <div className={className}>
                <div>
                    <p className='md:text-[15px] text-[13px]'>Days</p>
                    <p className='md:text-[25px] text-[20px]'>{remainingTime.days}</p>
                </div>
                <span className="text-orange font-bold md:text-[25px] text-[20px]">:</span>
                
                <div>
                    <p className='md:text-[15px] text-[13px]'>Hours</p>
                    <p className='md:text-[25px] text-[20px]'>{remainingTime.hours.toString().padStart(2, '0')}</p>
                </div>
                <span className="text-orange font-bold md:text-[25px] text-[20px]">:</span>
                
                <div>
                    <p className='md:text-[15px] text-[13px]' >Minutes</p>
                    <p className='md:text-[25px] text-[20px]'>{remainingTime.minutes.toString().padStart(2, '0')}</p>
                </div>
                <span className="text-orange font-bold md:text-[25px] text-[20px]">:</span>
                
                <div>
                    <p className='md:text-[15px] text-[13px]' >Seconds</p>
                    <p className='md:text-[25px] text-[20px]'>{remainingTime.seconds.toString().padStart(2, '0')}</p>
                </div>
            </div>
        );
    };

    return renderer()
}

export default Countdown
