import { calculateCurrentValue, calculateReturn } from "../../utils/calculations";
import styles from "./AssetList.module.css";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { formatCurrency } from "../../utils/formmaters";

export const AssetList = ({ assets, onDeleteAsset }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className={styles["list-th"]}>자산명</th>
              <th className={styles["list-th"]}>보유량</th>
              <th className={styles["list-th"]}>매입가</th>
              <th className={styles["list-th"]}>현재가</th>
              <th className={styles["list-th"]}>평가액</th>
              <th className={styles["list-th"]}>수익률</th>
              <th className={styles["list-th"]}>삭제</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => {
              const returnRate = calculateReturn(asset);
              const currentValue = calculateCurrentValue(asset);
              return (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className={`${styles["list-td"]} font-medium text-gray-900`}>{asset.name}</td>
                  <td className={`${styles["list-td"]} text-gray-700`}>{asset.amount.toLocaleString()}</td>
                  <td className={`${styles["list-td"]} text-gray-700`}>{formatCurrency(asset.buyPrice)}</td>
                  <td className={`${styles["list-td"]} text-gray-700`}>{formatCurrency(asset.currentPrice)}</td>
                  {/* toLocaleString()의 첫번째 인수가 undefined, 사용자의 현재 시스템 로케일을 사용하라는 의미이다. */}
                  {/* maximumFractionDigits 소수점 이하를 최대 0자리까지만 표시, 즉 정수부만 표시 */}
                  {/* number.toFixed(digits); 인수로 소수점 이하에 표시할 자릿수 */}
                  <td className={`${styles["list-td"]} font-semibold text-gray-900`}>{formatCurrency(currentValue)}</td>
                  <td className={styles["list-td"]}>
                    <span
                      className={`${styles["list-icon-box"]} ${returnRate >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {returnRate >= 0 ? <IoMdTrendingUp size={16} /> : <IoMdTrendingDown size={16} />}
                      {returnRate.toFixed(2)}%
                    </span>
                  </td>
                  <td className={styles["list-td"]}>
                    <button onClick={() => onDeleteAsset(asset.id)} className={styles["list-button"]}>
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {assets.length === 0 && <div className="text-center py-12 text-gray-500">자산을 추가해주세요</div>}
      </div>
    </div>
  );
};
