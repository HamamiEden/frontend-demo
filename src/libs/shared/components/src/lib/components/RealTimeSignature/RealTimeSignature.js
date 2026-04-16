import { Box, Card, CardContent, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslations } from "@csms-consoles/shared-utils";

const RealTimeSignature = ({ signature, height }) => {
  const translate = useTranslations();

  const parseSignature = sig => {
    return sig.match(/(\[|\]|OR|AND|(\b[a-z-][^=]*)|([0-9.,]*))/g).filter(item => item !== "");
  };

  const SignatureItem = ({ item }) => {
    //if (item.includes("[") || item.includes("]") || item.includes("AND") || item.includes("OR")){ // SEPERATOR/OPERATOR
    if (item.includes("[") || item.includes("]")) {
      return <Box>{item}</Box>;
    } else if (item.includes("AND") || item.includes("OR")) {
      // SEPERATOR/OPERATOR
      return <Box sx={{ ml: 1.25 }}>{item}</Box>;
    } else if (item.search(/[0-9]/) !== -1) {
      // VALUE
      return (
        <Box
          sx={{
            ml: 6.25,
            color: item.includes(".") && "signatureCard.itemValue.color"
          }}
        >
          {item.replaceAll(",", ", ")}
        </Box>
      );
    } else {
      // SUBJECT
      return (
        <Box
          sx={{
            marginLeft: 3.75,
            textTransform: "capitalize"
          }}
        >
          {item.replaceAll("-", " ")}:
        </Box>
      );
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "signatureCard.backgroundColor",
        background: "signatureCard.backgroundColor"
      }}
      variant="expandCard"
    >
      <CardContent
        sx={{
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "signatureCard.backgroundColor"
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderColor: "signatureCard.backgroundColor"
          }
        }}
      >
        <Grid rowSpacing={1.75} container>
          <Grid size={12}>
            <Typography variant="subtitle2Title">{translate("real_time_signature")}</Typography>
          </Grid>
          <Grid
            sx={{
              overflowY: "auto",
              fontSize: "caption.fontSize",
              color: "signatureCard.grid.color",
              maxHeight: height
            }}
            size={12}
          >
            {parseSignature(signature).map((item, i) => (
              <SignatureItem key={i} item={item} />
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RealTimeSignature;
