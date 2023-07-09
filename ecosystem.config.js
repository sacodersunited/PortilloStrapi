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
    },
  ],
};
