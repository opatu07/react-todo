import './style.css'; 

const InputForm = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputForm;
