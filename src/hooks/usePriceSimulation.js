import { useEffect } from "react";

export const usePriceSimulation = (isActive, assets, setAssets) => {
  /* 
    useEffect(setup, dependencies);
    setup (콜백 함수): 부수 효과 로직을 포함하는 함수로, 컴포넌트 렌더링 후 실행된다.
    dependencies (의존성 배열): 이 배열에 있는 값(상태, 프롭스 등)이 변경될 때만 setup 함수를 다시 실행한다.
  */
  useEffect(() => {
    if (!isActive || assets.length === 0) return;

    const interval = setInterval(() => {
      setAssets((prevAssets) =>
        prevAssets.map((asset) => ({
          ...asset,
          currentPrice: asset.currentPrice * (1 + (Math.random() - 0.5) * 0.02),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive, assets.length, setAssets]);
};
