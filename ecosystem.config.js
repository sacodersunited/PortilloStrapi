// module.exports = {
//   apps: [
//     {
//       name: "strapi",
//       cwd: "/srv/strapi/",
//       script: "npm",
//       args: "start",
//       autorestart: true,
//       env: {
//         NODE_ENV: "production",
//       },
//     },
//   ],
// };

const fs = require("fs");

module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/srv/strapi/",
      script: "npm",
      args: "start",
      autorestart: true,
      env: {
        NODE_ENV: "production",
      },
      post_install:
        "mkdir -p /app/public/uploads && chmod -R 777 /app/public/uploads",
      post_update:
        "mkdir -p /app/public/uploads && chmod -R 777 /app/public/uploads",
    },
  ],
};
