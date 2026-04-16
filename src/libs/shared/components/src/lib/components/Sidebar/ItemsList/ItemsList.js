import { useTranslations } from "@csms-consoles/shared-utils";
import CollapsedItems from "../CollapsedItems/CollapsedItems";
import Item from "../CollapsedItems/Item/Item";

const ItemsList = ({ list, onClick, sidebarStatus, toggleFeedback }) => {
  const translate = useTranslations();
  return (
    <>
      {list.map((item, i) =>
        item.type === "nested" ? (
          <CollapsedItems
            key={i}
            childs={item.childrens}
            onClick={onClick}
            name={translate(item.text)}
            icon={item.icon}
            sidebarStatus={sidebarStatus}
          />
        ) : (
          <Item item={translate(item)} handleMobileToggle={onClick} sidebarStatus={sidebarStatus} key={i} toggleFeedback={toggleFeedback} />
        )
      )}
    </>
  );
};

export default ItemsList;
