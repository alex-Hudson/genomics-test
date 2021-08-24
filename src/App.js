import "./App.css";
import logo from "./images/logo.svg";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  TeamOutlined,
  RocketOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { Component } from "react";
import { Modal } from "antd";

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
          <div
            className={"about-btn"}
            onClick={this.handleModalClick.bind(this)}
          >
            About Us
            {this.state.modalVisible ? (
              <CaretUpOutlined />
            ) : (
              <CaretDownOutlined />
            )}
          </div>
          <>
            <Modal
              title="Basic Modal"
              visible={this.state.modalVisible}
              onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}
              okText={"Location"}
              cancelText={"Contact Us"}
            >
              <div className={"modal-content-item"}>
                <AimOutlined className={"modal-item-icon"} />
                <p className={"modal-content-text"}>Our Mission</p>
              </div>
              <div className={"modal-content-item"}>
                <TeamOutlined />
                <p className={"modal-content-text"}>Meet the Team</p>
              </div>
              <div className={"modal-content-item"}>
                <RocketOutlined />
                <p className={"modal-content-text"}>Careers</p>
              </div>
            </Modal>
          </>
        </div>
      </div>
    );
  }

  handleModalClick() {
    this.setState({ modalVisible: true });
  }

  handleOk() {
    this._closeModal();
  }

  handleCancel() {
    this._closeModal();
  }

  _closeModal() {
    this.setState({ modalVisible: false });
  }
}

export default App;
