"use client";

import { useSession } from "next-auth/client";

export async function RouteGuard() {
  const [session, loading] = useSession();

  if (loading) return null;

  if (!loading && !session) return <p>Access Denied</p>;

  return <div>RouteGuard</div>;

  return <div></div>;
}
