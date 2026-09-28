import ConversationView from "@/components/conversations/conversationView/conversationsView";
import PageLayout from "@/components/pageLayout/pageLayout";
import { ReactElement } from "react";

export default function Conversations(): ReactElement {
  return (
    <PageLayout>
      <ConversationView />
    </PageLayout>
  );
}
