import "./App.css";
import logo from "./images/logo.svg";
import { Component } from "react";
import AboutUsButton from "./components/aboutUsButton";

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
          <AboutUsButton
            modalVisible={this.state.modalVisible}
            openModal={this._openModal.bind(this)}
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
