import React, { useEffect } from "react";
import { ChatRouter } from "./components/ChatRouter";
import { StoreProvider } from "./Redux/store/StoreProvider";


export default function App() {
  const ContentWrapper = ({ children }) => <div className="content-wrapper">{children}</div>
  return (
    <ContentWrapper>
      <StoreProvider>
        <ChatRouter />
      </StoreProvider>
    </ContentWrapper>
  )
}