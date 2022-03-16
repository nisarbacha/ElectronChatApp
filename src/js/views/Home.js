import React, { useEffect } from "react";
import { fetchChats } from "../Redux/action/chats";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";
import BaseLayout from "../Layout/Baselayout"
function Home() {
  const dispatch = useDispatch();
  const chats = useSelector(({ chats }) => chats.items);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  return (
    <BaseLayout>
      <div className="content-wrapper">
        <div className="row no-gutters fh">
          <div className="col-3 fh">
            <JoinedChatsList chats={chats} />
          </div>
          <div className="col-9 fh">
            <ViewTitle text="Choose your channel" />
            <div className="container-fluid">
              <AvailableChatsList chats={chats} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Home;
