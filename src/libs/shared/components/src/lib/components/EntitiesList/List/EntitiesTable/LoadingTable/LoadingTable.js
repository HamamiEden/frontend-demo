import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import LoadingCell from "./LoadingCell/LoadingCell";

const LoadingTable = ({ rowsLength = 1, headersLength = 1, withCheckBoxes, headerCellWidth = 100, rowCellWidth = 150 }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <LoadingCell length={headersLength > 8 ? 8 : headersLength} width={headerCellWidth} withCheckBoxes={withCheckBoxes} />
        </TableRow>
      </TableHead>
      <TableBody>
        {new Array(rowsLength).fill(rowsLength).map((item, i) => (
          <TableRow key={i}>
            <LoadingCell length={headersLength > 8 ? 8 : headersLength} width={rowCellWidth} withCheckBoxes={withCheckBoxes} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LoadingTable;
