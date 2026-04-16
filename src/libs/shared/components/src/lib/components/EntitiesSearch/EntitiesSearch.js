import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid2 as Grid, Typography } from "@mui/material";
import { UIContext } from "@csms-consoles/shared-state";
import useAxios from "../../Hooks/useAxios";
import Icon from "../Icon/Icon";
import HighlightText from "./components/HighlightText/HighlightText";
import SdAutocompleteSearch from "./components/HighlightText/SdAutocompleteSearch";

const EntitiesSearch = () => {
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const { getGeneralSettings } = useContext(UIContext);
  const [{ data: optionsData, loading }, fetchOptions] = useAxios(
    {
      url: `/entities/search`,
      method: "GET",
      withCredentials: true
    },
    { manual: true }
  );

  const fetchData = useCallback(
    text => {
      fetchOptions({ params: { text } });
    },
    [fetchOptions]
  );

  const handleSelectedEntity = entity => {
    if (entity) {
      history.push("/" + entity.entityType + "/" + entity._id);
    }
    setSelected(null);
    setData([]);
  };

  useEffect(() => {
    if (optionsData) {
      setData(optionsData);
    }
  }, [optionsData]);

  const handleSearchChange = text => {
    if (!text || text === "") {
      setData([]);
    }
    setText(text);
  };

  return (
    <SdAutocompleteSearch
      options={data}
      fetchOptions={fetchData}
      loading={loading}
      groupBy={opt => opt.type}
      selected={selected}
      label="Search Entity"
      selectionChanged={handleSelectedEntity}
      handleSearchChange={handleSearchChange}
      renderItem={(props, opt) => {
        return (
          <li {...props}>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item>
                <Icon type={getGeneralSettings(opt.type.toLowerCase()).icon} />
              </Grid>
              <Grid item xs sx={{ pl: 0.625 }}>
                <Typography variant="body1" color="textPrimary">
                  <HighlightText text={opt.name} highlight={text} />
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};

export default EntitiesSearch;
