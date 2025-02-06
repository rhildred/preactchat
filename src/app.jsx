import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader
} from "@minchat/react-chat-ui";
export function App() {
  return (
    <MinChatUiProvider theme="#6ea9d7">
      <MainContainer style={{ height: '100%', maxWidth: "320px"}}>
        <MessageContainer>
          <MessageHeader />
          <MessageList
            currentUserId='dan'
            messages={[{
              text: 'Hello',
              user: {
                id: 'mark',
                name: 'Markus',
              },
            }]}
          />
          <MessageInput placeholder="Type message here" />
        </MessageContainer>
      </MainContainer>
    </MinChatUiProvider>
  )
}

export default App