import { useContext } from "react";
import { FormControlLabel, FormGroup, Switch, Tooltip, styled } from "@mui/material";
import { ThemeContext } from "@csms-consoles/shared-state";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  padding: 9,
  "& .MuiSwitch-track": {
    borderRadius: "50px",
    backgroundColor: "#fff",
    opacity: "1",

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16
    },
    "&:before": {
      backgroundImage: `url(/_assets/moon.svg)`,
      backgroundRepeat: "no-repeat",
      position: "absolute",
      left: 10,
      top: 13,
      transform: "rotate(85deg)"
    },
    "&:after": {
      backgroundImage: `url(/_assets/sun.svg)`,
      backgroundRepeat: "no-repeat",
      position: "absolute",
      right: 13,
      top: 13,
      transform: "rotate(85deg)"
    }
  },
  "& .MuiSwitch-track.Mui-checked": {
    background: "#fff",
    position: "absolute"
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
    zIndex: 4,
    position: "absolute",
    top: 9,
    left: 9,
    color: theme.palette.switch.thumb.color
  },
  "&.MuiSwitch-root": {
    transform: "rotate(270deg)",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 40,
      height: 16,
      boxShadow: "0px 0px 8px 2px rgba(255, 255, 255, 0.5)",
      transition: "opacity 0.3s ease",
      opacity: 0,
      borderRadius: "50px",
      zIndex: -1
    },

    "&:hover::before, &:hover::after": {
      opacity: 1
    }
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#fff",
    opacity: 1
  },
  "& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked": {
    padding: 0
  }
}));

const SdThemeSwitch = ({ sidebarStatus }) => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <FormGroup>
      <Tooltip
        title={sidebarStatus ? "" : `Switch to ${darkMode ? "Light" : "Dark"} Mode`}
        arrow
        placement="right"
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: "tooltip.sidebar.backgroundColor",
              color: "tooltip.sidebar.color",
              p: 1.2,
              boxShadow: 1,
              fontSize: "caption.fontSize",
              fontWeight: "caption.fontWeight",
              borderRadius: 2,
              left: -8
            }
          },
          arrow: {
            sx: {
              color: "tooltip.sidebar.arrow.color"
            }
          }
        }}
      >
        <FormControlLabel
          control={<ThemeSwitch disableRipple />}
          checked={!darkMode}
          onChange={toggleTheme}
          aria-label="theme-switch"
          alt="theme-switch"
          label={sidebarStatus ? `Switch to ${darkMode ? "Light" : "Dark"} Mode` : ""}
          sx={{
            m: 0,
            ml: -0.5625,
            width: "100%",
            justifyContent: "flex-start",
            "& .MuiTypography-root": {
              color: "rgba(255, 255, 255, 1)",
              lineHeight: 1,
              alignSelf: "end",
              fontSize: 14
            },
            "& .MuiSwitch-switchBase:hover": {
              backgroundColor: "unset"
            }
          }}
        />
      </Tooltip>
    </FormGroup>
  );
};

export default SdThemeSwitch;
