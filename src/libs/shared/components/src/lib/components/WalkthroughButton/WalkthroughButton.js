import { useContext, useEffect } from "react";
import { Button, Grid2 as Grid } from "@mui/material";
import { PoopoverContext } from "@csms-consoles/shared-state";
import Icon from "../Icon/Icon";

const WalkthroughButton = ({
  itemsPrefix,
  firstElementOrder = 1,
  disabled,
  startWalkthrough = false,
  timeoutSeconds = 0,
  onShowPoop = null
}) => {
  const { showPoop, allElementsRegistered } = useContext(PoopoverContext);

  useEffect(() => {
    let timer = null;

    if (startWalkthrough && allElementsRegistered) {
      timer = setTimeout(() => {
        showPoop(itemsPrefix, firstElementOrder);
      }, timeoutSeconds);
    }

    return () => timer && clearTimeout(timer);
  }, [startWalkthrough, firstElementOrder, itemsPrefix, showPoop, timeoutSeconds, allElementsRegistered]);

  const startWalkthroughHandler = () => {
    showPoop(itemsPrefix, firstElementOrder);
    if (onShowPoop) {
      onShowPoop(itemsPrefix);
    }
  };

  return (
    <Button
      variant="primary"
      bg_color="turquoise"
      disableRipple
      disabled={disabled}
      onClick={startWalkthroughHandler}
      sx={{
        height: "24px",
        px: "10px",
        fontSize: "12px",
        background: "transparent",
        "&:hover:not(.Mui-disabled)": {
          border: `1px solid transparent`
        }
      }}
      aria-label="start-walkthrough"
      name="start-walkthrough"
    >
      <Grid container sx={{ gap: 0.5, alignItems: "center" }}>
        <Grid sx={{ height: "11px", lineHeight: 0 }}>
          <Icon type="CurveArrowIcon" />
        </Grid>
        <Grid>Start Walkthrough</Grid>
      </Grid>
    </Button>
  );
};

export default WalkthroughButton;
