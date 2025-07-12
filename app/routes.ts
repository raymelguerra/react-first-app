import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/admin.layout.tsx", [
    index("routes/admin/home.tsx"),
    route("about", "routes/admin/about.tsx"),
    route("post/", "routes/admin/post.tsx"),
    route("contact/:contactId", "routes/admin/contact.tsx"),
  ]),
  ...prefix("auth", [
    layout("layouts/auth.layout.tsx", [
      route("login", "routes/auth/login.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
