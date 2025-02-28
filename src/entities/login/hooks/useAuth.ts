import { useContext } from "react";
import { AuthContext } from "@/app/providers/AuthProvider.tsx";

export default function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not provided");
  }

  return authContext;
}
