import MessageInputField from "@/components/UI/messageInputField/messageInputField";
import SendButton from "@/components/UI/sendbutton/sendButton";
import { ReactElement, useState } from "react";
import styles from "./messageInput.module.css";
import { Conversation } from "@/types/conversation";
import { createMessage } from "@/api/routes/messages";
import { getLoggedUserId } from "@/utils/getLoggedUserId";
import { useRouter } from "next/router";
import { Message } from "@/types/message";

export default function MessageInput({
  conversation,
  updateMessages,
}: {
  conversation: Conversation;
  updateMessages: (message: Message) => void;
}): ReactElement {
  const [messageText, setMessageText] = useState("");
  const currentUserId = getLoggedUserId();
  const router = useRouter();

  const sendeMessage = async () => {
    const newMessage = {
      authorId: currentUserId,
      conversationId: conversation.id,
      body: messageText,
    };
    const res = await createMessage(newMessage);
    setMessageText("");
    updateMessages(res);
  };
  return (
    <div className={styles.messageInput}>
      <MessageInputField value={messageText} handleMessage={setMessageText} />
      <SendButton sendeMessage={sendeMessage} />
    </div>
  );
}
