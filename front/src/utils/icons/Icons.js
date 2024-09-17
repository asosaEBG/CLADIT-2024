import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SellIcon from "@mui/icons-material/Sell";
import LinkIcon from "@mui/icons-material/Link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
const Icons = (props) => {
  return props.icon == "info" ? (
    <InfoIcon />
  ) : props.icon == "description" ? (
    <DescriptionIcon />
  ) : props.icon == "calendar" ? (
    <CalendarTodayIcon />
  ) : props.icon == "week" ? (
    <ViewWeekIcon />
  ) : props.icon == "timelapse" ? (
    <TimelapseIcon />
  ) : props.icon == "sell" ? (
    <SellIcon />
  ) : props.icon == "link" ? (
    <LinkIcon />
  ) : props.icon == "image" ? (
    <ImageIcon />
  ) : props.icon == "video" ? (
    <VideoCameraBackIcon />
  ) : (
    <AutoAwesomeIcon />
  );
};

export default Icons;
