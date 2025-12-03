import { useState } from "react";
import styles from "./AssetForm.module.css";
import { FaPlus } from "react-icons/fa";
import { Button } from "../common/Button";
import { Card } from "../common/Card";

export const AssetForm = ({ onAddAsset }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    buyPrice: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount && formData.buyPrice) {
      onAddAsset({
        id: Date.now(),
        name: formData.name,
        amount: parseFloat(formData.amount),
        buyPrice: parseFloat(formData.buyPrice),
        currentPrice: parseFloat(formData.buyPrice),
      });
      setFormData({ name: "", amount: "", buyPrice: "" });
    }
  };

  return (
    <form className={styles["asset-form"]}>
      <Card title="자산 추가">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="자산명 (예: 삼성전자)"
            name="name"
            value={formData.name}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            className={styles["asset-form__input"]}
          />
          <input
            type="number"
            placeholder="보유 수량"
            name="amount"
            value={formData.amount}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            className={styles["asset-form__input"]}
          />
          <input
            type="text"
            placeholder="매입 가격"
            name="buyPrice"
            value={formData.buyPrice}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            className={styles["asset-form__input"]}
          />
          <Button type="submit" onClick={handleSubmit} variant="primary">
            <FaPlus size={20} />
            추가
          </Button>
        </div>
      </Card>
    </form>
  );
};
