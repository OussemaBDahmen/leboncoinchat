import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { baseUrl } from "../../utils/globalVariables";
import { getUsers } from "@/api/routes/users";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getUsers();

        setUsers(response);
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
