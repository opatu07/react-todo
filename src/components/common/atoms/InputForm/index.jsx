import styles from './styles.module.css'; 

const InputForm = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.inputForm}
    />
  );
};

export default InputForm;
