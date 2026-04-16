const theme = {
  commonChip: {
    width: 135,
    height: 30,
    padding: "0 5px",
    textAlign: "left",
    transition: "all .2s ease-in-out",
    border: "1px solid transparent",
    flexDirection: "row-reverse",
    "& .MuiChip-icon:first-of-type + .MuiChip-label": {
      flexGrow: 1
    },
    "& .MuiChip-icon": {
      margin: "0 0 0 5px"
    },
    "& .MuiChip-label": {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "14px",
      padding: 0,
      flexGrow: 0
    }
  },
  light: {
    yetAnotherStupidRedColor: { color: "#FFE5EB" },
    bloodRed: { color: "#B5153A" }, // "#EC0139"
    lightPink: { color: "#FFE5EB" },
    eggSour: { color: "#473300" },
    cola: { color: "#FFF5DB" },
    mauve: { color: "#641BC9" },
    violentViolet: { color: "#EBE0FB" },
    lightGreen: { color: "#156C42" },
    londonGray: { color: "#F2F4F6" },
    forestGreen: { color: "#156C42" },
    grassGreen: { color: "#E5FAF0" },
    congressBlue: { color: "#02548F" },
    pattensBlue: { color: "#DFF1FF" },
    brown: { color: "#925700" },
    peachOrange: { color: "#FFCA97" },
    darkBlue: { color: "#0E0ADA" },
    moonRaker: { color: "#DBDAFA" },
    torchRed: { color: "#FE001E" },
    fairPink: { color: "#FFE5EB" }, //"#FFEBEC"
    deepCerulean: { color: "#0040AD" }, //"#087EA5"
    mabel: { color: "#CCECFF" },
    catalinaBlue: { color: "#092789" },
    hawkesBlue: { color: "#E3E9FD" },
    sail: { color: "#BBD1FC" },
    negroni: { color: "#FFE5C2" },
    tenn: { color: "#CA5E00" },
    twilightBlue: { color: "#F1FBFF" },
    warning: { color: "#BF360C" },
    trueBlue: { color: "#015ECB" },
    iceBlue: { color: "#D6F1FE" },
    oceanBlue: { color: "#165A79" },
    ivoryWhite: { color: "#FFF7EB" },
    deepOrange: { color: "#BF360C" },
    default: {
      backgroundColor: "#F5F6F8",
      color: "#5B626E",
      hover: {
        color: "#264769"
      }
    },
    inputChip: {
      default: {
        backgroundColor: "#E5F6FF",
        color: "#015ECB",
        icon: {
          color: "#5B626E",
          hover: {
            color: "#015ECB"
          }
        },
        boxShadow: "0px 0px 5px #C9CCCD"
      },
      disabled: {
        backgroundColor: "#EFF2F3",
        color: "#5B626E80"
      }
    },
    entityChip: {
      backgroundColor: "#EFF2F3",
      color: "#0E0ADA",
      hover: {
        boxShadow: "0px 0px 5px #C9CCCD"
      },
      disabled: {
        backgroundColor: "#EFF2F3",
        color: "rgba(107, 114, 128, 0.5)"
      },
      selected: {
        backgroundColor: "#BBD1FC"
      }
    },
    entityHeaderChip: {
      backgroundColor: "#E5E8EB",
      color: "#0C6FDD",
      countBackgroundColor: "#C5C9CC",
      countColor: "#0C6FDD"
    },
    securityAnalysisRedirect: {
      chipBorder: "1px solid var(--general-logo-soc-x)",
      buttonBorder: "1px solid var(--general-logo-soc-x)",
      disabled: {
        color: "#A6ABB5",
        backgroundColor: "#E1E4EA"
      },
      hover: {
        border: "1px solid var(--general-logo-soc-x)",
        buttonBoxShadow: "0px 0px 5px 0px #BFC2C9",
        chipBoxShadow: "0px 0px 5px 0px #BFC2C9"
      }
    },
    counter: {
      color: "#264769",
      backgroundColor: "#D7DADD"
    },
    blockEnabled: {
      backgroundColor: "#FFB3B3",
      color: "#AB0101"
    },
    reportEnabled: {
      backgroundColor: "#E7E0FF",
      color: "#5845A4"
    },
    modifyEnabled: {
      backgroundColor: "#C8E8FF",
      color: "#0C7ACA"
    },
    clickableChip: {
      backgroundColor: "#D3DDFC",
      color: "#0027A1"
    },
    CWAF: {
      backgroundColor: "#D3DDFC",
      color: "#0027A1"
    },
    CDDOS: {
      backgroundColor: "#DAD5ED",
      color: "#1C0086"
    },
    CBOT: {
      backgroundColor: "#FFF3E2",
      color: "#925700"
    },
    severity: {
      info: {
        backgroundColor: "#D6F1FE",
        color: "#165A79"
      },
      low: {
        backgroundColor: "#FFF5DB",
        color: "#8A6300"
      },
      medium: {
        backgroundColor: "#FFE5C2",
        color: "#BF360C"
      },
      high: {
        backgroundColor: "#FFE5EB",
        color: "#B5153A"
      },
      critical: {
        backgroundColor: "#EC0139",
        color: "#FFFFFF"
      }
    },
    status: {
      secondarySuccess: {
        backgroundColor: "#E5FAF0", //"#DEF4EB",
        color: "#156C42" //"#00AB63",
      },
      offCloud: {
        backgroundColor: "#F5F6F8", //"#ECECEF",
        color: "#5B626E" //"#6B6F85",
      },
      onboarding: {
        backgroundColor: "#E7E0FF",
        color: "#5845A4"
      },
      pending: {
        backgroundColor: "#FFF7EB", //"#FFEDD2",
        color: "#BF360C" //"#DF8808",
      },
      request: {
        backgroundColor: "#FFCA97",
        color: "#6D4200" //"#CC6A0C",
      },
      deactivateRequest: {
        backgroundColor: "#FFCA97",
        color: "#6D4200" //"#CC6A0C",
      },
      active: {
        backgroundColor: "#E5FAF0", //"#CCFBF1",
        color: "#156C42", //"#0D9488",
        secondary: {
          backgroundColor: "#E5FAF0", //"#CDEAE0",
          color: "#156C42" //"#008353",
        }
      },
      demo: {
        backgroundColor: "#F5F6F8", //"#DDDDDD",
        color: "#5B626E" //"#4e536fcc",
      },
      off: {
        backgroundColor: "#93A1AF",
        color: "#EBEBEB"
      },
      success: {
        backgroundColor: "#E5FAF0", //"#CCFBF1",
        color: "#156C42" //"#0D9488",
      },
      error: {
        backgroundColor: "#FFB3B3",
        color: "#AB0101"
      }
    },
    chips: {
      defaultDisabled: {
        background: "#F0F1F4",
        opacity: "0.7",
        label: {
          background: "none",
          WebkitBackgroundClip: "unset",
          WebkitTextFillColor: "unset",
          fontWeight: 400,
          color: "#A6ABB5",
          opacity: "unset"
        }
      },
      accountUsageSummary: {
        root: {
          backgroundColor: "rgba(50, 62, 213, 0.1)",
          color: "#350770"
        }
      },
      addOnService: {
        root: {
          backgroundColor: "#E0F7FA",
          color: "#00838F"
        },
        disabled: {
          color: "#A6ABB5"
        }
      },
      selectPlan: {
        root: {
          backgroundColor: "transparent",
          color: "#0E0ADA",
          border: "1px solid #0E0ADA"
        },
        hover: {
          backgroundColor: "rgba(14, 10, 218, 0.15)"
        },
        disabled: {
          border: "1px solid #F3F2F2",
          backgroundColor: "#F3F2F2",
          color: "rgba(107, 114, 128, 0.5)",
          opacity: 1
        }
      },
      default: {
        root: {
          backgroundColor: "#F5F6F8", //"#EEEEEE",
          color: "#5B626E", //"rgba(78, 83, 111, 0.8)",
          iconColor: "264769"
        },
        hover: {
          border: "1px solid #5B626E"
        }
      },
      botStandAlone: {
        root: {
          backgroundColor: "#F5F6F8", //"#EEEEEE",
          color: "#264769",
          border: "0.5px solid #264769"
        },
        iconColor: {
          color: "#264769"
        }
      },
      advancedPlan: {
        label: {
          background: "#392E97"
        }
      },
      environmentStatus: {
        staging: {
          backgroundColor: "#FFF7EB",
          color: "#BF360C"
        },
        production: {
          backgroundColor: "#B6E0FF",
          color: "#0C7ACA"
        }
      },
      cddos: {
        onDemand: {
          root: {
            backgroundColor: "#FFF0FE", //"#FEEBF2",
            color: "#C12190" //"#F01C69",
          },
          hover: {
            border: "1px solid #C12190"
          }
        },
        hybridAlwaysOn: {
          root: {
            background: "linear-gradient(90deg, #E2F9FA 52.6%, #D6F1FE 100%)",
            color: "#017E9B"
          },
          hover: {
            border: "1px solid #017E9B"
          }
        },
        hybrid: {
          root: {
            backgroundColor: "#E2F9FA",
            color: "#006064" //"#009D9F",
          },
          hover: {
            border: "1px solid #006064 #009D9F"
          }
        },
        alwaysOn: {
          root: {
            backgroundColor: "#D6F1FE",
            color: "#165A79" //"#036998",
          },
          hover: {
            border: "1px solid #165A79"
          }
        },
        peakProtection: {
          root: {
            backgroundColor: "#ECE9FB",
            color: "#4C3B8E"
          },
          hover: {
            border: "1px solid #4C3B8E"
          }
        }
      },
      ctrc: {
        free: {
          root: {
            background: "#F0F4FF", //"#CBE9FF",
            color: "#004CC5" //"#122860",
          },
          hover: {
            border: "1px solid rgba(154, 26, 95, 0.6)"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        },
        essential: {
          root: {
            background: "#F0EDFF",
            color: "#5C02B6"
          },
          hover: {
            border: "1px solid rgba(96, 55, 18, 0.6)"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        },
        pro: {
          root: {
            background: "#E5FAF0", //"#CFFFF6",
            color: "#09341F" //"#0E3E35",
          },
          hover: {
            border: "1px solid rgba(14, 62, 53, 0.6)"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        }
      },
      cwaf: {
        standard: {
          root: {
            background: "#F0F4FF", //"#EDF3FF",
            color: "#004CC5" //"#34519C"
          },
          hover: {
            border: "1px solid #34519c99"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        },
        advanced: {
          root: {
            background: "#FAF0FF", //"#F0EEFF",
            color: "#481490" //"#392E97",
          },
          label: {
            color: "#481490"
          },
          hover: {
            border: "1px solid #392e9799"
          }
        },
        complete: {
          root: {
            background: "#FFF5DB",
            color: "#264769"
          },
          label: {
            color: "#264769"
          },
          hover: {
            border: "1px solid #89704480"
          },
          icon: {
            cloud: { color: "#392E97" },
            starOne: { color: "#231D4F" },
            starTwo: { color: "rgba(51, 42, 76, 0.8)" },
            starThree: { color: "#C39F42" }
          }
        }
      },
      standaloneBotManagement: {
        root: {
          backgroundColor: "#EEEEEE",
          color: "#3E678F"
        },
        hover: {
          border: "1px solid #34519C"
        }
      }
    },
    group: {
      connectivity_status: {
        backgroundColor: "#D1F7F8",
        color: "#22BCBE"
      },
      asset_actions: {
        backgroundColor: "#C4E1FC",
        color: "#1145F0"
      },
      asset_health_status: {
        backgroundColor: "#FDE3ED",
        color: "#E82B7A"
      },
      security: {
        backgroundColor: "#FFCACA",
        color: "#D6181F"
      },
      monitoring_status: {
        backgroundColor: "#FFF5E7",
        color: "#E59A08"
      },
      utilization_alert: {
        backgroundColor: "#F0E7FC",
        color: "#641BC9"
      },
      ssl_status: {
        backgroundColor: "#E2F5FF",
        color: "#26B1FF"
      }
    },
    tooltipChip: {
      backgroundColor: "#F5F6F8",
      hover: {
        backgroundColor: "#F5F6F8",
        color: "#0E0ADA"
      }
    },
    warning_message: {
      color: "#E97200",
      backgroundColor: "#FFF7EB"
    },
    beta: {
      color: "#641BC9",
      background: "#EBE0FB"
    },
    outOfPlan: {
      color: "#FFFFFF",
      backgroundColor: "#C7C7C780"
    },
    spProtectionHeader: {
      color: "#264769",
      backgroundColor: "#F5F6F8"
    },
    bgp: {
      hover: {
        background: "#CBD4DB",
        color: "#0E0ADA"
      }
    },
    carouselIndexIndicator: {
      color: "#4340F6",
      selectedColor: "#0E0ADA",
      hoverColor: "#4340F6"
    },
    fwaasRuleType: {
      common: {
        width: 200,
        cursor: "pointer",
        paddingLeft: 10,
        paddingRight: 10,
        label: {
          fontWeight: 400,
          padding: 0
        },
        "& svg": {
          height: 20,
          width: 20
        },
        hover: {
          label: {
            fontWeight: 500
          }
        }
      },
      defaultDisabled: {
        background: "#EFF2F3",
        label: {
          background: "none",
          WebkitBackgroundClip: "unset",
          WebkitTextFillColor: "unset",
          fontWeight: 400,
          color: "#5B626E",
          opacity: "unset"
        }
      },
      bypass: {
        backgroundColor: "#DFCFF480",
        color: "#4C3B8E",
        hover: {
          backgroundColor: "#DFCFF4",
          border: "1px solid #4C3B8ECC"
        }
      },
      geo: {
        backgroundColor: "#C9F1F180",
        color: "#19999B",
        hover: {
          backgroundColor: "#C9F1F1",
          border: "1px solid #19999BCC"
        }
      },
      connectionLimit: {
        backgroundColor: "#FCD7E580",
        color: "#F01C69",
        hover: {
          backgroundColor: "#FCD7E5",
          border: "1px solid #F01C69CC"
        }
      },
      acl: {
        backgroundColor: "#F5DFFF80",
        color: "#AC45DC",
        hover: {
          backgroundColor: "#F5DFFF",
          border: "1px solid #AC45DCCC"
        }
      },
      eaaf: {
        backgroundColor: "#FFEACA80",
        color: "#DB8300",
        hover: {
          backgroundColor: "#FFEACA",
          border: "1px solid #DB8300CC"
        }
      },
      signature: {
        backgroundColor: "#CDD8FC80",
        color: "#1145F0",
        hover: {
          backgroundColor: "#CDD8FC",
          border: "1px solid #1145F0CC"
        }
      }
    },
    services: {
      default: {
        backgroundColor: "#FFF",
        color: "#264769",
        borderColor: "#C1CDDF"
      },
      CWAF: {
        backgroundColor: "#DDE5FF",
        color: "#264769",
        icon: {
          color: "#264769"
        }
      },
      CDDOS: {
        backgroundColor: "#E3DCFF",
        color: "#264769",
        icon: {
          color: "#264769"
        }
      },
      CBOT: {
        backgroundColor: "#FFF3E2",
        color: "#264769",
        icon: {
          color: "#264769"
        }
      },
      CTRC: {
        backgroundColor: "#E2F8F9",
        color: "#264769",
        icon: {
          color: "#264769"
        }
      },
      SYSTEM: {
        backgroundColor: "#EFF2F3",
        color: "#264769",
        icon: {
          color: "#264769"
        }
      }
    },
    notification: {
      system: {
        background: "#DFF1FF",
        color: "#02548F"
      }
    },
    freeTrial: {
      color: "#203D5A",
      background: "#FFF",
      border: "0.5px solid rgba(32, 61, 90, 0.60)",
      hover: {
        background: "#D3DFEA"
      },
      selected: {
        background: "#D3DFEA",
        color: "#203D5A"
      },
      disabled: {
        background: "#F0F1F4",
        border: "none"
      },
      NA: {
        color: "#203D5A",
        background: "#FFF",
        border: "0.5px solid rgba(32, 61, 90, 0.60)"
      },
      PENDING: {
        color: "#DB8300",
        background: "#FFEACA",
        border: "none"
      },
      ENABLED: {
        color: "#203D5A",
        background: "#D3DFEA",
        border: "none"
      },
      DISABLED: {
        color: "#A6ABB5",
        background: "#F0F1F4",
        border: "none"
      }
    },
    multipleTrials: {
      color: "#203D5A",
      backgroundColor: "#6E93B84D",
      boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
    },
    attackManagement: {
      attackSummary: {
        indicator: {
          active: {
            color: "var(--text-on-action)",
            background: "linear-gradient(to left, #B5153A, #EC0139)",
            hoverBackground: "linear-gradient(to left, #931835, #B5153A)"
          },
          cooldown: {
            color: "var(--text-warning)",
            background: "var(--background-warning-hover)",
            hoverBackground: "#FFCA97"
          },
          completed: {
            color: "#156C42", //"#24BE74",
            background: "#E5FAF0" //"#D3F2E3",
          }
        },
        summaryItem: {
          active: {
            color: "#D01E2F",
            background: "#FFEFEF"
          },
          cooldown: {
            color: "#BF360C",
            background: "#FFE5C2"
          }
        }
      },
      assetSummaryItem: {
        onCloud: {
          color: "#00AB63",
          background: "#DEF4EB"
        },
        offCloud: {
          color: "#6B6F85",
          background: "#ECECEF"
        }
      },
      connectionsSummaryItem: {
        cpe: {
          color: "#4C3B8E",
          background: "#E8E6F0"
        },
        gre: {
          color: "#048CCB",
          background: "#DEF0F8"
        },
        crossconnect: {
          color: "#ED9E2B",
          background: "#FFF5E7"
        }
      }
    },
    fatRoundedChip: {
      hover: {
        boxShadow: "0px 0px 5px 1px #DBDDE1"
      },
      disabled: {
        background: "#F3F2F2",
        color: "#A1ADBB"
      },
      seaGreen: {
        background: "#CCFBF1",
        color: "#0D9488"
      },
      red: {
        background: "#FFCDD1",
        color: "#D81F1F"
      },
      plumpPurple: {
        background: "#E7E0FF",
        color: "#5845A4"
      },
      grey: {
        background: "#F5F6F8", //"#DDDDDD",
        color: "#5B626E" //"#4E536FCC",
      },
      orange: {
        background: "#FFF3E2",
        color: "#DB8300"
      }
    },
    noDataAvailable: {
      color: "#5B626E",
      backgroundColor: "#F5F6F8"
    },
    idpRelatedAppChip: {
      backgroundColor: "#D4D6DB",
      borderColor: "#D4D6DB",
      color: "#264769"
    },
    idpInheritChip: {
      backgroundColor: "#EFF2F3"
    },
    securityPolicyStatus: {
      active: {
        background: "rgba(229, 250, 240, 1)",
        color: "rgba(31, 162, 98, 1)"
      },
      notActive: {
        background: "rgba(245, 246, 248, 1)",
        color: "rgba(107, 114, 128, 1)"
      },
      progress: {
        background: "rgba(255, 202, 151, 1)",
        color: "rgba(146, 87, 0, 1)"
      },
      pendingApply: {
        background: "rgba(255, 229, 194, 1)",
        color: "rgba(202, 94, 0, 1)"
      },
      inherited: {
        background: "rgba(227, 233, 253, 1)",
        color: "rgba(13, 58, 205, 1)"
      }
    },
    new: {
      color: "#087EA5",
      background: "#CEF3FF"
    },
    securityAnalysis: {
      fullyMitigated: {
        color: "#24BE74",
        background: "#D3F2E3"
      }
    },
    httpMethod: {
      GET: {
        backgroundColor: "#77A5FF"
      },
      POST: {
        backgroundColor: "#31D887"
      },
      PUT: {
        backgroundColor: "#FFB549"
      },
      DELETE: {
        backgroundColor: "#FF475D"
      },
      PATCH: {
        backgroundColor: "#41DEE0"
      },
      OPTIONS: {
        backgroundColor: "#3BBEFB"
      },
      HEAD: {
        backgroundColor: "#C19FF2"
      },
      TRACE: {
        backgroundColor: "#1E78FF"
      },
      PROPFIND: {
        backgroundColor: "#F44E8B"
      }
    },
    statuses: {
      ACTIVE: {
        background: "#E5FAF0",
        color: "#156C42" //"#1FA262",
      },
      PENDING: {
        background: "#FFE5C2",
        color: "#CA5E00"
      },
      PENDING_RENEW: {
        background: "#FFEBEC",
        color: "#FE001E"
      },
      PENDING_DISABLED: {
        background: "#F5F6F8",
        color: "#5B626E"
      },
      INVALID: {
        background: "#F5F6F8",
        color: "#5B626E"
      }
    },
    blueish: {
      color: "#0E0ADA",
      borderColor: "#0E0ADA",
      hover: {
        backgroundColor: "#E3E9FD"
      }
    },
    orange: {
      color: "#DB8300",
      backgroundColor: "#FFEACA"
    },
    lightOrange: {
      background: "#FFF7EB",
      color: "#E97200",
      shadowColor: "#D47F0078"
    },
    greenSuccess: {
      color: "#DEF4EB"
    },
    textPrimary: {
      color: "#264769"
    },
    gray: {
      backgroundColor: "#E1E3E6"
    },
    activeChip: {
      backgroundColor: "#E1E3E6",
      color: "#0C6FDD"
    },
    addonChip: {
      color: "#00838F",
      backgroundColor: "#E0F7FA"
    }
  },
  dark: {
    yetAnotherStupidRedColor: { color: "#300D15" },
    bloodRed: { color: "#FE3363" },
    lightPink: { color: "#621A2B" },
    eggSour: { color: "#FFF5DB" },
    cola: { color: "#473300" },
    mauve: { color: "#C9A8FF" },
    violentViolet: { color: "#2B0C57" },
    lightGreen: { color: "#31D887" },
    londonGray: { color: "#4C515B" },
    forestGreen: { color: "#31D887" },
    grassGreen: { color: "#09341F" },
    congressBlue: { color: "#A5D0F2" },
    pattensBlue: { color: "#143349" },
    brown: { color: "#FF9A01" },
    peachOrange: { color: "#3D2500" },
    darkBlue: { color: "#6DCFFC" },
    moonRaker: { color: "#0F3D52" },
    torchRed: { color: "#FE001E" },
    fairPink: { color: "#3F1218" },
    deepCerulean: { color: "#2CCCFF" },
    mabel: { color: "#0F3D52" },
    catalinaBlue: { color: "#CDD8FC" },
    hawkesBlue: { color: "#273153" },
    sail: { color: "#124962" },
    negroni: { color: "#3D2500" },
    tenn: { color: "#FFB549" },
    twilightBlue: { color: "#0F3D52" },
    warning: { color: "#FFB549" },
    trueBlue: { color: "#6DCFFC" },
    iceBlue: { color: "#0F3D52" },
    oceanBlue: { color: "#2CCCFF" },
    ivoryWhite: { color: "#311E03" },
    deepOrange: { color: "#FF9A01" },
    default: {
      backgroundColor: "#3D4149",
      color: "#D4D6DB",
      hover: {
        color: "#FFFFFF"
      }
    },
    inputChip: {
      default: {
        backgroundColor: "#414346",
        color: "#6DCFFC",
        icon: {
          color: "#D4D6DB80",
          hover: {
            color: "#D4D6DB"
          }
        },
        boxShadow: "0px 0px 6px rgba(221, 221, 221, 0.8)"
      },
      disabled: {
        backgroundColor: "#4F5154",
        color: "#D4D6DB66"
      }
    },
    entityChip: {
      backgroundColor: "#414346",
      color: "#6DCFFC",
      hover: {
        boxShadow: "0px 0px 6px rgba(221, 221, 221, 0.7)"
      },
      disabled: {
        backgroundColor: "#4F5154",
        color: "rgb(212 214 219 / 40%)"
      },
      selected: {
        backgroundColor: "#124962"
      }
    },
    entityHeaderChip: {
      backgroundColor: "#414346",
      color: "#6DCFFC",
      countBackgroundColor: "#2E3032",
      countColor: "#6DCFFC"
    },
    securityAnalysisRedirect: {
      chipBorder: "1px solid var(--general-logo-soc-x)",
      buttonBorder: "1px solid var(--general-logo-soc-x)",
      disabled: {
        color: "#A6ABB5",
        backgroundColor: "#4F5154"
      },
      hover: {
        border: "1px solid var(--general-logo-soc-x)",
        buttonBoxShadow: "0px 0px 5px 1px #BFC2C9",
        chipBoxShadow: "0px 0px 5px 1px #BFC2C9"
      }
    },
    counter: {
      color: "#D4D6DB",
      backgroundColor: "#414346"
    },
    blockEnabled: {
      backgroundColor: "#33050B",
      color: "#FF2B44"
    },
    modifyEnabled: {
      backgroundColor: "#002540",
      color: "#6AC0FF"
    },
    reportEnabled: {
      backgroundColor: "#190533",
      color: "#B7A5FF"
    },
    clickableChip: {
      backgroundColor: "#124962",
      color: "#6DCFFC"
    },
    CWAF: {
      backgroundColor: "#252E49",
      color: "#5278F4"
    },
    CDDOS: {
      backgroundColor: "#342F4A",
      color: "#B1A1F2"
    },
    CBOT: {
      backgroundColor: "#3D2500",
      color: "#FFEACA"
    },
    severity: {
      info: {
        backgroundColor: "#B6E0FF",
        color: "#0C7ACA"
      },
      low: {
        backgroundColor: "#FFECBB",
        color: "#BE8900"
      },
      medium: {
        backgroundColor: "#FFCA97",
        color: "#6D4200"
      },
      high: {
        backgroundColor: "#FF9F9F",
        color: "#AB0101"
      },
      critical: {
        backgroundColor: "#EC0139",
        color: "#FFFFFF"
      }
    },
    status: {
      secondarySuccess: {
        backgroundColor: "#1F4133",
        color: "#31D887"
      },
      offCloud: {
        backgroundColor: "#414346",
        color: "#D4D6DB"
      },
      onboarding: {
        backgroundColor: "#190533",
        color: "#B7A5FF"
      },
      pending: {
        backgroundColor: "#311E03",
        color: "#FF9A01"
      },
      request: {
        backgroundColor: "#604500",
        color: "#FFD058"
      },
      deactivateRequest: {
        backgroundColor: "#604500",
        color: "#FFD058"
      },
      active: {
        backgroundColor: "#E5FAF0",
        color: "#156C42",
        secondary: {
          backgroundColor: "#E5FAF0",
          color: "#156C42"
        }
      },
      demo: {
        backgroundColor: "#4F5154",
        color: "#D4D6DB"
      },
      off: {
        backgroundColor: "#93A1AF",
        color: "#EBEBEB"
      },
      success: {
        backgroundColor: "#1F4133",
        color: "#24BE74"
      },
      error: {
        backgroundColor: "#33050B",
        color: "#FF2B44"
      }
    },
    chips: {
      defaultDisabled: {
        background: "#3C3C3C",
        opacity: "0.8",
        label: {
          background: "none",
          WebkitBackgroundClip: "unset",
          WebkitTextFillColor: "unset",
          fontWeight: 400,
          color: "#707070",
          opacity: "unset"
        }
      },
      accountUsageSummary: {
        root: {
          backgroundColor: "rgba(50, 62, 213, 0.2)",
          color: "#5278F4"
        }
      },
      addOnService: {
        root: {
          backgroundColor: "#003B3D",
          color: "#4DD0E1"
        },
        disabled: {
          color: "#707070"
        }
      },
      selectPlan: {
        root: {
          backgroundColor: "transparent",
          color: "#6DCFFC",
          border: "1px solid #6DCFFC"
        },
        hover: {
          background: "rgba(109, 207, 252, 0.2)"
        },
        disabled: {
          border: "0.5px solid #505154",
          backgroundColor: "#505154",
          color: "rgba(212, 214, 219, 0.5)",
          opacity: 1
        }
      },
      cddos: {
        peakProtection: {
          root: {
            backgroundColor: "rgba(76, 59, 142, 0.7)",
            color: "#CEC3FA"
          },
          hover: {
            border: "1px solid #CEC3FA"
          }
        },
        onDemand: {
          root: {
            backgroundColor: "rgba(152, 7, 85, 0.7);",
            color: "#FFA8B9"
          },
          hover: {
            border: "1px solid #FFA8B9"
          }
        },
        hybridAlwaysOn: {
          root: {
            background: "linear-gradient(90deg, rgba(10, 100, 121, 0.63) 0%, rgba(1, 96, 100, 0.63) 100%)",
            color: "#90E6EF"
          },
          hover: {
            border: "1px solid #90E6EF"
          }
        },
        hybrid: {
          root: {
            backgroundColor: "#01606470",
            color: "#77D6D8"
          },
          hover: {
            border: "1px solid #77D6D8"
          }
        },
        alwaysOn: {
          root: {
            backgroundColor: "#35889A70",
            color: "#ABF0FF"
          },
          hover: {
            border: "1px solid #ABF0FF"
          }
        }
      },
      environmentStatus: {
        staging: {
          backgroundColor: "#FFF7EB",
          color: "#BF360C"
        },
        production: {
          backgroundColor: "#B6E0FF",
          color: "#0C7ACA"
        }
      },
      default: {
        root: {
          backgroundColor: "#2E3137",
          color: "#D4D6DB",
          iconColor: "rgba(212, 214, 219, 0.7)"
        },
        hover: {
          border: "1px solid #7E8594"
        }
      },
      botStandAlone: {
        root: {
          backgroundColor: "#484A4D",
          color: "#71A0FF",
          border: "0.5px solid #71A0FF"
        },
        iconColor: {
          color: "#71A0FF"
        }
      },
      advancedPlan: {
        label: {
          background:
            "linear-gradient(0deg, #392E97, #392E97), radial-gradient(357.78% 2061.38% at 5.03% -92.22%, #231D4F 0%, #231D4F 27.6%, rgba(232, 174, 1, 0.69) 71.35%, #CD9A00 100%)"
        }
      },
      ctrc: {
        free: {
          root: {
            background: "linear-gradient(90deg, #00567B 0%, #001F3D 100%)",
            color: "#CBF6FF"
          },
          hover: {
            border: "1px solid rgba(255, 225, 250, 0.6)"
          },
          icon: {
            cloud: { color: "#AAD1FF" },
            star: { color: "#AAD1FF" }
          }
        },
        essential: {
          root: {
            background: "linear-gradient(90deg, #372C63 0%, #1F0549 100%);",
            color: "#F0EDFF"
          },
          hover: {
            border: "1px solid rgba(255, 239, 209, 0.5)"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        },
        pro: {
          root: {
            background: "linear-gradient(123deg, #004743 0%, #001011 100%, rgba(0, 9, 10, 0) 100%)",
            color: "#DEFDFF"
          },
          hover: {
            border: "1px solid rgba(222, 253, 255, 0.5)"
          },
          icon: {
            cloud: { color: "#392E97" },
            star: { color: "#34519C" }
          }
        }
      },
      cwaf: {
        standard: {
          root: {
            background: "linear-gradient(111deg, #082A4E 0.73%, #285788 0.74%, #052443 100.63%)",
            color: "#AAD1FF"
          },
          hover: {
            border: "1px solid rgba(119, 172, 227, 0.6)"
          },
          icon: {
            cloud: { color: "#AAD1FF" },
            star: { color: "#AAD1FF" }
          }
        },
        advanced: {
          root: {
            background: "linear-gradient(88.31deg, #441C98 0.24%, #120430 102.02%)",
            color: "#907AFF"
          },
          hover: {
            border: "1px solid rgba(144, 122, 255, 0.6)"
          }
        },
        complete: {
          root: {
            background: "linear-gradient(88.11deg, #d6a257e0 0%, #d8a458e0 58.04%, #f5bc64e0 98.94%)"
          },
          label: {
            background: "linear-gradient(159deg, #030011, #a36100)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          },
          hover: {
            border: "1px solid #dfb87c99"
          },
          icon: {
            cloud: { color: "#C2B2FF" },
            starOne: { color: "#C2B2FF" },
            starTwo: { color: "rgba(195, 177, 250, 0.7)" },
            starThree: { color: "#FFC46D" }
          }
        }
      },
      standardTooltip: {
        root: {
          border: "unset"
        }
      },
      advancedTooltip: {
        root: {
          border: "unset"
        }
      },
      completeTooltip: {
        root: {
          border: "unset"
        }
      },
      standaloneBotManagement: {
        root: {
          backgroundColor: "#484A4D",
          color: "#71A0FF"
        },
        hover: {
          border: "1px solid #71A0FF"
        }
      },
      accountStatus: {
        root: {
          padding: "5px 10px",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: 14,
          borderRadius: "4px"
        }
      }
    },
    group: {
      connectivity_status: {
        backgroundColor: "#D1F7F8",
        color: "#22BCBE"
      },
      asset_actions: {
        backgroundColor: "#C4E1FC",
        color: "#1145F0"
      },
      asset_health_status: {
        backgroundColor: "#FDE3ED",
        color: "#E82B7A"
      },
      security: {
        backgroundColor: "#FFCACA",
        color: "#D6181F"
      },
      monitoring_status: {
        backgroundColor: "#FFF5E7",
        color: "#E59A08"
      },
      utilization_alert: {
        backgroundColor: "#F0E7FC",
        color: "#641BC9"
      },
      ssl_status: {
        backgroundColor: "#E2F5FF",
        color: "#26B1FF"
      }
    },
    tooltipChip: {
      backgroundColor: "#3D4149",
      hover: {
        backgroundColor: "#3D4149",
        color: "#6DCFFC"
      }
    },
    warning_message: {
      color: "#E97200",
      backgroundColor: "#FFF7EB"
    },
    beta: {
      color: "#C9A8FF",
      background: "#2B0C57"
    },
    outOfPlan: {
      color: "#FFFFFF",
      backgroundColor: "#C7C7C780"
    },
    spProtectionHeader: {
      color: "#D4D6DB",
      backgroundColor: "#2D3032"
    },
    bgp: {
      hover: {
        background: "#4F5154",
        color: "#6DCFFC"
      }
    },
    carouselIndexIndicator: {
      color: "#3B77EE80",
      selectedColor: "#3B77EE",
      hoverColor: "#3B77EE"
    },
    fwaasRuleType: {
      common: {
        width: 200,
        cursor: "pointer",
        paddingLeft: 10,
        paddingRight: 10,
        label: {
          fontWeight: 400,
          padding: 0
        },
        "& svg": {
          height: 20,
          width: 20
        },
        hover: {
          label: {
            fontWeight: 500
          }
        }
      },
      defaultDisabled: {
        background: "#EFF2F3",
        label: {
          background: "none",
          WebkitBackgroundClip: "unset",
          WebkitTextFillColor: "unset",
          fontWeight: 400,
          color: "#5B626E",
          opacity: "unset"
        }
      },
      bypass: {
        backgroundColor: "#27356080",
        color: "#98B0FF",
        hover: {
          backgroundColor: "#273560",
          border: "1px solid #98B0FFCC"
        }
      },
      geo: {
        backgroundColor: "#03484980",
        color: "#20C4C6",
        hover: {
          backgroundColor: "#034849",
          border: "1px solid #20C4C6CC"
        }
      },
      connectionLimit: {
        backgroundColor: "#6A1B3880",
        color: "#F88EB5",
        hover: {
          backgroundColor: "#6A1B38",
          border: "1px solid #F88EB5CC"
        }
      },
      acl: {
        backgroundColor: "#43276C80",
        color: "#C19FF2",
        hover: {
          backgroundColor: "#43276C",
          border: "1px solid #C19FF2CC"
        }
      },
      eaaf: {
        backgroundColor: "#452E0B80",
        color: "#DB8300",
        hover: {
          backgroundColor: "#452E0B",
          border: "1px solid #DB8300CC"
        }
      },
      signature: {
        backgroundColor: "#14496280",
        color: "#6DCFFC",
        hover: {
          backgroundColor: "#144962",
          border: "1px solid #6DCFFCCC"
        }
      }
    },
    services: {
      default: {
        backgroundColor: "#080809",
        color: "#D4D6DB",
        borderColor: "rgba(193, 205, 223, 0.50)"
      },
      CWAF: {
        backgroundColor: "#5278F466",
        color: "#D4D6DB",
        icon: {
          color: "#D4D6DB"
        }
      },
      CDDOS: {
        backgroundColor: "#8474C580",
        color: "#D4D6DB",
        icon: {
          color: "#D4D6DB"
        }
      },
      CTRC: {
        backgroundColor: "#03373A",
        color: "#D4D6DB",
        icon: {
          color: "#D4D6DB"
        }
      },
      CBOT: {
        backgroundColor: "linear-gradient(0deg, rgba(255, 196, 109, 0.3), rgba(255, 196, 109, 0.3)), #1A1C1E",
        color: "#D4D6DB",
        icon: {
          color: "#D4D6DB"
        }
      },
      SYSTEM: {
        backgroundColor: "#343638CC",
        color: "#D4D6DB",
        icon: {
          color: "#D4D6DB"
        }
      }
    },
    notification: {
      system: {
        background: "#143349",
        color: "#A5D0F2"
      }
    },
    freeTrial: {
      color: "#669ED6",
      background: "#1A1C1E",
      border: "0.5px solid rgba(32, 61, 90, 0.60)",
      hover: {
        background: "rgba(102, 158, 214, 0.31)"
      },
      selected: {
        background: "#0C2742",
        color: "#D4D6DB"
      },
      disabled: {
        background: "#F0F1F4",
        border: "none"
      },
      NA: {
        color: "#669ED6",
        background: "#1A1C1E",
        border: "0.5px solid rgba(32, 61, 90, 0.60)"
      },
      PENDING: {
        color: "#F1A026",
        background: "#38260A",
        border: "none"
      },
      ENABLED: {
        color: "#D4D6DB",
        background: "#0C2742",
        border: "none"
      },
      DISABLED: {
        color: "#707070",
        background: "#3C3C3C",
        border: "none"
      }
    },
    multipleTrials: {
      color: "#D4D6DB",
      backgroundColor: "#0C2742",
      boxShadow: "0px 0px 8px 0px rgba(255, 255, 255, 0.3)"
    },
    attackManagement: {
      attackSummary: {
        indicator: {
          active: {
            color: "var(--text-on-action)",
            background: "linear-gradient(to left, #B5153A, #EC0139)",
            hoverBackground: "linear-gradient(to left, #931835, #B5153A)"
          },
          cooldown: {
            color: "var(--text-warning)",
            background: "var(--background-warning-hover)",
            hoverBackground: "#3D2500"
          },
          completed: {
            color: "#31D887",
            background: "#1F4133"
          }
        },
        summaryItem: {
          active: {
            color: "#D01E2F",
            background: "#FFEFEF"
          },
          cooldown: {
            color: "#F97700",
            background: "#FEEBD9"
          }
        }
      },
      assetSummaryItem: {
        onCloud: {
          color: "#00AB63",
          background: "#DEF4EB"
        },
        offCloud: {
          color: "#6B6F85",
          background: "#ECECEF"
        }
      },
      connectionsSummaryItem: {
        cpe: {
          color: "#00AB63",
          background: "#DEF4EB"
        },
        gre: {
          color: "#6B6F85",
          background: "#ECECEF"
        },
        crossconnect: {
          color: "#6B6F85",
          background: "#ECECEF"
        }
      }
    },
    fatRoundedChip: {
      hover: {
        boxShadow: "0px 0px 5px 1px #949aa580"
      },
      disabled: {
        background: "#505154",
        color: "#818287"
      },
      seaGreen: {
        background: "#1F4133",
        color: "#31D887"
      },
      red: {
        background: "#510B14",
        color: "#FF2B44"
      },
      plumpPurple: {
        background: "#2F0E5A",
        color: "#B7A5FF"
      },
      grey: {
        background: "#505154",
        color: "#D4D6DB"
      },
      orange: {
        background: "#3D2500",
        color: "#FFB549"
      }
    },
    noDataAvailable: {
      color: "#D4D6DB",
      backgroundColor: "#414346"
    },
    idpRelatedAppChip: {
      backgroundColor: "#3F4144",
      borderColor: "#D4D6DB",
      color: "#D4D6DB"
    },
    idpInheritChip: {
      backgroundColor: "#3F4144"
    },
    securityPolicyStatus: {
      active: {
        background: "rgba(9, 52, 31, 1)",
        color: "rgba(49, 216, 135, 1)"
      },
      notActive: {
        background: "rgba(61, 65, 73, 1)",
        color: "rgba(212, 214, 219, 1)"
      },
      progress: {
        background: "rgba(61, 37, 0, 1)",
        color: "rgba(255, 154, 1, 1)"
      },
      pendingApply: {
        background: "rgba(61, 37, 0, 1)",
        color: "rgba(255, 181, 73, 1)"
      },
      inherited: {
        background: "rgba(39, 49, 83, 1)",
        color: "rgba(205, 216, 252, 1)"
      }
    },
    new: {
      color: "#2CCCFF",
      background: "#00516A"
    },
    securityAnalysis: {
      fullyMitigated: {
        color: "#31D887",
        background: "#09341F"
      }
    },
    httpMethod: {
      GET: {
        backgroundColor: "#77A5FF"
      },
      POST: {
        backgroundColor: "#31D887"
      },
      PUT: {
        backgroundColor: "#FFB549"
      },
      DELETE: {
        backgroundColor: "#FF475D"
      },
      PATCH: {
        backgroundColor: "#41DEE0"
      },
      OPTIONS: {
        backgroundColor: "#3BBEFB"
      },
      HEAD: {
        backgroundColor: "#C19FF2"
      },
      TRACE: {
        backgroundColor: "#1E78FF"
      },
      PROPFIND: {
        backgroundColor: "#F44E8B"
      }
    },
    statuses: {
      ACTIVE: {
        background: "#09341F",
        color: "#31D887"
      },
      PENDING: {
        background: "#3D2500",
        color: "#FFB549"
      },
      PENDING_RENEW: {
        background: "#3F1218",
        color: "#FF2B44"
      },
      PENDING_DISABLED: {
        background: "#3D4149",
        color: "#D4D6DB"
      },
      INVALID: {
        background: "#3D4149",
        color: "#D4D6DB"
      }
    },
    blueish: {
      color: "#6DCFFC",
      borderColor: "#6DCFFC",
      hover: {
        backgroundColor: "#1B334B"
      }
    },
    orange: {
      color: "#F1A026",
      backgroundColor: "#38260A"
    },
    lightOrange: {
      background: "#3E2207",
      color: "#FF9632",
      shadowColor: "#FF96328F"
    },
    greenSuccess: {
      color: "#1F4133"
    },
    textPrimary: {
      color: "#D4D6DB"
    },
    gray: {
      backgroundColor: "#4C515B"
    },
    activeChip: {
      backgroundColor: "#414346",
      color: "#6DCFFC"
    },
    addonChip: {
      color: "#4DD0E1",
      backgroundColor: "#003B3D"
    }
  }
};

const MuiChip = mode => {
  return {
    styleOverrides: {
      root: {
        backgroundColor: theme[mode].default.backgroundColor,
        color: theme[mode].default.color,
        borderRadius: 4,
        height: 24,
        fontSize: "12px",
        lineHeight: "12px",
        "& .MuiChip-label": {
          paddingLeft: 10,
          paddingRight: 10
        },
        "& .MuiChip-icon": {
          width: 28,
          marginLeft: 10,
          color: "inherit"
        },
        "&:hover:not(.disableHoverEffect)": {
          color: theme[mode].default.hover.color
        },

        "&:hover.disableHoverEffect": {
          color: theme[mode].default.color
        }
      }
    },
    variants: [
      {
        props: { colors: "darkBlue" },
        style: {
          "&.MuiChip-root": {
            "&.Mui-disabled": {
              color: `${theme[mode].default.color}`,
              border: `1px solid ${theme[mode].default.color}`
            }
          },
          "&.MuiChip-root:not(.Mui-disabled)": {
            color: `${theme[mode].darkBlue.color}`,
            border: `1px solid ${theme[mode].darkBlue.color}`,

            "&:hover": {
              background: `${theme[mode].moonRaker.color}`
            },
            "&.selected": {
              background: `${theme[mode].darkBlue.color}`,
              color: "white"
            }
          }
        }
      },
      {
        props: { colors: "torchRed" },
        style: {
          "&.MuiChip-root": {
            "&.Mui-disabled": {
              color: `${theme[mode].default.color}`,
              border: `1px solid ${theme[mode].default.color}`
            }
          },
          "&.MuiChip-root:not(.Mui-disabled)": {
            color: `${theme[mode].torchRed.color}`,
            border: `1px solid ${theme[mode].torchRed.color}`,
            "&:hover": {
              background: `${theme[mode].fairPink.color}`
            },
            "&.selected": {
              background: `${theme[mode].torchRed.color}`,
              color: "white"
            }
          }
        }
      },
      {
        props: { variant: "ACCOUNT_USAGE_SUMMARY" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].chips.accountUsageSummary.root,
            borderRadius: "3px"
          },
          ".MuiChip-label": {
            padding: "8px",
            fontWeight: 400,
            fontSize: "12px"
          }
        }
      },
      {
        props: { variant: "ADD_ON_SERVICE" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].chips.addOnService.root,
            borderRadius: "2px",
            height: 20,
            "& .MuiChip-icon": {
              margin: "0 0 0 5px",
              width: 12
            },
            "&.colored-no-border": {
              justifyContent: "flex-start",
              "& .MuiChip-icon": {
                width: 16,
                margin: 0
              }
            }
          },

          ".MuiChip-label": {
            padding: "4px 5px",
            fontWeight: 400,
            fontSize: "10px",
            lineHeight: "10px"
          },
          "&.small-addon": {
            width: "20px",
            borderRadius: "20px",
            "& .MuiChip-label": {
              display: "none"
            },
            "& .MuiChip-icon": {
              marginLeft: "2px"
            }
          },
          "&.Mui-disabled": {
            ...theme[mode].chips.defaultDisabled,
            color: theme[mode].chips.addOnService.disabled.color,
            "& .MuiChip-label": {
              ...theme[mode].chips.defaultDisabled.label
            }
          }
        }
      },
      {
        props: { variant: "STATUS_POC" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.pending
          }
        }
      },
      {
        props: { variant: "STATUS_DEMO" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.demo
          }
        }
      },
      {
        props: { variant: "STATUS_ACTIVE" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.active
          }
        }
      },
      {
        props: { variant: "STATUS_ACTIVE_SECONDARY" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.active.secondary
          }
        }
      },
      {
        props: { variant: "STATUS_SUCCESS" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.success
          }
        }
      },
      {
        props: { variant: "STATUS_ERROR" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.error
          }
        }
      },
      {
        props: { variant: "SELECT_PLAN" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.selectPlan.root,
            "&:hover": {
              ...theme[mode].chips.selectPlan.hover
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              border: "none",
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_PEAK_PROTECTION" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.cddos.peakProtection.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cddos.peakProtection.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                width: 18,
                margin: 0
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_ON_DEMAND" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.cddos.onDemand.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cddos.onDemand.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                width: 18,
                margin: 0
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_HYBRID_ALWAYS_ON" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.cddos.hybridAlwaysOn.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              width: 97,
              padding: 0
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cddos.hybridAlwaysOn.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                width: 17,
                margin: 0
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_HYBRID" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.cddos.hybrid.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cddos.hybrid.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                width: 18,
                margin: 0
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_ALWAYS_ON" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.cddos.alwaysOn.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cddos.alwaysOn.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                width: 17,
                margin: 0
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_DEFAULT" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.default.hover
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover, &.colored-no-border": {
              "& .MuiChip-icon": {
                color: theme[mode].chips.default.root.iconColor,
                width: 17,
                margin: 0
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_BOT_STANDALONE" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.botStandAlone.root,
            fontSize: "10px",
            padding: "3px 11px",
            ".MuiChip-label": {
              fontWeight: 400
            },
            "& .MuiChip-icon": {
              ...theme[mode].chips.botStandAlone.iconColor
            }
          }
        }
      },
      {
        props: { variant: "PLAN_FREE" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "3px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.ctrc.free.hover,
              ...theme[mode].chips.ctrc.free.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.ctrc.free.hover,
              background: theme[mode].chips.ctrc.free.root.background,
              color: theme[mode].chips.ctrc.free.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              background: theme[mode].chips.ctrc.free.root.background,
              color: theme[mode].chips.ctrc.free.root.color,
              height: "30px",
              "& .MuiChip-icon": {
                width: 32,
                margin: 0
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.ctrc.free.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_STANDARD" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "3px",
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cwaf.standard.hover,
              ...theme[mode].chips.cwaf.standard.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.cwaf.standard.hover,
              background: theme[mode].chips.cwaf.standard.root.background,
              color: theme[mode].chips.cwaf.standard.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              background: theme[mode].chips.cwaf.standard.root.background,
              color: theme[mode].chips.cwaf.standard.root.color,
              height: "30px",
              "& .MuiChip-icon": {
                width: 32,
                margin: 0
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.cwaf.standard.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_ESSENTIAL" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              ...theme.commonChip["& .MuiChip-label"],
              ...theme[mode].chips.ctrc.essential.label
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.ctrc.essential.hover,
              ...theme[mode].chips.ctrc.essential.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.ctrc.essential.hover,
              background: theme[mode].chips.ctrc.essential.root.background,
              color: theme[mode].chips.ctrc.essential.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              height: "30px",
              background: theme[mode].chips.ctrc.essential.root.background,
              color: theme[mode].chips.ctrc.essential.root.color,
              "& .MuiChip-icon": {
                width: 24,
                margin: 0
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.ctrc.essential.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_ADVANCED" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              ...theme.commonChip["& .MuiChip-label"],
              ...theme[mode].chips.cwaf.advanced.label
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cwaf.advanced.hover,
              ...theme[mode].chips.cwaf.advanced.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.cwaf.advanced.hover,
              background: theme[mode].chips.cwaf.advanced.root.background,
              color: theme[mode].chips.cwaf.advanced.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              height: "30px",
              background: theme[mode].chips.cwaf.advanced.root.background,
              color: theme[mode].chips.cwaf.advanced.root.color,
              "& .MuiChip-icon": {
                width: 24,
                margin: 0
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.cwaf.advanced.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_PRO" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              ...theme.commonChip["& .MuiChip-label"],
              ...theme[mode].chips.ctrc.pro.label
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.ctrc.pro.hover,
              ...theme[mode].chips.ctrc.pro.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.ctrc.pro.hover,
              background: theme[mode].chips.ctrc.pro.root.background,
              color: theme[mode].chips.ctrc.pro.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              background: theme[mode].chips.ctrc.pro.root.background,
              color: theme[mode].chips.ctrc.pro.root.color,
              height: "30px",
              "& .MuiChip-icon": {
                width: 24,
                margin: 0,
                marginBottom: "1px"
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.ctrc.pro.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_COMPLETE" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.default.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              ...theme.commonChip["& .MuiChip-label"],
              ...theme[mode].chips.cwaf.complete.label
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.cwaf.complete.hover,
              ...theme[mode].chips.cwaf.complete.root
            },
            "&.colored-with-border": {
              ...theme[mode].chips.cwaf.complete.hover,
              background: theme[mode].chips.cwaf.complete.root.background,
              color: theme[mode].chips.cwaf.complete.root.color,
              height: "30px"
            },
            "&.colored-no-border, &.colored-border-hover": {
              background: theme[mode].chips.cwaf.complete.root.background,
              color: theme[mode].chips.cwaf.complete.root.color,
              height: "30px",
              "& .MuiChip-icon": {
                width: 24,
                margin: 0,
                marginBottom: "1px"
              }
            },
            "&.colored-no-border": {
              border: "unset"
            },
            "&.colored-border-hover": {
              "&:hover": {
                border: theme[mode].chips.cwaf.complete.hover.border
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "PLAN_STANDALONE_BOT_MANAGEMENT" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.standaloneBotManagement.root,
            paddingLeft: "9px",
            paddingRight: "7px",
            "& .MuiChip-label": {
              ...theme.commonChip["& .MuiChip-label"],
              fontWeight: 400,
              fontSize: 10,
              lineHeight: "12px",
              whiteSpace: "initial"
            },
            "&.colored-no-border": {
              border: "unset",
              "&:hover": {
                border: "unset"
              }
            },
            "&:hover, &.showBorder": {
              ...theme[mode].chips.standaloneBotManagement.hover
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      // {
      //   props: { variant: "ADVANCED_PLAN" },
      //   style: {
      //     "&.MuiChip-root": {
      //       ...theme.commonChip,
      //       ...theme[mode].chips.secure360.root,
      //       "& #cloud": { ...theme[mode].chips.secure360.icon },
      //       "& #starOne": { ...theme[mode].chips.secure360.icon },
      //       "& #starTwo": { ...theme[mode].chips.secure360.icon },
      //       "& #starThree": { ...theme[mode].chips.secure360.icon },
      //       "& .MuiChip-label": {
      //         ...theme.commonChip["& .MuiChip-label"],
      //         ...{
      //           ...theme[mode].chips.secure360.label,
      //           background: theme[mode].chips.advancedPlan.label.background,
      //         },
      //       },
      //       "&:hover": {
      //         ...theme[mode].chips.secure360.hover,
      //       },
      //       "&.Mui-disabled": {
      //         ...theme[mode].chips.defaultDisabled,
      //         "& .MuiChip-label": {
      //           ...theme[mode].chips.defaultDisabled.label,
      //         },
      //       },
      //     },
      //   },
      // },
      {
        props: { variant: "SEVERITY_10" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.info.backgroundColor,
            color: theme[mode].severity.info.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "SEVERITY_INFO" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.info.backgroundColor,
            color: theme[mode].severity.info.color,
            fontWeight: 500
          },
          "& .MuiChip-deleteIcon": {
            color: theme[mode].severity.info.color
          }
        }
      },
      {
        props: { variant: "SEVERITY_20" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.low.backgroundColor,
            color: theme[mode].severity.low.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "SEVERITY_LOW" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.low.backgroundColor,
            color: theme[mode].severity.low.color,
            fontWeight: 500
          },
          "& .MuiChip-deleteIcon": {
            color: theme[mode].severity.low.color
          }
        }
      },
      {
        props: { variant: "SEVERITY_30" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.medium.backgroundColor,
            color: theme[mode].severity.medium.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "SEVERITY_MEDIUM" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.medium.backgroundColor,
            color: theme[mode].severity.medium.color,
            fontWeight: 500
          },
          "& .MuiChip-deleteIcon": {
            color: theme[mode].severity.medium.color
          }
        }
      },
      {
        props: { variant: "SEVERITY_40" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.high.backgroundColor,
            color: theme[mode].severity.high.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "SEVERITY_HIGH" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.high.backgroundColor,
            color: theme[mode].severity.high.color,
            fontWeight: 500
          },
          "& .MuiChip-deleteIcon": {
            color: theme[mode].severity.high.color
          }
        }
      },
      {
        props: { variant: "SEVERITY_50" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.critical.backgroundColor,
            color: theme[mode].severity.critical.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "SEVERITY_CRITICAL" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.critical.backgroundColor,
            color: theme[mode].severity.critical.color,
            fontWeight: 500
          },
          "& .MuiChip-deleteIcon": {
            color: theme[mode].severity.critical.color
          }
        }
      },
      {
        props: { variant: "RISK_HIGH" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.high.backgroundColor,
            color: theme[mode].severity.high.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "RISK_MEDIUM" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.medium.backgroundColor,
            color: theme[mode].severity.medium.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "RISK_LOW" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.low.backgroundColor,
            color: theme[mode].severity.low.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "RISK_INFO" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].severity.info.backgroundColor,
            color: theme[mode].severity.info.color,
            fontWeight: 500
          }
        }
      },
      {
        props: { variant: "STATUS_DEACTIVATING-REQUEST" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.deactivateRequest.backgroundColor,
            color: theme[mode].status.deactivateRequest.color
          }
        }
      },
      {
        props: { variant: "STATUS_OFF-CLOUD" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.offCloud.backgroundColor,
            color: theme[mode].status.offCloud.color
          }
        }
      },
      {
        props: { variant: "STATUS_ONBOARDING" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.onboarding.backgroundColor,
            color: theme[mode].status.onboarding.color
          }
        }
      },
      {
        props: { variant: "STATUS_ON-CLOUD-BGP-PENDING" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.pending.backgroundColor,
            color: theme[mode].status.pending.color
          }
        }
      },
      {
        props: { variant: "STATUS_ACTIVATING_REQUEST" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.request.backgroundColor,
            color: theme[mode].status.request.color
          }
        }
      },
      {
        props: { variant: "STATUS_DEACTIVATING_REQUEST" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.request.backgroundColor,
            color: theme[mode].status.request.color
          }
        }
      },
      {
        props: { variant: "STATUS_ON-CLOUD" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.secondarySuccess.backgroundColor,
            color: theme[mode].status.secondarySuccess.color
          }
        }
      },
      {
        props: { variant: "STATUS_PENDING" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].status.pending.backgroundColor,
            color: theme[mode].status.pending.color
          }
        }
      },
      {
        props: { variant: "GROUP_CONNECTIVITY STATUS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.connectivity_status.backgroundColor,
            color: theme[mode].group.connectivity_status.color
          }
        }
      },
      {
        props: { variant: "GROUP_ASSET ACTIONS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.asset_actions.backgroundColor,
            color: theme[mode].group.asset_actions.color
          }
        }
      },
      {
        props: { variant: "GROUP_UTILIZATION ALERT" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.utilization_alert.backgroundColor,
            color: theme[mode].group.utilization_alert.color
          }
        }
      },
      {
        props: { variant: "GROUP_MONITORING STATUS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.monitoring_status.backgroundColor,
            color: theme[mode].group.monitoring_status.color
          }
        }
      },
      {
        props: { variant: "GROUP_SSL STATUS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.ssl_status.backgroundColor,
            color: theme[mode].group.ssl_status.color
          }
        }
      },
      {
        props: { variant: "GROUP_ASSET HEALTH STATUS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.asset_health_status.backgroundColor,
            color: theme[mode].group.asset_health_status.color
          }
        }
      },
      {
        props: { variant: "GROUP_SECURITY" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].group.security.backgroundColor,
            color: theme[mode].group.security.color
          }
        }
      },
      {
        props: { variant: "WARNING_MESSAGE" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].warning_message.backgroundColor,
            color: theme[mode].warning_message.color
          }
        }
      },
      {
        props: { tooltipchip: "true" },
        style: {
          cursor: "pointer",
          color: theme[mode].trueBlue.color,
          backgroundColor: theme[mode].tooltipChip.backgroundColor,
          "&.MuiChip-root:hover": {
            color: theme[mode].trueBlue.color,
            backgroundColor: theme[mode].tooltipChip.hover.backgroundColor
          },
          "& span.MuiChip-label": {
            padding: "6px"
          }
        }
      },
      {
        props: { variant: "limitTagChip" },
        style: {
          cursor: "pointer",
          backgroundColor: theme[mode].tooltipChip.backgroundColor,
          "&:hover": {
            color: theme[mode].default.color,
            backgroundColor: theme[mode].tooltipChip.backgroundColor
          },
          "& span.MuiChip-label": {
            padding: "6px"
          }
        }
      },
      {
        props: { variant: "inputChips" },
        style: {
          "&.MuiChip-root": {
            marginRight: "5px",
            backgroundColor: theme[mode].inputChip.default.backgroundColor,
            borderRadius: "8px",
            maxHeight: 20,
            color: theme[mode].inputChip.default.color,
            fontWeight: 400,
            padding: "3px 6px 3px 6px",
            fontSize: 12,
            lineHeight: "12px",
            "& span.MuiChip-label": {
              padding: 0
            },
            "& .MuiSvgIcon-root": {
              color: theme[mode].inputChip.default.icon.color,
              fontSize: 14,
              margin: 0,
              marginLeft: 3,
              marginRight: -3
            },
            "&:hover": {
              boxShadow: theme[mode].inputChip.default.boxShadow,
              "& .MuiSvgIcon-root": {
                color: theme[mode].inputChip.default.icon.hover.color
              }
            }
          },
          "&.MuiChip-label": {
            paddingLeft: 0,
            paddingRight: 6
          },
          "&.MuiChip-root.Mui-disabled": {
            backgroundColor: theme[mode].inputChip.disabled.backgroundColor,
            color: theme[mode].inputChip.disabled.color,
            "& .MuiSvgIcon-root": {
              color: theme[mode].inputChip.disabled.color
            }
          }
        }
      },
      {
        props: { variant: "inputChipsNew" },
        style: {
          "&.MuiChip-root": {
            marginRight: "8px",
            backgroundColor: "var(--chip-multi-select-defalt)",
            borderRadius: "4px",
            height: "24px",
            color: "var(--text-primary)",
            fontWeight: 400,
            padding: "4px 4px 4px 8px",
            fontSize: 14,
            lineHeight: "14px",

            "&.MuiChip-root:hover": {
              backgroundColor: "var(--chip-multi-select-hover)",
              color: "var(--text-primary)"
            },

            "& span.MuiChip-label": {
              padding: 0
            },

            "& .MuiChip-deleteIcon": {
              width: "14px",
              height: "14px",
              fontSize: "14px",
              color: "var(--icon-dafault)",
              marginLeft: "4px",
              marginRight: "0px",
              padding: 0,

              "& svg": {
                width: "14px",
                height: "14px"
              }
            },

            "&.MuiChip-root.Mui-disabled": {
              backgroundColor: "var(--chip-multi-select-disabled)",
              color: "var(--text-disabled)",

              "& .MuiChip-deleteIcon": {
                color: "var(--icon-disabled)"
              }
            }
          },

          "&.MuiChip-label": {
            paddingLeft: 0,
            paddingRight: 6
          }
        }
      },
      {
        props: { type: "filtersChips" },
        style: {
          "&.MuiChip-root": {
            color: "var(--text-primary)",
            bbackgroundColor: "var(--chip-multi-select-defalt)",
            "& .MuiSvgIcon-root": {
              color: "var(--icon-dafault)"
            },
            "&:hover": {
              backgroundColor: "var(--chip-multi-select-hover)"
            }
          }
        }
      },
      {
        props: { variant: "entityChips" },
        style: {
          "&.MuiChip-root": {
            flexFlow: "row-reverse",
            backgroundColor: theme[mode].entityChip.backgroundColor,
            borderRadius: "8px",
            maxHeight: 26,
            color: theme[mode].entityChip.color,
            fontWeight: 400,
            padding: "6px",
            fontSize: 12,
            lineHeight: "14px",
            "& span.MuiChip-label": {
              padding: 0
            },
            "& .MuiSvgIcon-root": {
              fontSize: 14,
              margin: 0,
              marginLeft: 3,
              marginRight: -3
            },
            "&:hover": {
              boxShadow: theme[mode].entityChip.hover.boxShadow
            }
          },
          "&.MuiChip-root.Mui-disabled": {
            backgroundColor: theme[mode].entityChip.disabled.backgroundColor,
            color: theme[mode].entityChip.disabled.color,
            opacity: 1,
            "& .MuiSvgIcon-root": {
              color: theme[mode].entityChip.disabled.color
            }
          },
          "&.selected": {
            backgroundColor: theme[mode].entityChip.selected.backgroundColor
          }
        }
      },
      {
        props: { colors: "methodPOST" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].httpMethod.POST.backgroundColor,
            color: "#FFF",
            "& .MuiChip-icon, & .MuiChip-label, & .MuiSvgIcon-root": {
              color: "#FFF"
            }
          }
        }
      },
      {
        props: { colors: "methodGET" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].httpMethod.GET.backgroundColor,
            color: "#FFF",
            "& .MuiChip-icon, & .MuiChip-label, & .MuiSvgIcon-root": {
              color: "#FFF"
            }
          }
        }
      },
      {
        props: { colors: "methodPUT" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].httpMethod.PUT.backgroundColor,
            color: "#FFF",
            "& .MuiChip-icon, & .MuiChip-label, & .MuiSvgIcon-root": {
              color: "#FFF"
            }
          }
        }
      },
      {
        props: { colors: "methodDELETE" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].httpMethod.DELETE.backgroundColor,
            color: "#FFF",
            "& .MuiChip-icon, & .MuiChip-label, & .MuiSvgIcon-root": {
              color: "#FFF"
            }
          }
        }
      },
      {
        props: { colors: "methodPATCH" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].httpMethod.PATCH.backgroundColor,
            color: "#FFF",
            "& .MuiChip-icon, & .MuiChip-label, & .MuiSvgIcon-root": {
              color: "#FFF"
            }
          }
        }
      },
      {
        props: { colors: "blockEnabled" },
        style: {
          "&.MuiChip-root span.MuiChip-label": {
            color: theme[mode].blockEnabled.color
          },
          "&.active.MuiChip-root": {
            backgroundColor: theme[mode].blockEnabled.backgroundColor,
            "& .MuiChip-icon": {
              color: theme[mode].blockEnabled.color
            }
          }
        }
      },
      {
        props: { colors: "reportEnabled" },
        style: {
          "&.MuiChip-root span.MuiChip-label": {
            color: theme[mode].reportEnabled.color
          },
          "&.active.MuiChip-root": {
            backgroundColor: theme[mode].reportEnabled.backgroundColor,
            "& .MuiChip-icon": {
              color: theme[mode].reportEnabled.color
            }
          }
        }
      },
      {
        props: { colors: "modifyEnabled" },
        style: {
          "&.MuiChip-root span.MuiChip-label": {
            color: theme[mode].modifyEnabled.color
          },
          "&.active.MuiChip-root": {
            backgroundColor: theme[mode].modifyEnabled.backgroundColor,
            "& .MuiChip-icon": {
              color: theme[mode].modifyEnabled.color
            }
          }
        }
      },
      {
        props: { variant: "entityHeaderChip" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].entityHeaderChip.backgroundColor,
            padding: "5px 5px 5px 10px",
            height: "30px",
            "& span.MuiChip-label": {
              color: theme[mode].entityHeaderChip.color,
              fontSize: "14px",
              fontWeight: 500,
              padding: 0,
              "& > .MuiChip-root, & > .certificate-header-wrapper > .MuiChip-root": {
                backgroundColor: theme[mode].entityHeaderChip.countBackgroundColor,
                borderRadius: "3px",
                padding: "3px 7px",
                height: "20px",
                minWidth: "21px",
                "& > span.MuiChip-label": {
                  fontSize: "12px"
                }
              }
            }
          }
        }
      },
      {
        props: { variant: "entityHeaderChip", type: "transparent" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: "transparent",
            "& span.MuiChip-label": {
              "& > .MuiChip-root , & > .certificate-header-wrapper > .MuiChip-root": {
                backgroundColor: theme[mode].entityHeaderChip.backgroundColor,
                "& > span.MuiChip-label": {
                  color: theme[mode].entityHeaderChip.countColor
                }
              }
            }
          }
        }
      },
      {
        props: { colors: "clickableChip" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].clickableChip.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].clickableChip.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].clickableChip.color
            }
          }
        }
      },
      {
        props: { colors: "CWAF" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].CWAF.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].CWAF.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].CWAF.color
            }
          }
        }
      },
      {
        props: { colors: "CDDOS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].CDDOS.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].CDDOS.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].CDDOS.color
            }
          }
        }
      },
      {
        props: { colors: "CBOT" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].CBOT.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].CBOT.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].CBOT.color
            }
          }
        }
      },
      {
        props: { variant: "beta" },
        style: {
          "&.MuiChip-root": {
            padding: "3px 7px 3px 7px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14px"
            }
          }
        }
      },
      {
        props: { variant: "outOfPlan" },
        style: {
          "&.MuiChip-root": {
            padding: "2px 4px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "16px"
            },
            "& svg": {
              width: "16px",
              marginLeft: 0,
              marginRight: "3px",
              position: "relative",
              top: "-1px"
            }
          }
        }
      },
      {
        props: { colors: "beta" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].beta.color,
            background: theme[mode].beta.background
          }
        }
      },
      {
        props: { colors: "outOfPlan" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].outOfPlan.color,
            background: theme[mode].outOfPlan.backgroundColor
          }
        }
      },
      {
        props: { colors: "spProtectionHeader" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].spProtectionHeader.color,
            background: theme[mode].spProtectionHeader.backgroundColor,
            "&.Mui-disabled": {
              opacity: 0.5
            }
          }
        }
      },
      {
        props: { size: "small" },
        style: {
          "&.MuiChip-root": {
            height: 20,
            fontSize: 12
          }
        }
      },
      {
        props: { size: "tall" },
        style: {
          "&.MuiChip-root": {
            height: 30
          }
        }
      },
      {
        props: { variant: "bgp" },
        style: {
          "&.MuiChip-root": {
            minWidth: 27,
            "&:hover": {
              color: theme[mode].bgp.hover.color,
              backgroundColor: theme[mode].bgp.hover.background
            }
          },
          "& .MuiChip-label": {
            paddingLeft: "5px",
            paddingRight: "5px",
            fontSize: "10px",
            fontWeight: 400
          }
        }
      },
      {
        props: { variant: "carouselIndexIndicator" },
        style: {
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          border: `1px solid ${theme[mode].carouselIndexIndicator.color}`,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme[mode].carouselIndexIndicator.hoverColor,
            cursor: "pointer"
          }
        }
      },
      {
        props: { variant: "carouselIndexIndicatorSelected" },
        style: {
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          border: `1px solid ${theme[mode].carouselIndexIndicator.selectedColor}`,
          backgroundColor: theme[mode].carouselIndexIndicator.selectedColor,
          "&:hover": {
            backgroundColor: theme[mode].carouselIndexIndicator.selectedColor,
            cursor: "pointer"
          }
        }
      },
      {
        props: { variant: "POC_ACCOUNT_STATUS" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.pending
          }
        }
      },
      {
        props: { variant: "DEMO_ACCOUNT_STATUS" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.demo
          }
        }
      },
      {
        props: { variant: "ACTIVE_ACCOUNT_STATUS" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].status.active
          }
        }
      },
      {
        props: { variant: "ENVIRONMENT_TYPE_STAGING" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].chips.environmentStatus.staging.color,
            background: theme[mode].chips.environmentStatus.staging.backgroundColor
          }
        }
      },
      {
        props: { variant: "ENVIRONMENT_TYPE_PRODUCTION" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].chips.environmentStatus.production.color,
            background: theme[mode].chips.environmentStatus.production.backgroundColor
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_BYPASS" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.bypass,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.bypass.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_GEO" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.geo,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.geo.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_CONNECTIONLIMIT" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.connectionLimit,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.connectionLimit.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_ACL" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.acl,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.acl.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_EAAF" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.eaaf,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.eaaf.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "FWAAS_TYPESELECTOR_SIGNATURE" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].fwaasRuleType.common,
            ...theme[mode].fwaasRuleType.signature,
            "& .MuiChip-label": {
              ...theme[mode].fwaasRuleType.common.label
            },
            "&:hover, &.showBorder, &.selected": {
              ...theme[mode].fwaasRuleType.common.hover,
              ...theme[mode].fwaasRuleType.signature.hover,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.common.hover.label
              }
            },
            "&.Mui-disabled": {
              ...theme[mode].fwaasRuleType.defaultDisabled,
              "& .MuiChip-label": {
                ...theme[mode].fwaasRuleType.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "SELECT_RULE_TYPE" },
        style: {
          "&.MuiChip-root": {
            ...theme.commonChip,
            ...theme[mode].chips.selectPlan.root,
            ...theme[mode].fwaasRuleType.common,
            "&:hover": {
              ...theme[mode].chips.selectPlan.hover
            },
            "&.Mui-disabled": {
              ...theme[mode].chips.defaultDisabled,
              border: "none",
              "& .MuiChip-label": {
                ...theme[mode].chips.defaultDisabled.label
              }
            }
          }
        }
      },
      {
        props: { variant: "services" },
        style: {
          "&.MuiChip-root": {
            padding: "6px 10px 6px 6px",
            borderRadius: "8px",
            justifyContent: "flex-start",
            "&:hover": {
              color: "inherit"
            },
            "& .MuiChip-label": {
              padding: 0
            },
            "& svg": {
              marginLeft: 0
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "default" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.default.backgroundColor,
            border: `1px solid ${theme[mode].services.default.borderColor}`,
            color: "inherit",
            "& .MuiChip-label": {
              color: theme[mode].services.default.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "CWAF" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.CWAF.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].services.CWAF.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].services.CWAF.icon.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "CDDOS" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.CDDOS.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].services.CDDOS.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].services.CDDOS.icon.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "CBOT" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.CBOT.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].services.CBOT.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].services.CBOT.icon.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "SYSTEM" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.SYSTEM.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].services.SYSTEM.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].services.SYSTEM.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "CTRC" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].services.CTRC.backgroundColor,
            "& span.MuiChip-label": {
              color: theme[mode].services.CTRC.color
            },
            "& .MuiChip-icon": {
              color: theme[mode].services.CTRC.color
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "apiSecurity" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: "var(--services-api-bg)",
            "& span.MuiChip-label": {
              color: "var(--text-primary)"
            }
          }
        }
      },
      {
        props: { variant: "services", colors: "agenticAi" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: "var(--services-agentic-bg)",
            "& span.MuiChip-label": {
              color: "var(--text-primary)"
            }
          }
        }
      },
      {
        props: { variant: "counter" },
        style: {
          "&.MuiChip-root": {
            ...theme[mode].counter,
            height: "unset",
            padding: "1px 7px",

            "& .MuiChip-label": {
              paddingLeft: "unset",
              paddingRight: "unset"
            }
          }
        }
      },
      {
        props: { variant: "GA_badge" },
        style: {
          "&.MuiChip-root": {
            width: "29px",
            height: "20px",
            color: "#EEEEEE",
            background:
              "linear-gradient(43.6deg, #BD1E35 21.25%, #8C3D5B 38.02%, #784A6A 51.49%, #61597C 61.96%, #556086 71.32%, #38729B 85.91%)",
            "& .MuiChip-label": {
              paddingRight: 0,
              paddingLeft: 0,
              fontWeight: 500,
              fontSize: "11px",
              lineHeight: "13px"
            }
          }
        }
      },
      {
        props: { variant: "disabledTab" },
        style: {
          "&.MuiChip-root": {
            padding: "3px 6px 3px 6px",
            height: "unset",
            borderRadius: "2.25px",
            marginBottom: "10px",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14px"
            },
            "& .MuiChip-icon": {
              width: "fit-content",
              marginLeft: 0,
              marginRight: "4px"
            }
          }
        }
      },
      {
        props: { variant: "freeTrial" },
        style: {
          "&.MuiChip-root": {
            height: "20px",
            color: theme[mode].freeTrial.color,
            background: theme[mode].freeTrial.background,
            border: theme[mode].freeTrial.border,
            "& .MuiChip-icon": {
              marginLeft: "5px"
            },
            "& svg": {
              height: 12,
              width: 12
            },
            "&.NA": {
              color: theme[mode].freeTrial.NA.color,
              background: theme[mode].freeTrial.NA.background,
              border: theme[mode].freeTrial.NA.border,
              "&:hover": {
                cursor: "pointer"
              },
              "&:active": {
                border: "none"
              }
            },
            "&.PENDING": {
              color: theme[mode].freeTrial.PENDING.color,
              background: theme[mode].freeTrial.PENDING.background,
              border: theme[mode].freeTrial.PENDING.border,
              "&:hover": {
                cursor: "default",
                background: theme[mode].freeTrial.PENDING.background
              }
            },
            "&.ENABLED": {
              color: theme[mode].freeTrial.ENABLED.color,
              background: theme[mode].freeTrial.ENABLED.background,
              border: theme[mode].freeTrial.ENABLED.border,
              "&:hover": {
                cursor: "default",
                background: theme[mode].freeTrial.ENABLED.background
              }
            },
            "&.EXPIRED": {
              "&:hover": {
                cursor: "default",
                background: theme[mode].freeTrial.DISABLED.background
              },
              "&.Mui-disabled": {
                color: theme[mode].freeTrial.DISABLED.color,
                background: theme[mode].freeTrial.DISABLED.background,
                border: theme[mode].freeTrial.DISABLED.border,
                opacity: 1,
                "& svg": {
                  color: theme[mode].freeTrial.DISABLED.color
                }
              }
            },
            "&:hover": {
              background: theme[mode].freeTrial.hover.background
            }
          },
          "&.selected": {
            "&.MuiChip-root": {
              background: theme[mode].freeTrial.selected.background,
              color: theme[mode].freeTrial.selected.color,
              border: "none"
            }
          },
          "& .MuiChip-label": {
            fontSize: "11px",
            fontWeight: 400,
            lineHeight: "14px",
            paddingRight: "5px",
            paddingTop: "1px"
          }
        }
      },
      {
        props: { variant: "multipleTrials" },
        style: {
          "&.MuiChip-root": {
            height: 30,
            width: "max-content",
            backgroundColor: theme[mode].multipleTrials.backgroundColor,
            color: theme[mode].multipleTrials.color,
            "&:hover": {
              boxShadow: theme[mode].multipleTrials.boxShadow
            }
          }
        }
      },
      {
        props: { variant: "attackSummary" },
        style: {
          "&.MuiChip-root": {
            // width: "150px",
            height: "36px",
            justifyContent: "center",
            padding: "5px 9px",
            borderRadius: "4px",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "25px",
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: 8,
              width: 18,
              color: "inherit"
            },
            "&.INDICATOR-ACTIVE": {
              background: theme[mode].attackManagement.attackSummary.indicator.active.background,
              color: theme[mode].attackManagement.attackSummary.indicator.active.color,
              cursor: "pointer"
            },
            "&.INDICATOR-COOLDOWN": {
              background: theme[mode].attackManagement.attackSummary.indicator.cooldown.background,
              color: theme[mode].attackManagement.attackSummary.indicator.cooldown.color,
              cursor: "pointer"
            },
            "&.INDICATOR-COMPLETED": {
              background: theme[mode].attackManagement.attackSummary.indicator.completed.background,
              color: theme[mode].attackManagement.attackSummary.indicator.completed.color
            },
            "&.SUMMARY-ACTIVE": {
              background: theme[mode].attackManagement.attackSummary.summaryItem.active.background,
              color: theme[mode].attackManagement.attackSummary.summaryItem.active.color
            },
            "&.SUMMARY-COOLDOWN": {
              background: theme[mode].attackManagement.attackSummary.summaryItem.cooldown.background,
              color: theme[mode].attackManagement.attackSummary.summaryItem.cooldown.color
            },
            "&.SUMMARY-ON_CLOUD": {
              background: theme[mode].attackManagement.assetSummaryItem.onCloud.background,
              color: theme[mode].attackManagement.assetSummaryItem.onCloud.color
            },
            "&.SUMMARY-OFF_CLOUD": {
              background: theme[mode].attackManagement.assetSummaryItem.offCloud.background,
              color: theme[mode].attackManagement.assetSummaryItem.offCloud.color
            },
            "&.CONNECTION-CPE": {
              background: theme[mode].attackManagement.connectionsSummaryItem.cpe.background,
              color: theme[mode].attackManagement.connectionsSummaryItem.cpe.color
            },
            "&.CONNECTION-GRE": {
              background: theme[mode].attackManagement.connectionsSummaryItem.gre.background,
              color: theme[mode].attackManagement.connectionsSummaryItem.gre.color
            },
            "&.CONNECTION-CROSSCONNECT": {
              background: theme[mode].attackManagement.connectionsSummaryItem.crossconnect.background,
              color: theme[mode].attackManagement.connectionsSummaryItem.crossconnect.color
            },
            "& .MuiChip-label": {
              paddingRight: 0,
              paddingLeft: 0
            }
          }
        }
      },
      {
        props: { variant: "attackIndicatorBanner" },
        style: {
          "&.MuiChip-root": {
            border: "1px solid transparent",
            height: "30px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "21px",
            padding: "8px",
            cursor: "pointer",
            boxShadow: "0px 0px 8px 0px transparent",
            overflow: "visible",
            "& .MuiChip-label": {
              paddingLeft: "4px",
              paddingRight: "0px",
              paddingTop: "1px",
              whiteSpace: "nowrap",
              overflow: "visible",
              textOverflow: "unset"
            },
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: 0
            },
            "&.ACTIVE": {
              width: "115px",
              background: theme[mode].attackManagement.attackSummary.indicator.active.background,
              color: theme[mode].attackManagement.attackSummary.indicator.active.color,
              "&:hover": {
                background: theme[mode].attackManagement.attackSummary.indicator.active.hoverBackground
              }
            },
            "&.COOLDOWN": {
              width: "99px",
              background: theme[mode].attackManagement.attackSummary.indicator.cooldown.background,
              color: theme[mode].attackManagement.attackSummary.indicator.cooldown.color,
              "&:hover": {
                background: theme[mode].attackManagement.attackSummary.indicator.cooldown.hoverBackground
              }
            }
          }
        }
      },
      {
        props: { variant: "securityAnalysisRedirect" },
        style: {
          "&.ButtonStyle, &.ChipStyle": {
            backgroundColor: "#000000",

            "&:hover": {
              border: theme[mode].securityAnalysisRedirect.hover.border
            }
          },
          "&.ButtonStyle": {
            border: theme[mode].securityAnalysisRedirect.buttonBorder,
            "&:hover": {
              boxShadow: theme[mode].securityAnalysisRedirect.hover.buttonBoxShadow
            }
          },
          "&.ChipStyle": {
            border: theme[mode].securityAnalysisRedirect.chipBorder,
            "&:hover": {
              boxShadow: theme[mode].securityAnalysisRedirect.hover.chipBoxShadow
            }
          },
          "&.Mui-disabled": {
            backgroundColor: theme[mode].securityAnalysisRedirect.disabled.backgroundColor,
            opacity: "initial",
            border: "1px solid transparent",
            "& .MuiChip-icon": {
              color: theme[mode].securityAnalysisRedirect.disabled.color
            }
          }
        }
      },
      {
        props: { variant: "fatRoundedChip" },
        style: {
          "&.MuiChip-root": {
            height: "30px",
            width: "144px",
            borderRadius: "16px",
            "&:hover.MuiChip-clickable:not(.Mui-disabled)": {
              boxShadow: theme[mode].fatRoundedChip.hover.boxShadow
            },
            "&.Mui-disabled": {
              background: theme[mode].fatRoundedChip.disabled.background,
              color: theme[mode].fatRoundedChip.disabled.color,
              opacity: "initial"
            }
          }
        }
      },
      {
        props: { colors: "ENABLE" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "ENABLED" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "ALLOW" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].iceBlue.color,
            color: theme[mode].oceanBlue.color
          }
        }
      },
      {
        props: { colors: "BLOCK" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "RATE LIMIT" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].ivoryWhite.color,
            color: theme[mode].deepOrange.color
          }
        }
      },
      {
        props: { colors: "BLOCK_AND_REPORT" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "ENABLE_AND_REPORT" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "ACTIVE" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].grassGreen.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "REPORT_ONLY" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].fatRoundedChip.plumpPurple.background,
            color: theme[mode].fatRoundedChip.plumpPurple.color
          }
        }
      },
      {
        props: { colors: "CRYPTO_CHALLENGE" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].twilightBlue.color,
            color: theme[mode].deepCerulean.color
          }
        }
      },
      {
        props: { colors: "PASSIVE" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].fatRoundedChip.plumpPurple.background,
            color: theme[mode].fatRoundedChip.plumpPurple.color
          }
        }
      },
      {
        props: { colors: "DISABLE" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].fatRoundedChip.grey.background,
            color: theme[mode].fatRoundedChip.grey.color
          }
        }
      },
      {
        props: { colors: "DISABLED" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].fatRoundedChip.grey.background,
            color: theme[mode].fatRoundedChip.grey.color
          }
        }
      },
      {
        props: { colors: "CAPTCHA" },
        style: {
          "&.MuiChip-root": {
            background: theme[mode].fatRoundedChip.orange.background,
            color: theme[mode].fatRoundedChip.orange.color
          }
        }
      },
      {
        props: { variant: "noDataAvailable" },
        style: {
          fontSize: 12,
          fontWeight: 400,
          color: theme[mode].noDataAvailable.color,
          backgroundColor: theme[mode].noDataAvailable.backgroundColor,
          "&.MuiChip-root": {
            "& svg": {
              width: "auto"
            }
          },
          "&:hover": {
            color: theme[mode].noDataAvailable.color,
            backgroundColor: theme[mode].noDataAvailable.backgroundColor
          }
        }
      },
      {
        props: { variant: "idpRelatedAppChip" },
        style: {
          backgroundColor: theme[mode].idpRelatedAppChip.backgroundColor,
          border: ` 1px solid ${theme[mode].idpRelatedAppChip.borderColor}`,
          borderRadius: "4px",
          color: theme[mode].idpRelatedAppChip.color,
          fontSize: "10px",
          fontWeight: 500
        }
      },
      {
        props: { variant: "idpInheritChip" },
        style: {
          backgroundColor: theme[mode].idpInheritChip.backgroundColor
        }
      },
      {
        props: { variant: "securityPolicyStatus" },
        style: {
          "&.MuiChip-root": {
            height: "24px",
            width: "97px",
            "&:active": {
              boxShadow: "none"
            },
            "& .MuiChip-label": {
              paddingLeft: 0,
              paddingRight: 0
            },
            "&.active": {
              background: theme[mode].securityPolicyStatus.active.background,
              color: theme[mode].securityPolicyStatus.active.color
            },
            "&.notActive": {
              background: theme[mode].securityPolicyStatus.notActive.background,
              color: theme[mode].securityPolicyStatus.notActive.color
            },
            "&.progress": {
              background: theme[mode].securityPolicyStatus.progress.background,
              color: theme[mode].securityPolicyStatus.progress.color
            },
            "&.pendingApply": {
              background: theme[mode].securityPolicyStatus.pendingApply.background,
              color: theme[mode].securityPolicyStatus.pendingApply.color
            },
            "&:not(.pendingApply)": {
              cursor: "default"
            },
            "&.inherited": {
              background: theme[mode].securityPolicyStatus.inherited.background,
              color: theme[mode].securityPolicyStatus.inherited.color
            },
            "&:hover": {
              boxShadow: "0px 0px 5px 0px rgba(191, 194, 201, 1)"
            }
          }
        }
      },
      {
        props: { variant: "new" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].deepCerulean.color,
            background: theme[mode].mabel.color,
            padding: "4px 7px 2px 7px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "14px"
            }
          }
        }
      },
      {
        props: { type: "filterChip" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: "var(--background-natural)",
            color: "var(--text-primary)",
            maxHeight: 150
          }
        }
      },
      {
        props: { variant: "securityAnalysis" },
        style: {
          "&.MuiChip-root": {
            width: "auto",
            height: "40px",
            justifyContent: "center",
            paddingX: "10px",
            borderRadius: "4px",
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: "25px",
            "&.FULLY-MITIGATED": {
              background: theme[mode].securityAnalysis.fullyMitigated.background,
              color: theme[mode].securityAnalysis.fullyMitigated.color
            }
          }
        }
      },
      {
        props: { variant: "httpMethod" },
        style: {
          "&.MuiChip-root": {
            "& .MuiChip-label": {
              color: "#FFFFFF"
            },
            "&.GET": {
              background: theme[mode].httpMethod.GET.backgroundColor
            },
            "&.POST": {
              background: theme[mode].httpMethod.POST.backgroundColor
            },
            "&.PUT": {
              background: theme[mode].httpMethod.PUT.backgroundColor
            },
            "&.PATCH": {
              background: theme[mode].httpMethod.PATCH.backgroundColor
            },
            "&.DELETE": {
              background: theme[mode].httpMethod.DELETE.backgroundColor
            },
            "&.OPTIONS": {
              background: theme[mode].httpMethod.OPTIONS.backgroundColor
            },
            "&.TRACE": {
              background: theme[mode].httpMethod.TRACE.backgroundColor
            },
            "&.HEAD": {
              background: theme[mode].httpMethod.HEAD.backgroundColor
            },
            "&.PROPFIND": {
              background: theme[mode].httpMethod.PROPFIND.backgroundColor
            }
          }
        }
      },
      {
        props: { variant: "statuses" },
        style: {
          "&.MuiChip-root": {
            "&.ACTIVE": {
              background: theme[mode].statuses.ACTIVE.background,
              color: theme[mode].statuses.ACTIVE.color
            },
            "&.INVALID,&.INVALID_CHALLENGE": {
              background: theme[mode].statuses.INVALID.background,
              color: theme[mode].statuses.INVALID.color
            },
            "&.RENEW_FAILED,&.RENEW_FAILED_DISABLED": {
              background: theme[mode].statuses.PENDING_RENEW.background,
              color: theme[mode].statuses.PENDING_RENEW.color
            },
            "&.PENDING_DISABLED": {
              background: theme[mode].statuses.PENDING_DISABLED.background,
              color: theme[mode].statuses.PENDING_DISABLED.color
            },
            "&.PENDING,&.PENDING_IN_PROGRESS,&.PENDING_VALIDATION_FAILED": {
              background: theme[mode].statuses.PENDING.background,
              color: theme[mode].statuses.PENDING.color
            }
          }
        }
      },
      {
        props: { variant: "outlined" },
        style: {
          backgroundColor: "transparent",
          color: "inherit",
          borderRadius: 8
        }
      },
      {
        props: { variant: "outlined", colors: "blueish" },
        style: {
          color: theme[mode].blueish.color,
          borderColor: theme[mode].blueish.borderColor,
          "&:hover, &.MuiChip-clickable:hover": {
            color: theme[mode].blueish.color,
            backgroundColor: theme[mode].blueish.hover.backgroundColor
          }
        }
      },
      {
        props: { colors: "orange" },
        style: {
          color: theme[mode].orange.color,
          backgroundColor: theme[mode].orange.backgroundColor,
          "&:hover, &.MuiChip-clickable:hover": {
            color: theme[mode].orange.color,
            backgroundColor: theme[mode].orange.backgroundColor
          }
        }
      },
      {
        props: { colors: "lightOrange" },
        style: {
          color: theme[mode].lightOrange.color,
          background: theme[mode].lightOrange.background,
          "&:hover, &.MuiChip-root:hover": {
            boxShadow: `0px 0px 6px ${theme[mode].lightOrange.shadowColor}`,
            color: theme[mode].lightOrange.color
          }
        }
      },
      {
        props: { variant: "mitigationRecommendationsChip" },
        style: {
          backgroundColor: theme[mode].gray.backgroundColor,
          color: theme[mode].textPrimary.color,
          "& .MuiChip-icon": {
            color: theme[mode].textPrimary.color
          },
          "&:hover": {
            color: theme[mode].textPrimary.color
          }
        }
      },
      {
        props: { colors: "catalinaBlue" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].catalinaBlue.color,
            background: theme[mode].hawkesBlue.color
          }
        }
      },
      {
        props: { sizes: "extraSmall" },
        style: {
          "&.MuiChip-root": {
            padding: "1px 4px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "12px"
            }
          }
        }
      },
      {
        props: { sizes: "small" },
        style: {
          "&.MuiChip-root": {
            padding: "2.5px 4px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "11px",
              fontWeight: 400,
              lineHeight: "13px"
            }
          }
        }
      },
      {
        props: { sizes: "medium" },
        style: {
          "&.MuiChip-root": {
            padding: "3px 8px",
            height: "unset",
            "& .MuiChip-label": {
              padding: 0,
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14px"
            }
          }
        }
      },
      {
        props: { colors: "sail" },
        style: {
          "&.active.MuiChip-root": {
            backgroundColor: theme[mode].sail.color,
            "& .MuiChip-icon": {
              color: theme[mode].darkBlue.color
            }
          },
          "&.MuiChip-root .MuiChip-label": {
            color: theme[mode].darkBlue.color
          }
        }
      },
      {
        props: { colors: "lightGreen" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].londonGray.color,
            color: theme[mode].lightGreen.color
          }
        }
      },
      {
        props: { colors: "blockRed" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].londonGray.color,
            color: theme[mode].torchRed.color
          }
        }
      },
      {
        props: { colors: "brown" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].brown.color,
            backgroundColor: theme[mode].peachOrange.color
          }
        }
      },
      {
        props: { colors: "forestGreen" },
        style: {
          "&.MuiChip-root:not(.Mui-disabled)": {
            color: `${theme[mode].forestGreen.color}`,
            border: `1px solid ${theme[mode].forestGreen.color}`,
            "&:hover": {
              background: `${theme[mode].grassGreen.color}`
            },
            "&.selected": {
              background: `${theme[mode].forestGreen.color}`,
              color: "white"
            }
          }
        }
      },
      {
        props: { colors: "congressBlue" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].congressBlue.color,
            backgroundColor: theme[mode].pattensBlue.color
          }
        }
      },
      {
        props: { colors: "failureRed" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].bloodRed.color,
            backgroundColor: theme[mode].fairPink.color
          }
        }
      },
      {
        props: { colors: "success" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].lightGreen.color,
            backgroundColor: theme[mode].grassGreen.color
          }
        }
      },
      {
        props: { colors: "negroni" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].tenn.color,
            backgroundColor: theme[mode].negroni.color
          }
        }
      },
      {
        props: { colors: "deepCerulean" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].deepCerulean.color,
            background: theme[mode].mabel.color
          }
        }
      },
      {
        props: { colors: "eggSour" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].eggSour.color,
            background: theme[mode].cola.color,
            "& .MuiChip-label": {
              color: theme[mode].eggSour.color
            },
            "&:hover": { borderColor: theme[mode].eggSour.color },
            "&.opened": { borderColor: theme[mode].eggSour.color }
          }
        }
      },
      {
        props: { colors: "mauve" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].mauve.color,
            background: theme[mode].violentViolet.color,

            "& .MuiChip-label": {
              color: theme[mode].mauve.color
            },
            "&:hover": { borderColor: theme[mode].mauve.color },
            "&.opened": { borderColor: theme[mode].mauve.color }
          }
        }
      },
      {
        props: { variant: "HTTPMETHOD_DELETE" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.DELETE.backgroundColor
          }
        }
      },
      {
        props: { variant: "HTTPMETHOD_PUT" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.PUT.backgroundColor
          }
        }
      },
      {
        props: { variant: "HTTPMETHOD_GET" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.GET.backgroundColor
          }
        }
      },
      {
        props: { variant: "HTTPMETHOD_POST" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.POST.backgroundColor
          }
        }
      },
      {
        props: { variant: "HTTPMETHOD_PATCH" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.PATCH.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.HTTPMETHOD_DELETE" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.DELETE.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.HTTPMETHOD_PUT" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.PUT.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.HTTPMETHOD_GET" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.GET.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.HTTPMETHOD_POST" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.POST.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.HTTPMETHOD_PATCH" },
        style: {
          "&.MuiChip-root": {
            color: "#FFFFFF",
            background: theme[mode].httpMethod.PATCH.backgroundColor
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.BLOCKED_FALSE" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].forestGreen.color,
            background: theme[mode].grassGreen.color
          }
        }
      },
      {
        props: { variant: "RAWDATACOLLAPSED.BLOCKED_TRUE" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].bloodRed.color,
            background: theme[mode].yetAnotherStupidRedColor.color
          }
        }
      },
      {
        props: { colors: "BOTM_BYPASS_STATUS_SUCCESS" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].lightGreen.color,
            backgroundColor: theme[mode].grassGreen.color
          }
        }
      },
      {
        props: { colors: "BOTM_BYPASS_STATUS_FAIL" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].torchRed.color,
            backgroundColor: theme[mode].fairPink.color
          }
        }
      },
      {
        props: { colors: "BOTM_BYPASS_STATUS_IN_PROCESS" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].tenn.color,
            backgroundColor: theme[mode].negroni.color
          }
        }
      },
      {
        props: { hover: "shadow" },
        style: {
          "&.MuiChip-root": {
            "&:hover": {
              boxShadow: "0px 0px 5px 0px #BFC2C9"
            }
          }
        }
      },
      {
        props: { colors: "YET_ANOTHER_STUPID_RED_COLOR" },
        style: {
          "&.MuiChip-root": {
            color: theme[mode].bloodRed.color,
            backgroundColor: theme[mode].yetAnotherStupidRedColor.color
          }
        }
      },
      {
        props: { variant: "activeChip" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].activeChip.backgroundColor,
            color: theme[mode].activeChip.color
          }
        }
      },
      {
        props: { colors: "warningBorder" },
        style: {
          "&.MuiChip-root": {
            "&.showBorder": {
              borderColor: theme[mode].warning.color
            },
            "&:hover": {
              borderColor: theme[mode].warning.color
            }
          }
        }
      },
      {
        props: { colors: "addonChip" },
        style: {
          "&.MuiChip-root": {
            backgroundColor: theme[mode].addonChip.backgroundColor,
            color: theme[mode].addonChip.color
          }
        }
      }
    ]
  };
};

export default MuiChip;
