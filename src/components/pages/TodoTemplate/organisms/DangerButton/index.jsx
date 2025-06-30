import './style.css'; 

const Button = ({ title, onClick }) => {
  return (
    <button className="common-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
