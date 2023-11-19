import "./MenuModal.scss";
import MobileNavBar from "./mobile-nav-bar/MobileNavBar";
import { IoCloseSharp } from "react-icons/io5";

const MenuModal = ({ setMenuModal }) => {
  const closeModal = () => {
    setMenuModal(false);
  };

  return (
    <div className="menu-modal" onClick={closeModal}>
      <MobileNavBar />
      <IoCloseSharp />
    </div>
  );
};

export default MenuModal;
