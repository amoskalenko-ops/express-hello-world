const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Нова версія після git push</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
  </head>

  <body style="font-family: Arial; text-align: center; padding-top: 80px;">
    <h1>Привіт! Це нова версія після git push / commit!</h1>
    <p>Цей текст прийшов з GitHub і автоматично задеплоївся на Render.</p>

    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.type("html").send(html);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    version: "2",
    message: "Render працює після оновлення з GitHub"
  });
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
