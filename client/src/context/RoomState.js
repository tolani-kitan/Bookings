import React, { useReducer } from "react";
import RoomContext from "./RoomContext";
import roomReducer from "./RoomReducer";

const RoomState = (props) => {
  const initialState = {
    rooms: [
      {
        id: 1,
        name: "Oceania Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992090/Pub_Picture_1_nvbdqa.png",
        location: "Room 304, 3rd floor on East Wing",
        roomCapacity: "20",
        availability: true,
      },
      {
        id: 2,
        name: "Octagon Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992614/Pub_Picture_2_qxglsi.png",
        location: "Room 114, 2rd floor on West Wing",
        roomCapacity: "8",
        availability: true,
      },
      {
        id: 3,
        name: "Board Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992762/Pub_Picture_3_kuwqhx.png",
        location: "Room 406, 4th floor on East Wing",
        roomCapacity: "12",
        availability: true,
      },
      {
        id: 4,
        name: "Macey's Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992783/Pub_Picture_4_vuwb3m.png",
        location: "Room 200, 1st floor on East Wing",
        roomCapacity: "10",
        availability: true,
      },
      {
        id: 5,
        name: "Losia Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992794/Pub_Picture_5_cptqlt.png",
        location: "Room 314, 3rd floor on West Wing",
        roomCapacity: "15",
        availability: false,
      },
      {
        id: 6,
        name: "Floor 'O' Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992807/Pub_Picture_6_zo54e9.png",
        location: "Room 224, 2nd floor on East Wing",
        roomCapacity: "10",
        availability: true,
      },
      {
        id: 7,
        name: "Atlantic Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992816/Pub_Picture_7_mrv4a0.png",
        location: "Room 250, 3rd floor on East Wing",
        roomCapacity: "20",
        availability: false,
      },
      {
        id: 8,
        name: "Board-1 Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992826/Pub_Picture_8_wtfeb1.png",
        location: "Room 104, 2nd floor on East Wing",
        roomCapacity: "8",
        availability: true,
      },
      {
        id: 9,
        name: "OAT Conference Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992835/Pub_Picture_9_xrrypz.png",
        location: "Room 358, 4th floor on West Wing",
        roomCapacity: "25",
        availability: true,
      },
      {
        id: 10,
        name: "Hi-Fi Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992845/Pub_Picture_10_ewvsfw.png",
        location: "Room 401, 4th floor on East Wing",
        roomCapacity: "12",
        availability: true,
      },
      {
        id: 11,
        name: "Zenith Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992857/Pub_Picture_11_qdilnw.png",
        location: "Room 500, 4th floor on East Wing",
        roomCapacity: "30",
        availability: true,
      },
      {
        id: 12,
        name: "Board-2 Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992870/Pub_Picture_12_mtkily.png",
        location: "Room 234, 2nd floor on East Wing",
        roomCapacity: "20",
        availability: true,
      },
      {
        id: 13,
        name: "Room 'x' Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992885/Pub_Picture_13_oaqmna.png",
        location: "Room 184, 2nd floor on East Wing",
        roomCapacity: "18",
        availability: true,
      },
      {
        id: 14,
        name: "Oval Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992896/Pub_Picture_14_kpjvm8.png",
        location: "Room 207, 2nd floor on West Wing",
        roomCapacity: "22",
        availability: true,
      },
      {
        id: 15,
        name: "Lobby-2 Meeting Room",
        image:
          "https://res.cloudinary.com/nnamdy/image/upload/v1592992908/Pub_Picture_ukeyjd.png",
        location: "Room 175, 2nd floor on West Wing",
        roomCapacity: "11",
        availability: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(roomReducer, initialState);

  return (
    <RoomContext.Provider value={{ rooms: state.rooms }}>
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
