import { Box } from "@mui/material";

const HighlightText = ({ text, highlight }) => {
  const parts = text ? text.split(new RegExp(`(${highlight})`, "gi")) : [];

  return (
    <span>
      {parts.map((part, i) => (
        <Box
          component="span"
          key={i}
          sx={
            part && part.toLowerCase() === highlight.toLowerCase()
              ? {
                  backgroundColor: theme => theme.highlightText.backgroundColor,
                  border: theme => theme.highlightText.border,
                  borderRadius: theme => theme.highlightText.borderRadius,
                  color: "highlightText.color"
                }
              : {}
          }
        >
          {part}
        </Box>
      ))}
    </span>
  );
};

export default HighlightText;
