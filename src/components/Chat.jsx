import React from "react";
import styled from "styled-components";
import { selectRoomId } from "../redux/features/appSlices";
import { useSelector } from "react-redux";

// Icons
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

export default function Chat() {
  const roomID = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomID && db.collection("Rooms").doc(roomID)
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
            </p>
          </HeaderRight>
        </Header>
      </>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
