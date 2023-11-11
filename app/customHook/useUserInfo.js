import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useUserInfo() {
  const { data: session } = useSession();

  const [userInfo, setUserInfo] = useState(session?.user);

  useEffect(() => {
    setUserInfo(session?.user);
  }, [session]);

  return userInfo;
}
