import { PropsWithChildren, ReactElement, useState } from "react";
import styles from "./pageLayout.module.css";
import BackButton from "../UI/backButton/backButton";
import { Conversation } from "@/types/conversation";

interface Props {
  children: ReactElement | ReactElement[];
}

export default function PageLayout({
  children,
}: PropsWithChildren<Props>): ReactElement {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  return (
    <div className={styles.fullPageContainer}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src="/assets/lbc-logo.webp" alt="Logo" />
      </div>
      <div className={styles.pageContainer}>{children}</div>
      {/* <div className={styles.footerContainer}>footer</div> */}
    </div>
  );
}
