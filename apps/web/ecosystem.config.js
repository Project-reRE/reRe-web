module.exports = {
  apps: [
    {
      name: 'project',
      script: 'pnpm',
      args: 'dev',
      instances: 2,
      autorestart: true,
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
      output: './logs/console.log',
      error: './logs/consoleError.log',
    },
  ],
};
