module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/srv/strapi/backend',
      script: 'npm',
      args: 'develop',
      autorestart: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
