import styles from './styles.module.css'

export const DangerButton = ({ title, onClick }) => {
  return (
    <button className={styles.dangerButton} onClick={onClick}>
      {title}
    </button>
  );
};
