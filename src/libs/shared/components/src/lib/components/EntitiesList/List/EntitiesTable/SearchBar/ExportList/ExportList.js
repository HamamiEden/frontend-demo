import useExport from "../../../../../../Hooks/useExport";
import Export from "../../../../../Export/Export";

const ExportList = ({ filters, entity, exportName, accountId }) => {
  const { handleExport } = useExport(filters, entity, exportName, accountId);

  return <Export callback={handleExport} />;
};

export default ExportList;
