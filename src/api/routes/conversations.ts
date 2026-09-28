import { Conversation } from "@/types/conversation";
import { baseUrl } from "@/utils/globalVariables";

export async function createConversation(
  conversation: Omit<Conversation, "id" | "lastMessageTimestamp">,
): Promise<Conversation> {
  const response = await fetch(baseUrl + "/conversations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...conversation,
      lastMessageTimestamp: Date.now(),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create conversation");
  }

  return response.json();
}

export async function getConversations(
  userId: number,
): Promise<Conversation[]> {
  const response = await fetch(baseUrl + `/conversations/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch conversation");
  }

  return response.json();
}
