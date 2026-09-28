import { ReactElement, useState } from "react";
import styles from "./sidebar.module.css";
import { useUsers } from "@/hooks/usersHooks/useUsers";
import SideBarItem from "@/components/UI/sidebarItem/sideBarItem";
import { getLoggedUserId } from "@/utils/getLoggedUserId";
import { Conversation } from "@/types/conversation";
export default function Sidebar({
  conversationId,
  conversations,
}: {
  conversationId: string;
  conversations: Conversation[];
}): ReactElement {
  const [expanded, setExpanded] = useState(true);

  const { users } = useUsers();
  const currentUserId = getLoggedUserId();

  return (
    <div
      className={`${styles.sidebarContainer} ${expanded ? styles.expanded : styles.collapsed}`}
    >
      {users.map(
        (user) =>
          currentUserId != user.id && (
            <SideBarItem
              user={user}
              expanded={expanded}
              conversations={conversations}
            />
          ),
      )}
      <span
        className={styles.expandButton}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M20 7L4 7"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              opacity="0.5"
              d="M20 12L4 12"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M20 17L4 17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </span>
    </div>
  );
}
