import EntitiesTable from "./List/EntitiesTable/EntitiesTable";
import { ListProvider } from "./ListProvider";

const EntitiesList = ({ ...props }) => {
  return (
    <ListProvider {...props}>
      <EntitiesTable />
    </ListProvider>
  );
};

export default EntitiesList;
