const options = {
  light: {
    fileField: {
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='rgba(46, 88, 148, 0.8)' stroke-width='0.5' stroke-dasharray='5%2c5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      hoverBackgroundColor: "#F7F8F9",
      browseTextColor: "#0E0ADA",
      iconColor: "#0E0ADA"
    }
  },
  dark: {
    fileField: {
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='rgb(212, 214, 219)' stroke-width='0.5' stroke-dasharray='5%2c5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      hoverBackgroundColor: "#28282A",
      browseTextColor: "#3B77EE",
      iconColor: "#3B77EE"
    }
  }
};

const MuiFormControl = mode => {
  return {
    variants: [
      {
        props: { variants: "fileUploadControl" },
        style: {
          display: "block",
          height: "60px",
          padding: "13px 0",
          backgroundImage: options[mode].fileField.backgroundImage,
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: options[mode].fileField.hoverBackgroundColor
          },
          '& input[type="file"]': {
            display: "none"
          },
          "& .MuiInputLabel-root": {
            position: "initial",
            padding: 0,
            marginLeft: "8px",
            transform: "unset"
          },
          "& .MuiFormHelperText-root": {
            marginLeft: "8px",

            "& .MuiTypography-caption": {
              color: options[mode].fileField.browseTextColor
            }
          }
        }
      },
      {
        props: { variants: "fileUploadControl", selected: "noBorder" },
        style: {
          backgroundImage: "none"
        }
      },
      {
        props: { variants: "fileSelectedControl" },
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "60px",
          gap: "20px"
        }
      }
    ]
  };
};

export default MuiFormControl;
