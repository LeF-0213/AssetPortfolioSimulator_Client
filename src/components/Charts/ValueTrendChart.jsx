import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from "./ValueTrendChart.module.css";
import { formatCurrency } from "../../utils/formmaters";

export const ValueTrendChart = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className={styles["chart-card"]}>
        <h3 className={styles["chart-h3"]}>포트폴리오 가치 추이</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">데이터가 수집 중입니다</div>
      </div>
    );
  }

  return (
    <div className={styles["chart-card"]}>
      <h3 className={styles["chart-h3"]}>포트폴리오 가치 추이</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis tickFormatter={(value) => `₩${(value / 1000).toFixed(0)}K`}/>
          <Tooltip formatter={(value) => formatCurrency(value)} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={1.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
