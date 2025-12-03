import React, { useState } from "react";
import "./App.css";
import { AssetForm } from "./components/AssetForm/AssetForm";
import Header from "./components/Header/Header";
import { AssetList } from "./components/AssetList/AssetList";
import { SummaryCard } from "./components/SummaryCard/SummaryCard";
import { usePortfolioCalculations } from "./hooks/usePortfolioCalculations";
import { PortfolioDistributionChart } from "./components/Charts/PortfolioDistributionChart";
import { usePortfolioHistory } from "./hooks/usePortfolioHistory";
import { usePriceSimulation } from "./hooks/usePriceSimulation";
import { ValueTrendChart } from "./components/Charts/ValueTrendChart";

function App() {
  const [assets, setAssets] = useState([]);
  const [priceHistory, setPriceHistory] = useState([]);
  const [isPriceSimActive, setIsPriceSimActive] = useState(true);

  usePortfolioHistory(assets, setPriceHistory);

  usePriceSimulation(isPriceSimActive, assets, setAssets);

  const { totalValue, totalInvestment, totalReturn } = usePortfolioCalculations(assets);

  const togglePriceSimulation = () => {
    setIsPriceSimActive(!isPriceSimActive);
  };

  const handleAddAsset = (asset) => {
    setAssets([...assets, asset]);
  };

  const handleDeleteAsset = (id) => {
    setAssets(assets.filter((asset) => asset.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Header togglePriceSim={togglePriceSimulation} isPriceSimActive={isPriceSimActive} />
          <AssetForm onAddAsset={handleAddAsset} />
          <SummaryCard totalValue={totalValue} totalInvestment={totalInvestment} totalReturn={totalReturn} />
          <AssetList assets={assets} onDeleteAsset={handleDeleteAsset} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PortfolioDistributionChart assets={assets} />
            <ValueTrendChart history={priceHistory} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
