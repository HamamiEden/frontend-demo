const MuiPagination = mode => {
  return {
    styleOverrides: {
      root: {
        "& .MuiPaginationItem-root": {
          height: "30px",
          minWidth: "30px"
        },
        "& .MuiPaginationItem-previousNext": {
          color: "var(--icon-default)",
          "&.Mui-disabled": {
            color: "var(--icon-disabled)",
            opacity: "1"
          },
          "&:hover": {
            color: "var(--text-enhance)",
            backgroundColor: "var( --icon-bg-hover)",
          },
        },
        "& .MuiPaginationItem-firstLast": {
          color: "var(--icon-default)",
          "&.Mui-disabled": {
            color: "var(--icon-disabled)",
            opacity: "1"
          },
          "&:hover": {
             color: "var(--text-enhance)",
            backgroundColor: "var( --icon-bg-hover)",
          },
        },
        "& .MuiPaginationItem-page": {
          color: "var(--icon-default)",
          "&.Mui-selected": {
            color: "var(--text-enhance)",
            backgroundColor: "var( --icon-bg-hover)",
            "&:hover": {
              color: "var(--text-enhance)",
              backgroundColor: "var( --icon-bg-hover)",
            },
          },
          "&:hover": {
            color: "var(--text-enhance)",
            backgroundColor: "var( --icon-bg-hover)",
          },
        },
      },
    },
  };
};

export default MuiPagination;
