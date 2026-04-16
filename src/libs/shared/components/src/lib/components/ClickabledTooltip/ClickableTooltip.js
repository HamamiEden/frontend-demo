import { useEffect, useState } from "react";
import { Box, ClickAwayListener, Tooltip } from "@mui/material";

const ClickableTooltip = ({
  children,
  clickTitle = "",
  hoverTitle = "",
  PopperProps = {},
  hoverPlacement = "bottom-start",
  placement = "bottom",
  arrow = true,
  itemId,
  setOpenTooltipId
}) => {
  const [openClick, setOpenClick] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const [placement1, setPlacement1] = useState(placement);

  useEffect(() => {
    if (!openClick && setOpenTooltipId) setOpenTooltipId(null);
    if (openClick && setOpenTooltipId) setOpenTooltipId(itemId);
  }, [openClick, setOpenTooltipId, itemId]);

  const handleClickableTooltipClose = () => {
    setOpenClick(false);
  };

  const handleClickableTooltipOpen = () => {
    setOpenClick(true);
    setOpenHover(false);
    setActiveTitle(clickTitle);
    setPlacement1(placement);
  };

  const handleHoverTooltipOpen = () => {
    if (openClick) return;
    setOpenHover(true);
    setActiveTitle(hoverTitle);
    setPlacement1(hoverPlacement);
  };

  const handleHoverTooltipClose = () => {
    setOpenHover(false);
  };

  const stopPropagation = event => {
    event.stopPropagation();
  };

  return (
    <ClickAwayListener onClickAway={handleClickableTooltipClose}>
      <Tooltip
        placement={placement1}
        onClose={handleClickableTooltipClose}
        open={openHover ? openHover : openClick ? openClick : false}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={activeTitle}
        arrow={arrow}
        slotProps={{
          popper: { ...PopperProps, onClick: stopPropagation }
        }}
      >
        <Box onMouseLeave={handleHoverTooltipClose} onMouseEnter={handleHoverTooltipOpen} onClick={handleClickableTooltipOpen}>
          {children}
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default ClickableTooltip;
