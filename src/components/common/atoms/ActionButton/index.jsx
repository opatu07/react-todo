import styles from './styles.module.css'
const ActionButton = ({ title, onClick }) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      {title}
    </button>
  );
};

export default ActionButton;
