const options = {
  light: {
    start: {
      color: "#264769"
    },
    checkBox: {
      disabled: {
        label: {
          color: "#264769CC"
        }
      }
    },
    radioButton: {
      label: {
        color: "#5B626E"
      }
    },
    checkboxFilters: {
      typeDdos: {
        color: "#20C4C6"
      },
      typeGeo: {
        color: "#833DE5"
      },
      typeFWRules: {
        color: "#1145F0"
      },
      typeEaaf: {
        color: "#F01C69"
      },
      typeIPS: {
        color: "#DD8500"
      },
      fwaas: {
        typeBypass: {
          color: "#4C3B8E"
        },
        typeEaaf: {
          color: "#DB8300"
        },
        typeIPS: {
          color: "#1145F0"
        },
        typeGeo: {
          color: "#19999B"
        },
        typeConnectionLimit: {
          color: "#F01C69"
        },
        typeAcl: {
          color: "#AC45DC"
        }
      }
    }
  },
  dark: {
    start: {
      color: "#D4D6DB"
    },
    checkBox: {
      disabled: {
        label: {
          color: "#d4d6db80"
        }
      }
    },
    radioButton: {
      label: {
        color: "#D4D6DB"
      }
    },
    checkboxFilters: {
      typeDdos: {
        color: "#20C4C6"
      },
      typeGeo: {
        color: "#C19FF2"
      },
      typeFWRules: {
        color: "#98B0FF"
      },
      typeEaaf: {
        color: "#F88EB5"
      },
      typeIPS: {
        color: "#FFC56F"
      },
      fwaas: {
        typeBypass: {
          color: "#98B0FF"
        },
        typeEaaf: {
          color: "#DB8300"
        },
        typeIPS: {
          color: "#6DCFFC"
        },
        typeGeo: {
          color: "#20C4C6"
        },
        typeConnectionLimit: {
          color: "#F88EB5"
        },
        typeAcl: {
          color: "#C19FF2"
        }
      }
    }
  }
};
const MuiFormControlLabel = mode => {
  return {
    variants: [
      {
        props: { variant: "switch" },
        style: {
          marginLeft: 0,
          marginRight: 0,
          "& .MuiFormControlLabel-label": {
            lineHeight: "12px",
            fontSize: 12,
            marginLeft: "10px"
          },
          "&.Mui-disabled": {
            "& .MuiFormControlLabel-label.Mui-disabled": {
              color: options[mode].checkBox.disabled.label.color
            }
          }
        }
      },
      {
        props: { variant: "checkbox" },
        style: {
          height: 15,
          "& .MuiFormControlLabel-label": {
            lineHeight: "14px",
            fontSize: 12
          },
          "&.Mui-disabled": {
            "& .MuiFormControlLabel-label.Mui-disabled": {
              color: options[mode].checkBox.disabled.label.color
            }
          },
          "& .MuiCheckbox-root": {
            padding: 0,
            marginLeft: 9,
            marginRight: 5
          }
        }
      },
      {
        props: { variant: "radioButton" },
        style: {
          height: 15,
          "& .MuiFormControlLabel-label": {
            color: options[mode].radioButton.label.color,
            fontSize: 12,
            "&.Mui-disabled": {
              color: options[mode].radioButton.label.color
            }
          }
        }
      },
      {
        props: { labelPlacement: "top", variants: "start" },
        style: {
          alignItems: "start",
          "& .MuiFormControlLabel-label": {
            marginLeft: 10,
            marginBottom: 5,
            lineHeight: "12px"
          },
          "& .MuiTypography-root": {
            fontSize: 12,
            fontWeight: 400
          },
          marginLeft: 0,
          color: options[mode].start.color
        }
      },
      {
        props: { typestyle: "events_ddos" },
        style: {
          color: options[mode].checkboxFilters.typeDdos.color
        }
      },
      {
        props: { typestyle: "events_geo" },
        style: {
          color: options[mode].checkboxFilters.typeGeo.color
        }
      },
      {
        props: { typestyle: "events_acl" },
        style: {
          color: options[mode].checkboxFilters.typeFWRules.color
        }
      },
      {
        props: { typestyle: "events_eaaf" },
        style: {
          color: options[mode].checkboxFilters.typeEaaf.color
        }
      },
      {
        props: { typestyle: "events_ips" },
        style: {
          color: options[mode].checkboxFilters.typeIPS.color
        }
      },
      {
        props: { typestyle: "fwaas_100" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeBypass.color
        }
      },
      {
        props: { typestyle: "fwaas_200" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeEaaf.color
        }
      },
      {
        props: { typestyle: "fwaas_300" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeIPS.color
        }
      },
      {
        props: { typestyle: "fwaas_400" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeGeo.color
        }
      },
      {
        props: { typestyle: "fwaas_500" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeConnectionLimit.color
        }
      },
      {
        props: { typestyle: "fwaas_600" },
        style: {
          color: options[mode].checkboxFilters.fwaas.typeAcl.color
        }
      }
    ]
  };
};

export default MuiFormControlLabel;
