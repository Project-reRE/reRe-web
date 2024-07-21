module.exports = {
  apps: [
    {
      name: 'web',
      cwd: './',
      script: 'pnpm start',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      output: './logs/console.log',
      error: './logs/consoleError.log',
      instances: 2,
      autorestart: true,
      watch: false,
      exec_mode: 'cluster',
      wait_ready: true, // Node앱으로 부터 앱이 실행되었다는 신호를 받기위해 기다리겠다는 것 "ready"
      listen_timeout: 50000, // 앱 실행신호까지 기다릴 최대시간 ms단위 50초
      kill_timeout: 5000, //새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간
    },
  ],
};
