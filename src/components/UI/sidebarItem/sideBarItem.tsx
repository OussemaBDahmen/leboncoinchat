import { User } from "@/types/user";
import { baseAvatarUrl } from "@/utils/globalVariables";
import { ReactElement } from "react";
import styles from "./sideBarItem.module.css";
import { useRouter } from "next/router";
import { Conversation } from "@/types/conversation";
import { getLoggedUserId } from "@/utils/getLoggedUserId";

export default function SideBarItem({
  user,
  expanded = false,
  conversations,
}: {
  user: User;
  expanded?: boolean;
  conversations: Conversation[];
}): ReactElement {
  const router = useRouter();
  const filteredConversation = conversations.filter((conv) => {
    return (
      (conv.recipientId == user.id && conv.senderId == getLoggedUserId()) ||
      (conv.senderId == user.id && conv.recipientId == getLoggedUserId())
    );
  })[0];

  return (
    <div
      className={`${styles.itemContainer} ${expanded ? "" : styles.collapsed}`}
      onClick={() => {
        router.replace(filteredConversation.id.toString());
      }}
      key={filteredConversation.id}
    >
      <img
        className={styles.avatar}
        src={`${baseAvatarUrl}/${user.id}.jpg`}
        alt=""
      />
      <p className={`${expanded ? styles.nickname : styles.nicknameHidden}`}>
        {user.nickname}
      </p>
    </div>
  );
}
