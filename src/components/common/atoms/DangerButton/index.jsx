import styles from './styles.module.css'

const ActionButton = ({ title, onClick }) => {
  return (
    <button className={styles.dangerButton} onClick={onClick}>
      {title}
    </button>
  );
};

export default ActionButton;
