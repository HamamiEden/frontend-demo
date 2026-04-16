import { Checkbox, Skeleton, TableCell } from "@mui/material";

const LoadingCell = ({ length = 1, width, withCheckBoxes }) => {
  return (
    <>
      {withCheckBoxes && (
        <TableCell padding="checkbox">
          <Checkbox checked={false} disabled={true} />
        </TableCell>
      )}
      {new Array(length).fill(length).map((item, i) => (
        <TableCell key={i}>
          <Skeleton width={width} alt="loading-table-cell" aria-busy="true" />
        </TableCell>
      ))}
    </>
  );
};

export default LoadingCell;
