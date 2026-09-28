import { Message } from "@/types/message";
import { baseUrl } from "@/utils/globalVariables";

export async function createMessage(
  message: Omit<Message, "id" | "timestamp">,
): Promise<Message> {
  const response = await fetch(baseUrl + "/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...message,
      timestamp: Date.now(),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create message");
  }

  return response.json();
}

export async function getMessages(): Promise<Message[]> {
  const response = await fetch(baseUrl + "/messages");

  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }

  return response.json();
}

export async function getMessage(id: number): Promise<Message> {
  const response = await fetch(baseUrl + `/messages/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch message");
  }

  return response.json();
}

export async function getMessagesByConversation(
  conversationId: number,
): Promise<Message[]> {
  const response = await fetch(
    baseUrl + `/messages?conversationId=${conversationId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch conversation messages");
  }

  return response.json();
}

export async function updateMessage(
  id: number,
  message: Omit<Message, "id">,
): Promise<Message> {
  const response = await fetch(baseUrl + `/messages/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error("Failed to update message");
  }

  return response.json();
}

export async function patchMessage(
  id: number,
  updates: Partial<Omit<Message, "id">>,
): Promise<Message> {
  const response = await fetch(baseUrl + `/messages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update message");
  }

  return response.json();
}

export async function deleteMessage(id: number): Promise<void> {
  const response = await fetch(baseUrl + `/messages/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete message");
  }
}
