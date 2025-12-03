import { useMemo } from "react";
import { calculateTotalInvestment, calculateTotalReturn, calculateTotalValue } from "../utils/calculations";

export const usePortfolioCalculations = (assets) => {
  const totalValue = useMemo(() => calculateTotalValue(assets), [assets]);
  const totalInvestment = useMemo(() => calculateTotalInvestment(assets), [assets]);
  const totalReturn = useMemo(() => calculateTotalReturn(totalValue, totalInvestment), [totalValue, totalInvestment]);

  return { totalValue, totalInvestment, totalReturn };
};
