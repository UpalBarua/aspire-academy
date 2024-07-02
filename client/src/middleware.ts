// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

const protectedRoutes = ["/profile", "/admin"];

export default auth((req) => {
  const isProteced = protectedRoutes.some((prefix) =>
    req.nextUrl.pathname.startsWith(prefix),
  );

  if (!req.auth && isProteced) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
