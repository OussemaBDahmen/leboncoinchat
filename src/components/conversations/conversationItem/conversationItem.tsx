import { useRouter } from "next/router";
import { ReactElement } from "react";
import styles from "./conversationItem.module.css";

export default function ConversationItem({
  conversationTitle,
  lastMessageTimestamp,
  avatar,
  link,
}: {
  conversationTitle: string;
  lastMessageTimestamp: string;
  avatar: string;
  link: string;
}): ReactElement {
  const router = useRouter();

  return (
    <div
      className={styles.itemContainer}
      onClick={() => {
        router.push(link);
      }}
    >
      <div className={styles.profileContainer}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <h2 className={styles.itemHeading}>{conversationTitle}</h2>
      </div>

      <p className={styles.timestamp}>{lastMessageTimestamp}</p>
    </div>
  );
}
