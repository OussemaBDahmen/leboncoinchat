import { Message } from "@/types/message";
import { Dispatch, ReactElement } from "react";
import styles from "./messageView.module.css";
import MessageItem from "../messageItem/messageItem";
import BackButton from "@/components/UI/backButton/backButton";
import MessageInput from "../messageInput/messageInput";
import { Conversation } from "@/types/conversation";

export default function MessageView({
  messages,
  conversation,
  addMessage,
}: {
  messages: Message[];
  conversation: Conversation;
  addMessage: (message: Message) => void;
}): ReactElement {
  return (
    <div className={styles.messagesContainer}>
      <BackButton />
      <div className={styles.inbox}>
        {messages.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
      </div>
      <div className={styles.messageInputSection}>
        {conversation && (
          <MessageInput
            conversation={conversation}
            updateMessages={addMessage}
          />
        )}
      </div>
    </div>
  );
}
