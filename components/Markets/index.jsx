import styles from "./markets.module.css";
import { Button } from "@mui/material";
import AssetRow from "./assetRow";

const Markets = () => {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.leftSide}>
        <div className={styles.flexContainer}>
          <div className={styles.marketSizeDiv}>
            <p className={styles.text}>Market size:</p>
            <p className={styles.money}>$ 1,201,32,112.77</p>
          </div>
          <hr className={styles.HR}></hr>
          <div className={styles.totalBorrowedDiv}>
            <p className={styles.text}>Total Borrowed:</p>
            <p className={styles.money}>$ 527,960,277.73</p>
          </div>
          <hr className={styles.HR}></hr>
          <div className={styles.totalLiquidityDiv}>
            <p className={styles.text}>Total Liquidity:</p>
            <p className={styles.money}>$ 675,608,731.67</p>
          </div>
          <hr className={styles.HR}></hr>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.tableNames}>
          <p>Assets</p>
          <p>Market size</p>
          <p>Deposit APY</p>
          <p>Total borrowed</p>
          <p>Borrow APY</p>
        </div>
        <AssetRow
          assetLogo={"https://app.venus.io/coins/usdt.png"}
          assetName={"USDT"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />
        <AssetRow
          assetLogo={"https://app.venus.io/coins/busd.png"}
          assetName={"BUST"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />
        <AssetRow
          assetLogo={"https://app.venus.io/coins/usdt.png"}
          assetName={"USDT"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />{" "}
        <AssetRow
          assetLogo={"https://app.venus.io/coins/usdt.png"}
          assetName={"USDT"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />{" "}
        <AssetRow
          assetLogo={"https://app.venus.io/coins/usdt.png"}
          assetName={"USDT"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />{" "}
        <AssetRow
          assetLogo={"https://app.venus.io/coins/usdt.png"}
          assetName={"USDT"}
          marketSize={"$ 236.23M"}
          depositAPY={"6.31%"}
          totalBorrowed={"$ 193.03M"}
          borrowAPY={"-8.56%"}
        />
      </div>
    </div>
  );
};

export default Markets;
