import { Modal } from "antd";
import { TeamOutlined, RocketOutlined, AimOutlined } from "@ant-design/icons";
import { Component } from "react";

export class Dropdown extends Component {
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.modalVisible}
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
    );
  }

  handleOk() {
    this._closeModal();
  }

  handleCancel() {
    this._closeModal();
  }

  _closeModal() {
    this.props.closeModal();
  }
}
