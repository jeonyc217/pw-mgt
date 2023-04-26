const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/ErrorNotFound.vue") },
      { path: "", component: () => import("pages/IndexPage.vue") },
    ],
  },
];

export default routes;
