import { useEffect, useState } from "react";
import { Conversation } from "@/types/conversation";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { baseUrl } from "../../utils/globalVariables";
import { getConversations } from "@/api/routes/conversations";

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = getLoggedUserId();

  useEffect(() => {
    async function fetchConversations() {
      try {
        setIsLoading(true);

        const response = await getConversations(userId);

        setConversations(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchConversations();
  }, []);

  return {
    conversations,
    isLoading,
    error,
  };
}
