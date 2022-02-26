import React, { useEffect } from 'react'
import { fetchChats } from '../api/chats';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';

function Home() {
    useEffect(() => {
        fetchChats().then(chats => {
            debugger
        });
    }, [])
    return (
        <div className='content-wrapper'>

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
    )
}

export default Home
