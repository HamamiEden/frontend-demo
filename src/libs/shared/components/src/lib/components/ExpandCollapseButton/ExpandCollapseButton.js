import { useEffect, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import Icon from "../Icon/Icon";

const ExpandCollapseButton = ({
  containerRef,
  orientation,
  relativeToViewPort = false,
  isExpanded,
  id,
  onClick,
  tooltip = "",
  disabled = false,
  styles = {}
}) => {
  const [containerRect, setContainerRect] = useState();

  useEffect(() => {
    if (!containerRef?.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setTimeout(() => setContainerRect(entry.target?.getBoundingClientRect()), [0]); // invoked after animation
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef]);

  if (!containerRect) return null;

  const isVertical = orientation === "right" || orientation === "left";
  const isHorizontal = orientation === "top" || orientation === "bottom";

  const rotateDeg =
    {
      top: isExpanded ? 180 : 0,
      bottom: isExpanded ? 0 : 180,
      right: isExpanded ? 90 : -90,
      left: isExpanded ? -90 : 90
    }[orientation] || 0;

  return (
    <Box
      sx={{
        ...(relativeToViewPort
          ? {
              position: "fixed",
              top: isVertical ? containerRect.top + containerRect.height / 2 : containerRect[orientation],
              left: isHorizontal ? containerRect.left + containerRect.width / 2 : containerRect[orientation]
            }
          : {
              position: "absolute",
              top: isHorizontal ? (orientation === "top" ? "0" : "100%") : "50%",
              left: isVertical ? (orientation === "left" ? "0" : "100%") : "50%"
            }),
        transform: `translateX(-50%) translateY(-50%) rotate(${rotateDeg}deg)`,
        ...styles
      }}
    >
      <Tooltip title={!disabled ? tooltip : ""} arrow placement={orientation}>
        <IconButton
          variant="primary"
          onClick={!disabled ? onClick : undefined}
          disabled={disabled}
          sx={{
            width: "24px",
            height: "24px",
            "&:hover .expand-more-button-gradient": { opacity: 1 }
          }}
          aria-label={id}
          name={id}
        >
          <Box
            className="expand-more-button-gradient"
            sx={{
              position: "absolute",
              height: "1px",
              width: (isHorizontal ? containerRect.width : containerRect.height) - 30,
              background: "linear-gradient(270deg, rgba(12, 111, 221, 0) 0%, #0C6FDD 50%, rgba(12, 111, 221, 0) 100%)",
              opacity: 0,
              transition: "opacity .3s",
              zIndex: -1
            }}
          />

          <Icon type="ExpandMoreIcon" style={{ width: "24px", height: "24px", transition: "transform .3s" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ExpandCollapseButton;
