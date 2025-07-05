import styles from './styles.module.css'
export const ActionButton = ({ title, onClick }) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      {title}
    </button>
  );
};

