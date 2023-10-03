import "./index.css";

const CashButtons = (props) => {
  const { each, ChangeBalance } = props;
  const { value } = each;
  const onChangeBalance = () => {
    ChangeBalance(value);
  };
  return (
    <li>
      <button type="button" onClick={onChangeBalance}>
        {value}
      </button>
    </li>
  );
};
export default CashButtons;
