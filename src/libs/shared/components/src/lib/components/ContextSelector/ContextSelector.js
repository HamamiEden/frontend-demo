import { useContext, useState } from "react";
import { Grid2 as Grid, ListItem, Typography } from "@mui/material";
import { AccountContext, FiltersContext } from "@csms-consoles/shared-state";
import Autocomplete from "../Autocomplete/Autocomplete";
import HighlightText from "../EntitiesSearch/components/HighlightText/HighlightText";
import Icon from "../Icon/Icon";

const ContextSelector = () => {
  const { updateContext, accounts, selectedAccount, loadingContext } = useContext(AccountContext);
  const { clearAllFilters } = useContext(FiltersContext);
  const [text, setText] = useState("");

  const selectionChanged = context => {
    clearAllFilters();
    updateContext(context);
  };

  const handleSearchChange = text => {
    setText(text);
  };

  return (
    <Autocomplete
      disableClear
      options={accounts || []}
      loading={loadingContext}
      selectionChanged={selectionChanged}
      selected={selectedAccount || ""}
      label="Select Account"
      handleSearchChange={handleSearchChange}
      width={250}
      renderOption={(props, opt) => {
        return (
          <ListItem variant={`contextSelector_${opt._type}`} {...props}>
            <Grid columnSpacing={0.625} container key={opt._id} sx={{ alignItems: "center" }}>
              <Grid sx={{ minWidth: "10px" }}>
                {!["CustomerAccount", "STANDARD"].includes(opt._type) && <Icon type="CircleIcon" viewBox="-5 -7 35 35" />}
              </Grid>
              <Grid size="grow">
                <Typography variant="body2" color="textPrimary">
                  {!(opt.name === text) ? <HighlightText text={opt.name} highlight={text} /> : opt.name}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        );
      }}
    />
  );
};

export default ContextSelector;
