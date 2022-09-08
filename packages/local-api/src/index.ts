import express from "express";

export const serve = (filename: string, port: number, dir: string) => {
  const app = express();

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
