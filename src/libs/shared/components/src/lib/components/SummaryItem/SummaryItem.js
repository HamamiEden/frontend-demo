import { Link } from "react-router-dom";
import { Avatar, Grid2 as Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Icon from "../Icon/Icon";

const SummaryItem = ({ title, value, icon, link, linkTooltip, tooltip, titleProps = {}, avatarProps = {}, iconStyle = {} }) => {
  const avatar = (
    <Avatar variant="rounded" sx={{ width: "36px", height: "36px" }} {...avatarProps}>
      <Icon type={icon} style={{ margin: 0, ...iconStyle }} />
    </Avatar>
  );

  return (
    <Grid container sx={{ gap: 1.25, flexWrap: "nowrap", width: "auto" }}>
      <Grid>
        {link ? (
          <Link to={link} tabIndex="0" aria-label="summary-item" alt="summary-item">
            <Tooltip title={String(linkTooltip)} arrow placement="bottom-start">
              {avatar}
            </Tooltip>
          </Link>
        ) : (
          avatar
        )}
      </Grid>
      <Grid container sx={{ flexDirection: "column", flexWrap: "nowrap", justifyContent: "space-between" }}>
        <Grid container sx={{ flexWrap: "nowrap", alignItems: "center", gap: 0.75 }}>
          <Grid>
            <Typography fontSize={12} lineHeight="14px" {...titleProps}>
              {title}
            </Typography>
          </Grid>
          {tooltip && (
            <Grid sx={{ lineHeight: "12px" }}>
              <Tooltip
                title={String(tooltip)}
                arrow
                placement="top-start"
                slotProps={{
                  tooltip: { sx: { width: "270px", maxWidth: "270px" } }
                }}
              >
                <IconButton hover="noBGHover" sx={{ height: "14px", width: "14px" }} aria-label="info" name="info">
                  <Icon type="InfoIcon" />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
        <Grid container>{value}</Grid>
      </Grid>
    </Grid>
  );
};

export default SummaryItem;
