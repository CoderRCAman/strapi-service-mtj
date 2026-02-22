import type { Core } from '@strapi/strapi';

const config = 
({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env.int('SMTP_PORT', 587),
        secure: false, // Use `true` for port 465
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_EMAIL_FROM'),
        defaultReplyTo: env('DEFAULT_EMAIL_TO'),
      },
    },
  },
});
export default config;
