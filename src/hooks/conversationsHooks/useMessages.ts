import { useEffect, useState } from "react";
import { Message } from "@/types/message";
import { baseUrl } from "../../utils/globalVariables";
import { getMessagesByConversation } from "@/api/routes/messages";

export function useMessages(conversationId?: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!conversationId || Array.isArray(conversationId)) {
      return;
    }

    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getMessagesByConversation(
          Number(conversationId),
        );

        setMessages(response);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [conversationId]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return {
    messages,
    loading,
    error,
    addMessage,
  };
}
