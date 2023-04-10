import styles from "./SendSection.module.css";

const SendSection = () => {
  return (
    <div className={styles.component7Parent}>
      <div className={styles.component7}>
        <div className={styles.component7Child} />
        <div className={styles.send}>Send</div>
      </div>
      <div className={styles.component8}>
        <div className={styles.component8Child} />
      </div>
      <div className={styles.subscribeForUpdates}>Subscribe for updates</div>
    </div>
  );
};

export default SendSection;
