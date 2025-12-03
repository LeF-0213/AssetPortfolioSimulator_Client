export const formatCurrency = (value) => {
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

export const formatTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};
