export interface Config {
  APP_BASE_URL?: string;
}

export const config: Config = {
  APP_BASE_URL: process.env.APP_BASE_URL || '/',
};
