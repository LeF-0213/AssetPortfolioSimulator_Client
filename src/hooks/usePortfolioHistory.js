import { useEffect } from "react";
import { calculateTotalValue } from "../utils/calculations";
import { formatTime } from "../utils/formmaters";

export const usePortfolioHistory = (assets, setPriceHistory) => {
  useEffect(() => {    
    if (assets.length === 0) return;

    /* 
      setInterval은 js 내장 함수로, 일정한 시간 간격으로 특정함수를 반복적으로 실행하도록 예약하는데 사용
      const interval = setInterval(callback, delay, arg1, arg2, ...);
    */
    const interval = setInterval(() => {
      const totalValue = calculateTotalValue(assets);
      const timeString = formatTime();

      setPriceHistory((prev) => {
        const newHistory = [...prev, { time: timeString, value: totalValue }];

        // 가장 최근 20개만 잘라서 새로운 상태로 반환
        return newHistory.slice(-20);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [assets, setPriceHistory]);
};
