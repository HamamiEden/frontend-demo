import { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Chip, CircularProgress, Grid2 as Grid, useTheme } from "@mui/material";
import { AttacksContext } from "@csms-consoles/shared-state";
import Icon from "../Icon/Icon";

const MITIGATION_STATUSES = {
  ANALYSIS_FAILED: {
    STATUS: "ANALYSIS_FAILED",
    COLOR: "red"
  },
  FULLY_MITIGATED: {
    STATUS: "FULLY_MITIGATED",
    COLOR: "green"
  },
  ANALYSIS_PENDING: {
    STATUS: "ANALYSIS_PENDING"
  }
};

const getChipStyles = (isNavbarRedirectButton, isTableButton, isHoverExpand, customChipStyles = {}, iconStyles = {}) => ({
  height: 30,
  width: isTableButton ? 30 : 100,
  borderRadius: isNavbarRedirectButton ? "0px 15px 15px 0px" : 16,
  cursor: "pointer",
  overflow: "hidden",
  transition: "width 0.3s ease",
  ".MuiChip-icon": {
    width: "82px",
    height: "24px",
    marginLeft: isTableButton ? "74px" : "15px",
    transition: "margin-left 0.3s ease",
    ...iconStyles
  },
  "&:hover": isTableButton &&
    isHoverExpand && {
      width: 100,
      ".MuiChip-icon": {
        marginLeft: "15px"
      }
    },
  ...customChipStyles
});

const SecurityAnalysisRedirect = ({
  isNavbarRedirectButton,
  isTableButton = false,
  attackIdAlias,
  showLoading = false,
  isDisabled = false,
  onClickEvent = null,
  category,
  pageSlug = "securityAnalysis",
  analysisStatus,
  isHoverExpand = true,
  customChipStyles = {},
  iconStyles = {}
}) => {
  const { loading } = useContext(AttacksContext);
  const route = `/${pageSlug}/${attackIdAlias}${category ? `/${category}` : ""}`;

  return (
    <Grid>
      <Badge
        badgeContent={analysisStatus ? "" : null}
        color={MITIGATION_STATUSES[analysisStatus]?.COLOR}
        overlap="circular"
        sx={{
          "& .MuiBadge-badge": {
            width: 16,
            height: 16,
            minWidth: 0,
            boxSizing: "border-box",
            top: 3,
            right: 1
          }
        }}
      >
        <Chip
          icon={
            loading && showLoading ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              <Box sx={{ height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {isDisabled ||
                analysisStatus === MITIGATION_STATUSES.ANALYSIS_PENDING.STATUS ||
                analysisStatus === MITIGATION_STATUSES.ANALYSIS_FAILED.STATUS ? (
                  <Icon type="SocExpert_disabled" />
                ) : (
                  <Icon type="SocExpert_dark" />
                )}
              </Box>
            )
          }
          variant="securityAnalysisRedirect"
          className={isNavbarRedirectButton ? "ButtonStyle" : "ChipStyle"}
          sx={getChipStyles(isNavbarRedirectButton, isTableButton, isHoverExpand, customChipStyles, iconStyles)}
          component={onClickEvent ? "button" : Link}
          to={!onClickEvent ? route : undefined}
          onClick={onClickEvent || null}
          disabled={
            isDisabled ||
            analysisStatus === MITIGATION_STATUSES.ANALYSIS_PENDING.STATUS ||
            analysisStatus === MITIGATION_STATUSES.ANALYSIS_FAILED.STATUS
          }
        />
      </Badge>
      {analysisStatus === MITIGATION_STATUSES.ANALYSIS_PENDING.STATUS && (
        <Grid>
          <CircularProgress
            size={36}
            thickness={2}
            color="gray"
            sx={{
              position: "absolute",
              bottom: "-3px",
              right: "-3px"
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default SecurityAnalysisRedirect;
