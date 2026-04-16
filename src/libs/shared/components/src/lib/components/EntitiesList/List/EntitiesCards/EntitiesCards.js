import { useContext, useMemo } from "react";
import { Grid2 as Grid, Skeleton } from "@mui/material";
import { ListContext } from "../../ListProvider";

const EntitiesCards = () => {
  const {
    state: {
      rows: { data },
      headers,
      loadingData,
      settings: { cardsViewSettings, listMaxHeight, pageActions },
      TableActions,
      entityType,
      newRowMode
    },
    actions: { isActionDisabled },
    components: { CardComponent }
  } = useContext(ListContext);

  const filteredPageActions = useMemo(() => pageActions?.filter(action => action.isCardView), [pageActions]);

  return loadingData ? (
    <Grid container size={12} sx={{ gap: 2.5, padding: 2 }}>
      {[1, 2, 3, 4].map(i => (
        <Skeleton key={i} variant="rectangular" width={338} height={210} sx={{ borderRadius: "12px" }} alt="loading" aria-busy="true" />
      ))}
    </Grid>
  ) : (newRowMode || data?.length > 0) && cardsViewSettings?.cardComponent && CardComponent ? (
    <Grid
      container
      sx={{
        gap: 2.5,
        padding: 2,
        maxHeight: listMaxHeight ? listMaxHeight : "calc(100vh - 280px)",
        overflow: "auto"
      }}
      size={12}
    >
      {filteredPageActions && filteredPageActions.length ? (
        <TableActions actions={filteredPageActions} entityType={entityType} isActionDisabled={isActionDisabled} />
      ) : null}

      {data?.map((item, i) => (
        <CardComponent key={i} item={item} headers={headers} module={cardsViewSettings?.cardComponent} />
      ))}
    </Grid>
  ) : (newRowMode || data?.length > 0) && cardsViewSettings?.cardsComponent && CardComponent ? (
    <CardComponent data={data} headers={headers} module={cardsViewSettings?.cardsComponent} />
  ) : null;
};

export default EntitiesCards;
