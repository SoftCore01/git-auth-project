declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_NAME: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    SALTVAL: string;
  }
}


declare namespace Express {
  interface Request {
    user?: string | JwtPayload | undefined;
  }
}
