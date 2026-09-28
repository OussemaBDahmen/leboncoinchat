import MessageView from "@/components/messages/massagesView/messageView";
import Sidebar from "@/components/sidebar/sidebar";
import PageLayout from "@/components/pageLayout/pageLayout";
import { useMessages } from "@/hooks/conversationsHooks/useMessages";
import { useRouter } from "next/router";
import { useConversations } from "@/hooks/conversationsHooks/useConversations";

export default function ConversationPage() {
  const router = useRouter();
  const { conversationId } = router.query;
  const { conversations, isLoading } = useConversations();
  const { messages, addMessage } = useMessages(conversationId as string);
  const selectedConversation = conversations.filter((conv) => {
    return conv.id.toString() == conversationId;
  })[0];
  if (isLoading) return <div>Loading...</div>;
  return (
    <PageLayout>
      <Sidebar
        conversationId={conversationId as string}
        conversations={conversations}
      />
      <MessageView
        messages={messages}
        conversation={selectedConversation}
        addMessage={addMessage}
      />
    </PageLayout>
  );
}
