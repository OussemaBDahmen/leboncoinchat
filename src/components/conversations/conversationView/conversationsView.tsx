import { useConversations } from "@/hooks/conversationsHooks/useConversations";
import { getLoggedUserId } from "@/utils/getLoggedUserId";
import { ReactElement } from "react";
import styles from "./conversationView.module.css";
import ConversationItem from "../conversationItem/conversationItem";
import { baseAvatarUrl } from "@/utils/globalVariables";

export default function ConversationView(): ReactElement {
  const { conversations } = useConversations();

  const currUserId = getLoggedUserId();

  return (
    <div className={styles.conversationsContainer}>
      {conversations.map((conversation) => (
        <ConversationItem
          conversationTitle={
            conversation.senderId == currUserId
              ? conversation.recipientNickname
              : conversation.senderNickname
          }
          lastMessageTimestamp={new Date(
            conversation.lastMessageTimestamp * 1000,
          ).toDateString()}
          avatar={`${baseAvatarUrl}/${
            conversation.senderId == currUserId
              ? conversation.recipientId
              : conversation.senderId
          }.jpg`}
          link={`/conversations/${conversation.id}`}
        />
      ))}
    </div>
  );
}
