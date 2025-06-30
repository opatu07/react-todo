import './style.css'; 

const ActionButton = ({ title, onClick }) => {
  return (
    <button className="common-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ActionButton;
