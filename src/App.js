import "./App.css";
import logo from "./images/logo.svg";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Dropdown } from "./components/dropdown";
import { Component } from "react";

/**
 * Class to render App containing header bar and modal
 */
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-border-header">
          <img src={logo} className={"acme-logo"} alt="ACME corp"></img>
          <div className={"home-btn"}>Home</div>
          <div className={"about-btn"} onClick={this._openModal.bind(this)}>
            About Us
            {this.state.modalVisible ? (
              <CaretUpOutlined />
            ) : (
              <CaretDownOutlined />
            )}
          </div>
          <Dropdown
            modalVisible={this.state.modalVisible}
            closeModal={this._closeModal.bind(this)}
          />
        </div>
      </div>
    );
  }

  /**
   * Display modal
   */
  _openModal() {
    this.setState({ modalVisible: true });
  }

  /**
   * Hide modal
   */
  _closeModal() {
    this.setState({ modalVisible: false });
  }
}

export default App;
