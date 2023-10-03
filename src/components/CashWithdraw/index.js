import { Component } from "react";
import "./index.css";
import CashButtons from "../CashButtons";

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];
class CashWithdraw extends Component {
  state = {
    value: 2000,
  };

  ChangeBalance = (value) => {
    this.setState((prev) => {
      return {
        value: prev.value - value,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <div className="title-card">
          <span className="title-logo">R</span>
          <h2>Ravichandra</h2>
        </div>
        <div className="balance-card">
          <h1>Balance</h1>
          <div className="balance-value-card">
            <h1>{value}</h1>
            <p>In Rupess</p>
          </div>
        </div>
        <div className="control-card">
          <div>
            <h3>Withdraw</h3>
            <p>Choose The Sum (In Rupess)</p>
          </div>
          <ul>
            {denominationsList.map((each) => {
              return (
                <CashButtons
                  each={each}
                  key={each.id}
                  ChangeBalance={this.ChangeBalance}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default CashWithdraw;
