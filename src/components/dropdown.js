import { Modal } from "antd";
import {
  TeamOutlined,
  RocketOutlined,
  AimOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Component } from "react";

/**
 * Class to display Dropdown with options.
 * ENH: Pass options as props?
 */
export class Dropdown extends Component {
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.modalVisible}
        onOk={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
        okText={"Location"}
        okButtonProps={{ type: "default" }}
        cancelText={"Contact Us"}
        width={230}
        style={{ top: 60, left: "30vw" }}
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
        <a
          href={"https://github.com/alex-Hudson"}
          className={"modal-content-item"}
        >
          <GithubOutlined />
          <p className={"modal-content-text"}>My GitHub page</p>
        </a>
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
