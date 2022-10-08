const isNotDevlopment = process.env.HOST;

export const hostname = isNotDevlopment !== undefined ? process.env.HOST : "http://localhost:3000";
