import { Dropdown } from "./dropdown";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

/**
 * Functional class to display button that shows or hides modal
 * Shows arrow icon up or down if modal is visible
 * @returns {JSX}
 */
function AboutUsButton(props) {
  return (
    <div>
      <div className={"about-btn"} onClick={props.openModal}>
        About Us
        {props.modalVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </div>
      <Dropdown
        modalVisible={props.modalVisible}
        closeModal={props.closeModal}
      />
    </div>
  );
}

export default AboutUsButton;
