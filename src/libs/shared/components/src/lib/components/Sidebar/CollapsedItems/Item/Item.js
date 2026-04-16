import ItemComp from "./ItemComp";

const Item = ({ item, handleMobileToggle, child, sidebarStatus, toggleFeedback }) => {
  return (
    <ItemComp
      handleMobileToggle={handleMobileToggle}
      item={item}
      child={child}
      sidebarStatus={sidebarStatus}
      toggleFeedback={toggleFeedback}
    />
  );
};

export default Item;
