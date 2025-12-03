import { formatCurrency } from "../../utils/formmaters";
import { Card } from "../common/Card";
import styles from "./SummaryCard.module.css";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

export const SummaryCard = ({ totalValue, totalInvestment, totalReturn }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card title="총 투자 금액">
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(totalInvestment)}
        </p>
      </Card>
      <Card title="현재 평가액">
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(totalValue)}
        </p>
      </Card>
      <Card title="총 투자 금액">
        <p className={`${styles["summary-total-return"]} ${totalReturn >= 0 ? "text-green-600" : "text-red-600"}`}>
          {totalReturn >= 0 ? <HiTrendingUp size={24} /> : <HiTrendingDown size={24} />}
          {totalReturn.toFixed(2)}%
        </p>
      </Card>
    </div>
  );
};
