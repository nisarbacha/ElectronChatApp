import React from 'react'
import ChatUserList from '../components/ChatUserList'
import ChatMessagesList from '../components/ChatMessagesList'
import ViewTitle from '../components/shared/ViewTitle'
import BaseLayout from "../Layout/Baselayout"
import { useParams } from 'react-router-dom';
const Chat = () => {
    const { id } = useParams();
    return (
        <BaseLayout canGoBack>
            <div className="row no-gutters fh">
                <div className="col-3 fh">
                    <ChatUserList />
                </div>
                <div className="col-9 fh">
                    <ViewTitle text={`Joined channel: ${id}`} />
                    <ChatMessagesList />
                </div>
            </div>
        </BaseLayout>
    )
}

export default Chat