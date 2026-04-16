import React, { useContext } from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutline";
import { Box, Chip, Tooltip, Typography } from "@mui/material";
import format from "date-fns/format";
import { UIContext } from "@csms-consoles/shared-state";
import { Convertors, deepFind, useTranslations } from "@csms-consoles/shared-utils";
import { DatesUtils } from "@csms-consoles/shared-utils";
import HighlightText from "../../../../../../EntitiesSearch/components/HighlightText/HighlightText";
import Icon from "../../../../../../Icon/Icon";

const Cell = React.memo(({ path, type, row, isUTC, entityType, dateFormat, Action, componentType, header, isDisabled, search }) => {
  const translate = useTranslations();
  const { getGeneralSettings } = useContext(UIContext);
  const opacity = isDisabled ? theme => theme.palette.tableRow.disabled.opacity : 1;

  const Label = () => {
    if (!path || !row) return "";
    let label = deepFind(row, path);

    if (type === "custom") {
      return <Action headerId={path} row={row} value={label} componentType={componentType} header={header} />;
    }

    if (typeof label === "boolean" || label === 0) label = String(label);
    if (!label || !type) return "";

    if (Array.isArray(label) && type === "count") {
      // FOR SITE ONLY
      let warning = false;
      if (entityType === "sites") {
        warning = label.find(item => item["agg_status"] === "down");
      }
      return (
        <span style={{ display: "flex", alignContent: "center" }}>
          <CellRender label={label.length} />
          {warning && <ErrorOutlineOutlinedIcon fontSize="small" style={{ marginLeft: "8px", color: "red" }} />}
        </span>
      );
    }

    return Array.isArray(label) ? (
      label.map((l, i, arr) => {
        if (type === "chip" && typeof header.limitTags === "number") {
          if (i < header.limitTags) {
            return (
              <Box component="span" key={i} sx={{ marginRight: "8px", lineHeight: "28px", verticalAlign: "text-bottom" }}>
                <CellRender label={l} />
              </Box>
            );
          } else if (i === header.limitTags) {
            return (
              <Tooltip
                arrow
                key={i}
                title={
                  <>
                    {arr.map((tooltipVal, i) => {
                      if (i >= header.limitTags) {
                        return (
                          <Box key={i} sx={{ marginBottom: 1.25 }}>
                            <CellRender label={tooltipVal} notooltip={1} />
                          </Box>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </>
                }
                slotProps={{
                  tooltip: {
                    onClick: e => e.stopPropagation(),
                    sx: {
                      px: "9px",
                      py: "10px",
                      textAlign: "left",
                      maxHeight: 300,
                      "& .MuiBox-root:last-of-type": {
                        mb: 0
                      }
                    }
                  },
                  popper: { disablePortal: true }
                }}
              >
                <Box component="span" key={i} sx={{ marginBottom: 1.25, lineHeight: "28px", verticalAlign: "text-bottom" }}>
                  <CellRender label={`+${label.length - header.limitTags}`} tooltipchip="true" />
                </Box>
              </Tooltip>
            );
          } else {
            return null;
          }
        } else {
          return (
            <Box component="span" key={i}>
              <CellRender label={l} sx={{ mr: 2, my: 0.5 }} />
            </Box>
          );
        }
      })
    ) : (
      <CellRender label={label} />
    );
  };

  const CellRender = ({ label, ...props }) => {
    if (!label) return "";
    switch (type) {
      case "chip": {
        let labelProps = getGeneralSettings(entityType, path, label);
        let value = deepFind(row, path);
        return componentType ? (
          <>
            <Chip
              {...props}
              label={translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString())}
              variant={String(path + "_" + label).toUpperCase()}
              icon={labelProps && labelProps.icon ? <Icon type={labelProps.icon} /> : null}
              sx={{ marginRight: "5px", opacity }}
            />
            <Action value={value} headerId={path} row={row} componentType={componentType} header={header} />
          </>
        ) : header.tooltip && typeof header.tooltip === "number" && !props.notooltip && label.length > header.tooltip ? (
          <Tooltip
            placement="bottom"
            arrow
            title={translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString())}
            slotProps={{ popper: { disablePortal: true } }}
          >
            <Chip
              {...props}
              label={
                translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString()).substring(0, header.tooltip) + "..."
              }
              variant={String(path + "_" + label).toUpperCase()}
              icon={labelProps && labelProps.icon ? <Icon type={labelProps.icon} /> : null}
              sx={{ opacity }}
            />
          </Tooltip>
        ) : (
          <Chip
            {...props}
            label={translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString())}
            variant={String(path + "_" + label).toUpperCase()}
            tooltipchip={props.tooltipchip}
            icon={labelProps && labelProps.icon ? <Icon type={labelProps.icon} /> : null}
            sx={{ opacity }}
          />
        );
      }
      case "date": {
        try {
          let date = new Date(label);
          if (date instanceof Date && !isFinite(date)) {
            return <TextTooltip text={"-"} maxLength={header.tooltip} isDisabled={isDisabled} />;
          }
          if (isUTC) {
            date = DatesUtils.convertDateToUTC(date);
          }
          return (
            <Typography component="span" sx={{ fontSize: 12, opacity }}>
              {format(date, dateFormat || "MMMM d, yyyy, H:mm")}
            </Typography>
          );
        } catch (e) {
          return "";
        }
      }
      case "bytes": {
        try {
          return Convertors.kbps2mbps(label, 1);
        } catch (e) {
          return "";
        }
      }
      case "bits": {
        try {
          return Convertors.kbps2mbps(label, 1, true);
        } catch (e) {
          return "";
        }
      }
      case "quantity": {
        try {
          const quantity = Convertors.quantityToUnit(
            label,
            header?.config?.quantityDecimals || 0,
            header?.config?.quantityConversionType || null
          );
          return quantity ? `${quantity?.quantity}${quantity?.unit}` : "";
        } catch (e) {
          return "";
        }
      }
      case "action": {
        let value = deepFind(row, path);
        return <Action value={value} headerId={path} row={row} componentType={componentType} header={header} />;
      }
      case "sampling": {
        let value = deepFind(row, path);
        const text = translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString());
        return (
          <>
            <Typography component="span" sx={{ fontSize: 12, marginRight: "10px" }}>
              {text}
            </Typography>
            <Action value={value} headerId={path} row={row} componentType={componentType} header={header} />
          </>
        );
      }
      case "recurrence": {
        let { Recurrences } = Convertors;
        return <TextTooltip text={Recurrences({ recurrence: label })} maxLength={header.tooltip} isDisabled={isDisabled} />;
      }
      case "variant": {
        let translatePath = header.translateId ? header.translateId : path;
        const text = translate((entityType + "_" + translatePath + "_" + label).toUpperCase(), label.toString());
        return (
          <Typography component="span" variant={(entityType + "_" + translatePath + "_" + label).toUpperCase()} sx={{ fontSize: 12 }}>
            {text}
          </Typography>
        );
      }
      default:
        return (
          <TextTooltip
            text={translate((entityType + "_" + path + "_" + label).toUpperCase(), label.toString())}
            maxLength={header.tooltip}
            isDisabled={isDisabled}
          />
        );
    }
  };

  const TextTooltip = ({ text, maxLength, isDisabled }) => {
    if (text.length >= maxLength) {
      return (
        <Tooltip
          placement="bottom"
          arrow
          title={<Box sx={{ maxHeight: "300px", overflowY: "auto" }}>{text}</Box>}
          slotProps={{ popper: { disablePortal: true } }}
        >
          <Box component="span" sx={{ opacity }}>
            {!search ? (
              `${text.toString().substring(0, maxLength)}...`
            ) : (
              <HighlightText text={`${text.toString().substring(0, maxLength)}...`} highlight={search} />
            )}
          </Box>
        </Tooltip>
      );
    } else {
      if (isDisabled)
        return (
          <Typography component="span" sx={{ fontSize: 12, opacity }}>
            {!search ? text : <HighlightText text={text} highlight={search} />}
          </Typography>
        );
      return !search ? text : <HighlightText text={text} highlight={search} />;
    }
  };

  return <Label />;
});

Cell.defaultProps = {
  Action: () => null
};

export default Cell;
