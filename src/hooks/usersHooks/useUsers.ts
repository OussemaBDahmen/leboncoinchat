import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { baseUrl } from "../../utils/globalVariables";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log(`${baseUrl}/users`);
        const response = await fetch(`${baseUrl}/users`);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    detchUsers();
  }, []);

  return {
    users,
    loading,
    error,
  };
}
