import { useRouter } from "next/router";
import styles from "./backButton.module.css";
import { ReactElement } from "react";

export default function BackButton(): ReactElement {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={styles.backButton}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Conversations</span>
    </button>
  );
}
