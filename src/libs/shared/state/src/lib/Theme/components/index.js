import MuiAccordion from "./MuiAccordion";
import MuiAccordionActions from "./MuiAccordionActions";
import MuiAccordionDetails from "./MuiAccordionDetails";
import MuiAccordionSummary from "./MuiAccordionSummary";
import MuiAlert from "./MuiAlert";
import MuiAutocomplete from "./MuiAutocomplete";
import MuiAvatar from "./MuiAvatar";
import MuiBadge from "./MuiBadge";
import MuiButton from "./MuiButton";
import MuiCalendarPicker from "./MuiCalendarPicker";
import MuiCard from "./MuiCard";
import MuiCardContent from "./MuiCardContent";
import MuiCardHeader from "./MuiCardHeader";
import MuiCheckbox from "./MuiCheckbox";
import MuiChip from "./MuiChip";
import MuiCircularProgress from "./MuiCircularProgress";
import MuiCssBaseline from "./MuiCssBaseline";
import MuiDialog from "./MuiDialog";
//import MuiBackdrop from "./MuiBackdrop";
import MuiDialogActions from "./MuiDialogActions";
import MuiDialogContent from "./MuiDialogContent";
import MuiDialogContentText from "./MuiDialogContentText";
import MuiDialogTitle from "./MuiDialogTitle";
import MuiDivider from "./MuiDivider";
import MuiDrawer from "./MuiDrawer";
import MuiFormControl from "./MuiFormControl";
import MuiFormControlLabel from "./MuiFormControlLabel";
import MuiFormHelperText from "./MuiFormHelperText";
import MuiGrid from "./MuiGrid";
import MuiGrid2 from "./MuiGrid2";
import MuiIconButton from "./MuiIconButton";
import MuiInputLabel from "./MuiInputLabel";
import MuiLinearProgress from "./MuiLinearProgress";
import MuiLink from "./MuiLink";
import MuiList from "./MuiList";
import MuiListItem from "./MuiListItem";
import MuiListItemButton from "./MuiListItemButton";
import MuiListItemIcon from "./MuiListItemIcon";
import MuiListItemText from "./MuiListItemText";
import MuiMenu from "./MuiMenu";
import MuiMenuItem from "./MuiMenuItem";
import MuiOutlinedInput from "./MuiOutlinedInput";
import MuiPagination from "./MuiPagination";
import MuiPaper from "./MuiPaper";
import MuiPickersDay from "./MuiPickersDay";
import MuiPopover from "./MuiPopover";
import MuiRadio from "./MuiRadio";
import MuiSwitch from "./MuiSwitch";
import MuiTab from "./MuiTab";
import MuiTableCell from "./MuiTableCell";
import MuiTableContainer from "./MuiTableContainer";
import MuiTableRow from "./MuiTableRow";
import MuiTabs from "./MuiTabs";
import MuiToggleButton from "./MuiToggleButton";
import MuiToggleButtonGroup from "./MuiToggleButtonGroup";
import MuiToolbar from "./MuiToolbar";
import MuiTooltip from "./MuiTooltip";
import MuiTypography from "./MuiTypography";
import MuiYearPicker from "./MuiYearPicker";

const components = {
  MuiCssBaseline,
  MuiOutlinedInput,
  MuiAvatar,
  MuiAutocomplete,
  MuiListItem,
  MuiTableRow,
  MuiTableCell,
  MuiPagination,
  MuiMenuItem,
  MuiPaper,
  MuiToolbar,
  MuiButton,
  MuiIconButton,
  MuiTableContainer,
  MuiTab,
  MuiTabs,
  MuiFormControl,
  MuiFormControlLabel,
  MuiCard,
  MuiCardContent,
  MuiCardHeader,
  MuiCheckbox,
  MuiDivider,
  MuiInputLabel,
  MuiTypography,
  MuiGrid,
  MuiGrid2,
  MuiToggleButtonGroup,
  MuiToggleButton,
  MuiRadio,
  MuiDialog,
  MuiAlert,
  MuiDialogContentText,
  MuiChip,
  MuiTooltip,
  MuiSwitch,
  MuiMenu,
  MuiListItemIcon,
  MuiDialogTitle,
  MuiDialogContent,
  //MuiBackdrop,
  MuiDialogActions,
  MuiFormHelperText,
  MuiDrawer,
  MuiListItemText,
  MuiList,
  MuiPickersDay,
  MuiCalendarPicker,
  MuiYearPicker,
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionActions,
  MuiAccordionDetails,
  MuiBadge,
  MuiListItemButton,
  MuiPopover,
  MuiLink,
  MuiLinearProgress,
  MuiCircularProgress
};

const muiComponents = mode => {
  let componentsObject = {};
  Object.entries(components).forEach(entery => {
    componentsObject[entery[0]] = entery[1](mode);
  });
  return componentsObject;
};

export default muiComponents;
