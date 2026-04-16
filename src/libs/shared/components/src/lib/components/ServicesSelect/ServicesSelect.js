import { useCallback, useContext, useState } from "react";
import { intersection } from "lodash";
import { Box, Chip, FormControl, IconButton, MenuItem, OutlinedInput, Select, Tooltip } from "@mui/material";
import { AccountContext } from "@csms-consoles/shared-state";
import { useTranslations } from "@csms-consoles/shared-utils";
import Icon from "../Icon/Icon";
import styles from "./styles";

const ServicesSelect = ({
  fullWidth,
  service,
  serviceOptions,
  handleServiceChanged,
  disabledItemTooltipTranslationKey,
  allowAllItems,
  ...props
}) => {
  let { accountServices } = useContext(AccountContext);
  const translate = useTranslations();
  const [open, setOpen] = useState(false);

  const isDisabled = serviceType => {
    return serviceType !== "SYSTEM" ? !accountServices[serviceType?.toLowerCase()] && !allowAllItems : false;
  };

  const toggleSelect = useCallback(() => setOpen(prevState => !prevState), []);

  const enabledServiceOptions = serviceOptions?.filter(item => !item?.disabled);

  const handleChange = event => {
    const newSelectedService = enabledServiceOptions?.find(item => item.id === event.target.value);
    handleServiceChanged(newSelectedService);
  };

  const preparedAccountServices = Object.keys(accountServices || []).map(service => service?.toUpperCase());
  const preparedServicesOptions = enabledServiceOptions?.map(service => service?.serviceType?.toUpperCase());
  const availableServices = intersection(preparedAccountServices, preparedServicesOptions);
  const hasSystemService = enabledServiceOptions.some(s => s.serviceType === "SYSTEM");

  if (availableServices?.length === 1 && !allowAllItems && !hasSystemService)
    return (
      <Chip
        sx={{
          "&.MuiChip-root": {
            width: "170px",
            height: "30px",
            borderRadius: "10px",
            padding: "8px 10px"
          }
        }}
        variant="services"
        colors={availableServices[0]}
        label={translate(`ADDON_SERVICES_${availableServices[0]}`)}
      />
    );

  return (
    <FormControl>
      <Select
        {...props}
        displayEmpty
        open={open}
        onOpen={toggleSelect}
        onClose={toggleSelect}
        value={enabledServiceOptions?.length && service ? service.id : ""}
        input={<OutlinedInput variants="select" className={service?.id ? service.id : "DEFAULT"} sx={styles?.outlinedInput} />}
        MenuProps={{ PaperProps: { variants: "select" } }}
        onChange={handleChange}
        IconComponent={() => (
          <IconButton
            sx={styles.button}
            className={open ? "open" : ""}
            variant="inputIcon"
            onClick={toggleSelect}
            aria-label="expand-select"
            name="expand-select"
          >
            <Icon type="ExpandMoreIcon" />
          </IconButton>
        )}
      >
        <MenuItem value="" variants="select" disableRipple disabled={false} className="DEFAULT" sx={styles?.menuItem}>
          {translate("ALL_SERVICES")}
        </MenuItem>
        {enabledServiceOptions?.map(option => {
          return (
            <MenuItem
              value={option.id}
              variants="select"
              disableRipple
              disabled={isDisabled(option?.serviceType)}
              className={option?.id}
              key={option?.id}
              sx={styles.menuItem}
            >
              <Tooltip
                slotProps={{
                  tooltip: {
                    sx: {
                      maxWidth: 245
                    }
                  }
                }}
                title={
                  isDisabled(option?.serviceType) && disabledItemTooltipTranslationKey
                    ? translate(`${option?.id}_${disabledItemTooltipTranslationKey}`)
                    : ""
                }
                arrow
                placement="right"
              >
                <Box onClick={e => isDisabled(option?.serviceType) && e.stopPropagation()}>{option?.name}</Box>
              </Tooltip>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ServicesSelect;
