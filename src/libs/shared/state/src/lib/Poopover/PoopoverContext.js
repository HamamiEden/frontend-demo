import { createContext, useCallback, useRef, useState } from "react";
import { isEmpty } from "lodash";
import Close from "@mui/icons-material/Close";
import { Box, Button, Grid2 as Grid, IconButton, Popover, Typography } from "@mui/material";
import parse from "html-react-parser";
import { localStorage } from "@csms-consoles/shared-utils";

const SEEN_WALKTHROUGH_KEY = "seenWalkthrough";
const DEFAULT_SETTINGS = { showButtons: true, clickAway: false };
const BORDER_BUTTON_STYLE = {
  color: "white",
  borderColor: "white",
  "&:hover": {
    borderColor: "transparent",
    color: "white",
    backgroundColor: "#FFFFFF4D"
  }
};

const PoopoverContext = createContext();

const PoopoverProvider = ({ children }) => {
  const [step, setStep] = useState(null);
  const [steps, setSteps] = useState(0);
  const [allElementsRegistered, setAllElementsRegistered] = useState(false);

  const anchorEl = step?.node;
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const elmsRef = useRef(new Map());

  const getRef = useCallback(data => {
    const { node, prefix, order, content, popoverProps = {}, poopSettings = {}, elementsToHighlight = [], total = 0 } = data;
    const map = elmsRef.current;

    setSteps(total);

    if (node)
      map.set(`${prefix}_${order}`, {
        node,
        prefix,
        order,
        content,
        popoverProps,
        poopSettings: isEmpty(poopSettings) ? DEFAULT_SETTINGS : poopSettings,
        elementsToHighlight
      });
    else map?.delete(`${prefix}_${order}`);

    const walkthroughElements = Array.from(map.values()).filter(item => item.prefix === data.prefix);

    setAllElementsRegistered(walkthroughElements.length === total);
  }, []);

  const toggleElementShadow = (element, addShadow = true) => {
    const { node, elementsToHighlight } = element;
    const elements = [node, ...elementsToHighlight];

    elements.forEach(element => {
      if (element) element.style.boxShadow = addShadow ? "0px 0px 8px 2px #00AECD" : "unset";
    });
  };

  const showPoop = useCallback((prefix, order) => {
    const map = elmsRef.current;

    const item = map.get(`${prefix}_${order}`);
    if (item) {
      toggleElementShadow(item);
      setStep(item);
    }
  }, []);

  const handleClose = useCallback(() => {
    const seenWalkthrough = JSON.parse(localStorage.get(SEEN_WALKTHROUGH_KEY) || "[]");
    if (!seenWalkthrough.includes(step.prefix)) seenWalkthrough.push(step.prefix);

    localStorage.set(SEEN_WALKTHROUGH_KEY, seenWalkthrough, true);
    setStep(prev => ({ ...prev, node: null }));
  }, [step]);

  const onTransitionEnd = useCallback(() => {
    const map = elmsRef.current;

    const item = map.get(`${step.prefix}_${step.order}`);
    if (item) toggleElementShadow(item, false);

    setStep({ ...step, order: 0 });
    setSteps(0);
  }, [step]);

  const handleNext = () => {
    let nextStep = step.order;
    const map = elmsRef.current;

    const currentItem = map.get(`${step.prefix}_${step.order}`);
    if (currentItem) toggleElementShadow(currentItem, false);

    let nextItem = null;

    while (!nextItem && nextStep <= steps) {
      nextStep++;
      nextItem = map.get(`${step.prefix}_${nextStep}`);
    }

    if (nextItem) showPoop(step.prefix, nextStep);
    else handleClose();
  };

  return (
    <PoopoverContext.Provider
      value={{
        getRef,
        showPoop,
        allElementsRegistered
      }}
    >
      {children}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onTransitionEnd={!open ? onTransitionEnd : null}
        onClose={step?.poopSettings?.clickAway ? handleClose : null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        slotProps={{ paper: { sx: { width: "300px", padding: "20px 15px 10px 15px" } } }}
        bg_color="turquoise"
        {...step?.popoverProps}
      >
        <Grid container flexDirection="column">
          <IconButton
            size="small"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              width: "18px",
              height: "18px",
              color: "white",
              "&:hover": {
                backgroundColor: "#FFFFFF4D"
              }
            }}
          >
            <Close sx={{ "&.MuiSvgIcon-root": { width: "16px" } }} />
          </IconButton>

          <Grid pr="12px">
            {step?.content?.type === "text" && step?.content?.description && (
              <Box fontSize={12} lineHeight="18px" color="white">
                {parse(step?.content.description)}
              </Box>
            )}
            {step?.content?.type === "component" && step?.content?.component && step?.content.component}
          </Grid>

          <Grid container alignItems="center" justifyContent="space-between" mt="10px">
            {steps > 1 && (
              <Grid>
                <Typography fontSize={12} fontWeight={500} lineHeight="14px" color="white">
                  {step?.order} of {steps}
                </Typography>
              </Grid>
            )}
            <Grid>
              {step?.poopSettings?.showButtons && (
                <>
                  {!!step?.order && step.order < steps && (
                    <Grid container alignItems="center" gap={1.75}>
                      <Grid>
                        <Button
                          onClick={handleClose}
                          size="small"
                          sx={{
                            color: "white",
                            borderColor: "transparent",
                            "&:hover": {
                              borderColor: "transparent",
                              color: "white",
                              backgroundColor: "#FFFFFF4D"
                            }
                          }}
                          disableRipple
                          aria-label="close"
                          name="close"
                        >
                          Got it
                        </Button>
                      </Grid>
                      <Grid>
                        <Button onClick={handleNext} size="small" sx={BORDER_BUTTON_STYLE} disableRipple aria-label="next" name="next">
                          Next
                        </Button>
                      </Grid>
                    </Grid>
                  )}

                  {!!step?.order && step.order === steps && (
                    <Button
                      variant="borderless"
                      onClick={handleClose}
                      size="small"
                      sx={BORDER_BUTTON_STYLE}
                      disableRipple
                      aria-label="done"
                      name="done"
                    >
                      Done
                    </Button>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </PoopoverContext.Provider>
  );
};

export { PoopoverContext, PoopoverProvider };
