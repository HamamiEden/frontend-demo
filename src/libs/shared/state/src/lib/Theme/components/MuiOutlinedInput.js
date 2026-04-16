const options = {
  light: {
    default: {
      root: {
        color: "#264769",
        iconButton: {
          color: "#5B626E"
        },
        svgIcon: {
          color: "#5B626E"
        }
      },
      input: {
        placeholder: {
          color: "#5B626E"
        }
      },
      fieldset: {
        borderColor: "#D4D6DBB2",
        hover: {
          borderColor: "#018FFE"
        },
        focused: {
          borderColor: "#018FFE"
        }
      }
    },
    disabled: {
      root: {
        backgroundColor: "rgba(243, 242, 242, 0.5)",
        color: "#6B728080",
        svgIcon: {
          color: "#26476980"
        }
      }
    },
    select: {
      icon: {
        color: "#264769",
        open: {
          color: "#355CD5"
        }
      }
    },
    search: {
      root: {
        borderColor: "#E7E7E8"
      },
      fieldset: {
        borderColor: "#E7E7E8"
      },
      input: {
        color: "#5B626E"
      }
    },
    square: {
      input: {
        color: "#264769B2"
      }
    },
    headerInput: {
      text: "#264769",
      borderColor: "#355CD5"
    },
    pagination: {
      color: "#5B626E",
      borderColor: "rgba(46, 88, 148, 0.3)",
      hover: {
        background: "#CBD4DB"
      }
    },
    DEFAULT: {
      color: "#1145F0",
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#D4D6DB"
      }
    },
    CWAF: {
      primary: {
        background: "#DDE5FF"
      },
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#EEF2FE"
      }
    },
    CDDOS: {
      primary: {
        background: "#E3DCFF"
      },
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#E9E6F5"
      }
    },
    CBOT: {
      primary: {
        background: "#FFF3E2"
      },
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#FFF3E2"
      }
    },
    CTRC: {
      primary: {
        background: "#EBFBFC"
      },
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#EBFBFC"
      }
    },
    SYSTEM: {
      primary: {
        background: "transparent"
      },
      selected: {
        hover: {
          borderColor: "#355CD5"
        },
        borderColor: "#D4D6DB"
      }
    }
  },
  dark: {
    default: {
      root: {
        color: "#D4D6DB",
        iconButton: {
          color: "#3B77EE"
        },
        svgIcon: {
          color: "#D4D6DB"
        }
      },
      input: {
        placeholder: {
          color: "#D4D6DBB2"
        }
      },
      fieldset: {
        borderColor: "#D4D6DBB2",
        hover: {
          borderColor: "#018FFE"
        },
        focused: {
          borderColor: "#018FFE"
        }
      }
    },
    disabled: {
      root: {
        backgroundColor: "#353739",
        color: "#D4D6DB80",
        svgIcon: {
          color: "#D4D6DB4D"
        }
      }
    },
    select: {
      icon: {
        color: "#D4D6DB",
        open: {
          color: "#2555D1"
        }
      }
    },
    search: {
      root: {
        borderColor: "#E7E7E8"
      },
      fieldset: {
        borderColor: "#E7E7E8"
      },
      input: {
        color: "#5B626E"
      }
    },
    square: {
      input: {
        color: "#D4D6DB"
      }
    },
    headerInput: {
      text: "#D4D6DB",
      borderColor: "#2555D1"
    },
    pagination: {
      color: "#D4D6DB",
      borderColor: "#D4D6DB",
      hover: {
        background: "#484A4D"
      }
    },
    DEFAULT: {
      color: "#6DCFFC",
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#D4D6DB"
      }
    },
    CWAF: {
      primary: {
        background: "#5278F466"
      },
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#333C58"
      }
    },
    CDDOS: {
      primary: {
        background: "#8474C580"
      },
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#343245"
      }
    },
    CBOT: {
      primary: {
        background: "linear-gradient(0deg, rgba(255, 196, 109, 0.2), rgba(255, 196, 109, 0.2)), #212225"
      },
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#483E2E"
      }
    },
    CTRC: {
      primary: {
        background: "#03373A"
      },
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#03373A"
      }
    },
    SYSTEM: {
      primary: {
        background: "transparent"
      },
      selected: {
        hover: {
          borderColor: "#2555D1"
        },
        borderColor: "#D4D6DB"
      }
    }
  }
};

const MuiOutlinedInput = mode => {
  return {
    styleOverrides: {
      input: {
        fontSize: "0.75rem",
        padding: "8px 10px",
        lineHeight: "14px",
        height: "auto",
        "&::placeholder": {
          color: options[mode].default.input.placeholder.color,
          opacity: 1,
          fontWeight: 300
        }
      },
      root: {
        borderRadius: 8,
        color: options[mode].default.root.color,
        width: 250,
        "& fieldset.MuiOutlinedInput-notchedOutline": {
          borderWidth: 0.5,
          borderColor: options[mode].default.fieldset.borderColor
        },
        "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: options[mode].default.fieldset.hover.borderColor,
          borderWidth: 1
        },
        "&.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: options[mode].default.fieldset.focused.borderColor,
          borderWidth: 1
        },
        "& .MuiIconButton-root": {
          color: options[mode].default.root.iconButton.color
        },
        "& svg": {
          flexShrink: 0,
          color: options[mode].default.root.svgIcon.color
        },
        "&.MuiInputBase-fullWidth": {
          width: "100%"
        },
        "&.Mui-disabled": {
          backgroundColor: options[mode].disabled.root.backgroundColor,
          pointerEvents: "none",
          color: options[mode].disabled.root.color,
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: "none"
          },
          "& svg": {
            color: options[mode].disabled.root.svgIcon.color
          }
        }
      }
    },
    variants: [
      {
        props: { variants: "context" },
        style: {
          "& .MuiOutlinedInput-input": {
            marginLeft: 2,
            marginRight: 2,
            marginTop: -2,
            marginBottom: -2,
            lineHeight: "17px"
          },
          "&.MuiOutlinedInput-root": {
            "& .MuiAutocomplete-endAdornment": {
              lineHeight: 1
            }
          }
        }
      },
      {
        props: { variants: "select" },
        style: {
          "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-select": {
            minHeight: "auto"
          },
          "& .MuiOutlinedInput-input": {
            fontSize: 12,
            fontWeight: 300,
            lineHeight: "20px",
            padding: "5px 10px",
            "&.MuiSelect-select": {
              height: 20,
              display: "flex"
            }
          },
          "& .MuiSelect-icon": {
            color: options[mode].select.icon.color,
            fontSize: 14
          },
          "& .MuiSelect-icon.MuiSelect-iconOpen": {
            color: options[mode].select.icon.open.color
          },
          "&:hover": {
            "& .MuiSelect-icon": {
              color: options[mode].select.icon.open.color
            }
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "none"
          },
          "&.DEFAULT": {
            color: options[mode].DEFAULT.color,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].DEFAULT.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.CWAF": {
            background: options[mode].CWAF.primary.background,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].CWAF.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.CDDOS": {
            background: options[mode].CDDOS.primary.background,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].CDDOS.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.CBOT": {
            background: options[mode].CBOT.primary.background,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].CBOT.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.CTRC": {
            background: options[mode].CTRC.primary.background,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].CTRC.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.agenticAi": {
            background: "var(--services-agentic-bg)",
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--services-agentic-bg)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.apiSecurity": {
            background: "var(--services-api-bg)",
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--services-api-bg)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          },
          "&.SYSTEM": {
            background: options[mode].SYSTEM.primary.background,
            "&.MuiInputBase-root.MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: options[mode].SYSTEM.selected.borderColor
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-hover-border)"
            },
            "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-selected-border)"
            }
          }
        }
      },
      {
        props: { variant: "search" },
        style: {
          borderColor: options[mode].search.root.borderColor,
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 400,
          lineHeight: "14px",
          height: 30,
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderWidth: 0.5,
            borderColor: options[mode].search.fieldset.borderColor
          },
          // "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
          //   borderColor: options[mode].search.fieldset.hover.borderColor,
          //   borderWidth: 1,
          // },
          // "&.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
          //   borderColor: options[mode].default.fieldset.focused.borderColor,
          //   borderWidth: 1,
          // },
          "& .MuiOutlinedInput-input": {
            paddingRight: 0,
            fontSize: 12,
            width: "100%",
            color: options[mode].search.input.color
          },
          "& .MuiInputBase-input": {
            padding: 0,
            "&::placeholder": {
              fontStyle: "italic"
            }
          },
          "&.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary": {
            padding: "0 5px 0 11px"
          },
          "&.close": {
            "&.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary": {
              padding: 0
            }
          }
        }
      },
      {
        props: { variant: "defaultSpaced" },
        style: {
          marginRight: 5,
          marginLeft: 5
        }
      },
      {
        props: { variant: "square" },
        style: {
          borderRadius: 4,
          padding: "11px 4px",
          marginRight: 5,
          marginLeft: 5,
          "& .MuiOutlinedInput-input": {
            padding: 0,
            textAlign: "center",
            color: options[mode].square.input.color
          }
        }
      },
      {
        props: { variants: "headerInput" },
        style: {
          "&.MuiInputBase-root.MuiOutlinedInput-root": {
            width: "369px",
            "&.Mui-focused": {
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: options[mode].headerInput.borderColor
              }
            },
            "&:hover": {
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: options[mode].headerInput.borderColor
              }
            },
            "&:not(.Mui-focused) .MuiInputBase-input.MuiOutlinedInput-input::placeholder": {
              fontWeight: 500,
              color: options[mode].headerInput.text
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "16px",
              padding: "7px 4px",
              paddingLeft: "unset"
            },
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent"
            }
          }
        }
      },
      {
        props: { variants: "pagination" },
        style: {
          borderRadius: "8px",
          color: options[mode].pagination.color,
          borderColor: options[mode].pagination.borderColor,
          borderWidth: 1,
          "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-select": {
            minHeight: 15
          },
          "& .MuiOutlinedInput-input": {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "14px",
            padding: "8px 0px 7px 10px"
          },
          "& .MuiSvgIcon-root": {
            padding: "3px",
            right: 5,
            fontSize: "20px",
            borderRadius: "50%"
          },
          "&:hover": {
            "& .MuiSvgIcon-root": {
              backgroundColor: options[mode].pagination.hover.background
            }
          }
        }
      }
    ]
  };
};
export default MuiOutlinedInput;
