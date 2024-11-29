import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    port: 5173,
    env: {
      USE_BABEL_PLUGIN_ISTANBUL: '1',
    },
  },
  reporter: [['html',
    {
      outputFolder: 'my-report',
      host: "localhost",
      port: 9323
    }
  ]],
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
