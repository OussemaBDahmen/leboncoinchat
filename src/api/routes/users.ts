import { User } from "@/types/user";
import { baseUrl } from "@/utils/globalVariables";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(baseUrl + "/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
