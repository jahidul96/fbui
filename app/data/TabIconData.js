import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export const tabIconData = [
  {
    id: 1,
    // icon: <Ionicons name="home" size={24} />,
    icon: require("../../assets/icon/home.png"),
    tabname: "Home",
    isBig: true,
  },
  {
    id: 2,
    icon: require("../../assets/icon/friends.png"),
    tabname: "friends",
  },

  {
    id: 3,
    icon: require("../../assets/icon/messenger.png"),
    tabname: "message",
  },

  {
    id: 4,
    icon: require("../../assets/icon/bell.png"),
    tabname: "notification",
    isBig: true,
  },
  {
    id: 5,
    icon: require("../../assets/icon/streaming.png"),
    tabname: "video",
  },
  {
    id: 6,
    icon: require("../../assets/icon/store.png"),
    tabname: "marketplace",
    isBig: true,
  },
];

export const videoScrollTabItems = [
  {
    id: 1,
    icon: <MaterialIcons name="ondemand-video" size={24} />,
    tabname: "For you",
  },
  {
    id: 2,
    icon: <Ionicons name="videocam" size={24} />,
    tabname: "Live",
  },
  {
    id: 3,
    icon: <Ionicons name="ios-checkmark-done-circle-sharp" size={24} />,
    tabname: "Following",
  },
  {
    id: 4,
    icon: <Ionicons name="save" size={24} />,
    tabname: "Saved",
  },
  {
    id: 5,
    icon: <Ionicons name="game-controller" size={24} />,
    tabname: "Gaming",
  },
];
