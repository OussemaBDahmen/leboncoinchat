import { Message } from "@/types/message";
import { ReactElement } from "react";
import styles from "./messageItem.module.css";
import { getLoggedUserId } from "@/utils/getLoggedUserId";
import { baseAvatarUrl } from "@/utils/globalVariables";

export default function MessageItem({
  message,
}: {
  message: Message;
}): ReactElement {
  const currentUserId = getLoggedUserId();
  const isMessageRecieved = message.authorId != currentUserId;
  return (
    <div
      className={`${styles.messageContainer} ${isMessageRecieved ? styles.recieved : ""}`}
    >
      {isMessageRecieved ? (
        <img
          className={styles.avatar}
          src={`${baseAvatarUrl}/${message.authorId}.jpg`}
          alt="avatar"
        />
      ) : null}
      <div className={styles.bodyContainer}>
        <p className={styles.messageBody}>{message.body}</p>
        <p className={styles.timestamp}>
          {new Date(message.timestamp * 1000).toDateString()}
        </p>
      </div>
    </div>
  );
}
