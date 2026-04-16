import React from "react";
import { Tooltip, Typography } from "@mui/material";
import Icon from "../Icon/Icon";

const ICON_SIZE = 15;

interface EActivityLogStatus {
  IN_PROCESS: string;
  SUCCESS: string;
  FAIL: string;
}

interface ActivityLogIndicatorInterface {
  activityLogStatus: string; // activityLogStatuses.IN_PROCESS | activityLogStatuses.SUCCESS | activityLogStatuses.FAIL
  activityLogStatuses: EActivityLogStatus;
}

const ActivityLogIndicator = ({ activityLogStatus, activityLogStatuses }: ActivityLogIndicatorInterface) => {
  const ACTIVITY_LOG_TOOLTIP = {
    [activityLogStatuses.IN_PROCESS]: "In Progress",
    [activityLogStatuses.SUCCESS]: "Succeeded",
    [activityLogStatuses.FAIL]: "Failed",
  };
  const ACTIVITY_LOG_ICON_VARIANT = {
    [activityLogStatuses.IN_PROCESS]: "BLOCKER_STATUS_PENDING_ACTIVATION",
    [activityLogStatuses.SUCCESS]: "BLOCKER_STATUS_ACTIVATED",
    [activityLogStatuses.FAIL]: "BLOCKER_STATUS_FAILED_ACTIVATION",
  };
  const ACTIVITY_LOG_ICONS = {
    [activityLogStatuses.IN_PROCESS]: "ProcessingIcon",
    [activityLogStatuses.SUCCESS]: "CompleteIcon",
    [activityLogStatuses.FAIL]: "FailedIcon",
  };
  return (
    <Tooltip title={ACTIVITY_LOG_TOOLTIP[activityLogStatus]} placement="right" arrow>
      <Typography
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", svg: { width: ICON_SIZE, height: ICON_SIZE } }}
        variant={ACTIVITY_LOG_ICON_VARIANT[activityLogStatus] as any}
      >
        <Icon type={ACTIVITY_LOG_ICONS[activityLogStatus]} />
      </Typography>
    </Tooltip>
  );
};
export default ActivityLogIndicator;
