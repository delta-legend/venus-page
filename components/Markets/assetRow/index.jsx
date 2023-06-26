import styles from "../markets.module.css";
const AssetRow = ({
  assetLogo,
  assetName,
  marketSize,
  depositAPY,
  totalBorrowed,
  borrowAPY,
}) => {
  return (
    <div className={styles.row}>
      <div className={styles.imageDiv}>
        <img height={"30px"} src={assetLogo}></img>
        <p className={styles.rowText}>{assetName}</p>
      </div>
      <p className={styles.rowText}>{marketSize}</p>
      <p className={styles.rowText}>{depositAPY}</p>
      <p className={styles.rowText}>{totalBorrowed}</p>
      <p className={styles.rowText}>{borrowAPY}</p>
    </div>
  );
};

export default AssetRow;
