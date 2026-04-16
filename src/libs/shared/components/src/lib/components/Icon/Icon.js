import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Announcement from "@mui/icons-material/Announcement";
import Apartment from "@mui/icons-material/Apartment";
import BookOutlined from "@mui/icons-material/BookOutlined";
import Business from "@mui/icons-material/Business";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineOutlined from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import Close from "@mui/icons-material/Close";
import CloudOff from "@mui/icons-material/CloudOff";
import CloudQueue from "@mui/icons-material/CloudQueue";
import CollectionsBookmarkOutlined from "@mui/icons-material/CollectionsBookmarkOutlined";
import Computer from "@mui/icons-material/Computer";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import DeveloperBoard from "@mui/icons-material/DeveloperBoard";
import Directions from "@mui/icons-material/Directions";
import DoneAll from "@mui/icons-material/DoneAll";
import DynamicFeed from "@mui/icons-material/DynamicFeed";
import DynamicFeedOutlined from "@mui/icons-material/DynamicFeedOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Error from "@mui/icons-material/Error";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Favorite from "@mui/icons-material/Favorite";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import FilterList from "@mui/icons-material/FilterList";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import GetApp from "@mui/icons-material/GetApp";
import Help from "@mui/icons-material/Help";
import HighlightOff from "@mui/icons-material/HighlightOff";
import Https from "@mui/icons-material/Https";
import Info from "@mui/icons-material/Info";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import LaunchIcon from "@mui/icons-material/Launch";
import LibraryAddOutlined from "@mui/icons-material/LibraryAddOutlined";
import List from "@mui/icons-material/List";
import Memory from "@mui/icons-material/Memory";
import MoreVert from "@mui/icons-material/MoreVert";
import NetworkCheck from "@mui/icons-material/NetworkCheck";
import NotificationImportant from "@mui/icons-material/NotificationImportant";
import Notifications from "@mui/icons-material/Notifications";
import OfflineBolt from "@mui/icons-material/OfflineBolt";
import People from "@mui/icons-material/People";
import PlayCircleFilled from "@mui/icons-material/PlayCircleFilled";
import Search from "@mui/icons-material/Search";
import Security from "@mui/icons-material/Security";
import SouthIcon from "@mui/icons-material/South";
import Star from "@mui/icons-material/Star";
import SyncIcon from "@mui/icons-material/Sync";
import Warning from "@mui/icons-material/Warning";
import { Box } from "@mui/material";
import { Icons } from "@csms-consoles/shared-assets";

const MuiIcons = {
  Announcement,
  Apartment,
  AccountCircle,
  BookOutlined,
  Business,
  CheckCircle,
  CheckCircleOutlineOutlined,
  Close,
  CloudOff,
  CloudQueue,
  CollectionsBookmarkOutlined,
  Computer,
  DescriptionOutlined,
  DeveloperBoard,
  Directions,
  DoneAll,
  DynamicFeed,
  DynamicFeedOutlined,
  Error,
  EditIcon,
  ErrorOutlineOutlined,
  ExpandLess,
  ExpandMore,
  Favorite,
  FiberManualRecord,
  FilterList,
  FlagOutlined,
  GetApp,
  Help,
  HighlightOff,
  Https,
  Info,
  InfoOutlined,
  LibraryAddOutlined,
  List,
  Memory,
  MoreVert,
  NetworkCheck,
  NotificationImportant,
  Notifications,
  OfflineBolt,
  People,
  PlayCircleFilled,
  Search,
  Security,
  Star,
  SyncIcon,
  Warning,
  CircleIcon,
  CheckIcon,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  FirstPageIcon,
  LastPageIcon,
  LaunchIcon,
  AccessTimeIcon,
  SouthIcon
};

const Icon = props => {
  const { type, ...otherProps } = props;

  if (Icons[type]) {
    const CustomIcon = Icons[type];
    return <Box component={CustomIcon} {...otherProps} />;
  }

  const MuiIcon = MuiIcons[type];
  return MuiIcon ? <MuiIcon {...otherProps} /> : null;
};

export default Icon;
