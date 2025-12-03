// 수익률 계산
export const calculateReturn = (asset) => {
  return ((asset.currentPrice - asset.buyPrice) / asset.buyPrice) * 100;
};

// 현재 가치 계산
export const calculateCurrentValue = (asset) => {
  return asset.amount * asset.currentPrice;
};

// 총 투자금 계산
// arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
export const calculateTotalInvestment = (assets) => {
  return assets.reduce((sum, asset) => sum + asset.amount * asset.buyPrice, 0);
};

// 총 평가액 계산
export const calculateTotalValue = (assets) => {
  return assets.reduce((sum, asset) => sum + asset.amount * asset.currentPrice, 0);
};

// 총 수익률 계산
export const calculateTotalReturn = (totalValue, totalInvestment) => {
  if (totalInvestment === 0) return 0;
  return (totalValue - totalInvestment) / totalInvestment;
};
