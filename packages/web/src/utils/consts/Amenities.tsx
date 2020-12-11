import { CgGym, CgScreen, CgSmartHomeWashMachine } from "react-icons/cg";
import { GrWifi } from "react-icons/gr";
import { GiClothes, GiHanger } from "react-icons/gi";
import { FaHotTub } from "react-icons/fa";
import {
  MdComputer,
  MdFreeBreakfast,
  MdLocalLaundryService,
} from "react-icons/md";

export const AmenityList = [
  {
    name: "Gym",
    icon: <CgGym />,
  },
  {
    name: "Wifi",
    icon: <GrWifi />,
  },
  {
    name: "Washer",
    icon: <CgSmartHomeWashMachine />,
  },
  {
    name: "Iron",
    icon: <GiClothes />,
  },
  {
    name: "Tv",
    icon: <CgScreen />,
  },
  {
    name: "Hot tub",
    icon: <FaHotTub />,
  },
  {
    name: "Breakfast",
    icon: <MdFreeBreakfast />,
  },
  {
    name: "Dryer",
    icon: <MdLocalLaundryService />,
  },
  {
    name: "Dedicated workspace",
    icon: <MdComputer />,
  },
  {
    name: "Hangers",
    icon: <GiHanger />,
  },
];
