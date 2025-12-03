import { useMemo } from "react";
import styles from "./PortfolioDistributionChart.module.css";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { COLORS } from "../../constants/colors";
import { formatCurrency } from "../../utils/formmaters";

export const PortfolioDistributionChart = ({ assets }) => {
  const chartData = useMemo(() => {
    return assets.map((asset) => ({
      name: asset.name,
      value: asset.amount * asset.currentPrice,
    }));
  }, [assets]);

  if (assets.length === 0) {
    return (
      <div className={styles["chart-card"]}>
        <h3 className={styles["chart-h3"]}>포트폴리오 비중</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">데이터가 없습니다</div>
      </div>
    );
  }

  return (
    <div className={styles["chart-card"]}>
      <h3 className={styles["chart-h3"]}>포트폴리오 비중</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value)} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
