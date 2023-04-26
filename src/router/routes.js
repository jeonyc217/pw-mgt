const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/ErrorNotFound.vue") },
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "change-password",
        component: () =>
          import("src/components/PasswordMgt/PasswordChangeForm.vue"),
        // import("pages/passwordManagement/ChangePasswordPage.vue"),
      },
      {
        path: "request-password-reset",
        component: () =>
          import("pages/passwordManagement/RequestPasswordResetPage.vue"),
        // import("pages/passwordManagement/RequestPasswordResetPage.vue"),
      },
    ],
  },
];

export default routes;
