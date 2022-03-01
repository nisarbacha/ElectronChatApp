import React, { useEffect } from "react";
import { fetchChats } from "../action/chats";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);
  
  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  return (
    <div className="content-wrapper">
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChatsList />
        </div>
        <div className="col-9 fh">
          <ViewTitle text="Choose your channel" />
          <div className="container-fluid">
            <AvailableChatsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
