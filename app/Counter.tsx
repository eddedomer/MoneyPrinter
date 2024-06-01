import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Display from './Display';

const Counter = () => {
    const [moneyEarned, setMoneyEarned] = useState(0);
    const [hourlyRate, setHourlyRate] = useState(500);
    const [secondlyRate, setSecondlyRate] = useState(hourlyRate / 3600/100);

useEffect(() => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedSeconds = (Date.now() - startTime) / 10;
        setMoneyEarned(elapsedSeconds * secondlyRate);
      }, 10);

      return () => clearInterval(interval);
    }, [secondlyRate]);

    

  return <Display moneyEarned={moneyEarned as number} />;
 };
 
export default Counter;