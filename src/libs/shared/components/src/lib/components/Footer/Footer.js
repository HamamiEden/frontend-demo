import { useContext } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import { UIContext } from "@csms-consoles/shared-state";

const data = [
  { title: "Privacy Policy", link: "https://www.radware.com/privacypolicy.aspx/" },
  { title: "Terms of Use", link: "https://www.radware.com/documents/portaltcu/" },
  { title: "Legal Notice", link: "https://www.radware.com/legalnotice/" },
  { title: "Glossary", link: "https://www.radware.com/glossary/" }
];

const Footer = ({ pr = 2.5 }) => {
  const { organization } = useContext(UIContext);

  const linkProps = {
    component: "a",
    rel: "noreferrer noopener",
    target: "_blank",
    sx: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "footer.hover.color"
      }
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        height: "28px",
        fontSize: "11px",
        display: "flex",
        color: "footer.color"
      }}
    >
      <Grid
        container
        sx={{
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-between",
          pl: 1.25,
          pr: pr,
          width: "100%"
        }}
      >
        <Grid container>
          <Grid>
            <Box href={organization?.footer?.link || undefined} {...(organization?.footer?.link ? linkProps : {})}>
              <span style={{ fontSize: "12px", fontFamily: "sans-serif" }}>&copy;</span>{" "}
              {`2026 ${organization?.name || "Radware"} Ltd. All Rights Reserved`}
            </Box>
          </Grid>
        </Grid>

        {organization?.footer?.showAdditional && (
          <Grid container columnSpacing={3.75} sx={{ justifyContent: "end" }}>
            {data.map((item, i) => (
              <Grid key={i} sx={{ fontWeight: 400 }}>
                <Box href={item.link} {...linkProps}>
                  {item.title}
                </Box>
              </Grid>
            ))}
            <Grid
              sx={{
                "& div > a > img": { display: "none" },
                "& div > a": {
                  "&:hover": {
                    color: "footer.hover.color"
                  },
                  "&:after": {
                    content: '"Cookie Preferences"',
                    cursor: "pointer"
                  }
                }
              }}
            >
              <div id="teconsent"></div>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Footer;
