import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

const TooltipOverflow = ({ elementRef, title = "", arrow, placement = "bottom", children, multiLine = false, ...props }) => {
  const [tooltipTitle, setTooltipTitle] = useState(title);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      const isOverflowing = multiLine
        ? elementRef.current.scrollHeight > elementRef.current.clientHeight
        : elementRef.current.scrollWidth > elementRef.current.clientWidth;

      if (isOverflowing) {
        return setTooltipTitle(title);
      } else {
        return setTooltipTitle("");
      }
    }
    return setTooltipTitle(title);
  }, [title, elementRef, multiLine]);

  return (
    <Tooltip title={tooltipTitle} arrow={arrow} placement={placement} {...props}>
      {children}
    </Tooltip>
  );
};
export default TooltipOverflow;
