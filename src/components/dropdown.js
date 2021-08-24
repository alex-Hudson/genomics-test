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
 * ENH: Pass options as props
 */
export class Dropdown extends Component {
  render() {
    const dropdownContents = this._getDropdownContents();
    dropdownContents.push(this._getGitHubLinkElement());
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
        {dropdownContents}
      </Modal>
    );
  }

  /**
   * Stub - could have Ok handling in the future
   */
  handleOk() {
    this._closeModal();
  }

  /**
   * Close the modal
   */
  handleCancel() {
    this._closeModal();
  }

  _closeModal() {
    this.props.closeModal();
  }

  /**
   * Get items for content of dropdown
   */
  _getDropdownContents() {
    //ENH: Get this from props
    const iconInfo = [
      { icon: AimOutlined, text: "Our Mission" },
      { icon: TeamOutlined, text: "Meet the Team" },
      { icon: RocketOutlined, text: "Careers" },
    ];

    return iconInfo.map((info) => {
      return (
        <div className={"modal-content-item"} key={info.text}>
          <info.icon className={"modal-item-icon"} />
          <p className={"modal-content-text"}>{info.text}</p>
        </div>
      );
    });
  }

  /**
   * Get jsx element for linking to GitHub
   */
  _getGitHubLinkElement() {
    return (
      <a
        href={"https://github.com/alex-Hudson"}
        className={"modal-content-item"}
        key={"GitHub"}
      >
        <GithubOutlined />
        <p className={"modal-content-text"}>My GitHub page</p>
      </a>
    );
  }
}
