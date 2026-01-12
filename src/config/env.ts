/**
 * Environment configuration helper
 * Access environment variables with type safety
 */

export const env = {
  /** Current environment: 'local' | 'staging' | 'production' */
  APP_ENV: import.meta.env.VITE_APP_ENV || 'local',
  
  /** Site URL */
  SITE_URL: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  
  /** API URL */
  API_URL: import.meta.env.VITE_API_URL || '',
  
  /** Google Analytics ID */
  GA_ID: import.meta.env.VITE_GA_ID || '',
  
  /** Form endpoint */
  FORM_ENDPOINT: import.meta.env.VITE_FORM_ENDPOINT || 'https://forms.gle/66XJUJFUdnqyGZsd7',
  
  /** EmailJS Configuration */
  EMAILJS: {
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    NOTIFICATION_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID || '',
    AUTOREPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '',
  },
} as const;

/** Check if running in production */
export const isProduction = env.APP_ENV === 'production';

/** Check if running in staging */
export const isStaging = env.APP_ENV === 'staging';

/** Check if running locally */
export const isLocal = env.APP_ENV === 'local';

/** Check if running in development mode (local or staging) */
export const isDevelopment = isLocal || isStaging;
