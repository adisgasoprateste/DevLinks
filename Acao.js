const tiktokBtn = document.getElementById("tiktokBtn");

if (tiktokBtn) {
  tiktokBtn.addEventListener("click", () => {
    const novaPagina = window.open("", "_blank");

    novaPagina.document.write(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Em manutenção</title>
        <style>
          body {
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: Inter, Arial, sans-serif;
            background-color: #f5f5f5;
          }
          h1 {
            text-align: center;
            color: #000;
            font-size: 22px;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <h1>
          🚧 Página em manutenção 🚧<br><br>
          Estamos trabalhando nisso.<br>
          Nao clique novamente 🙂 (e serio -_-) 
        </h1>
      </body>
      </html>
    `);

    novaPagina.document.close();
  });
}

const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const novaPagina = window.open("", "_blank");

    novaPagina.document.write(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Em manutenção</title>
        <style>
          body {
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: white;
            font-family: Inter, Arial, sans-serif;
          }
          h1 {
            text-align: center;
            color: black;
            font-size: 22px;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <h1>
          🚧 Página em manutenção 🚧<br>
          Estamos trabalhando nisso.<br>
          Nao clique novamente 🙂 (e serio -_-)
        </h1>
      </body>
      </html>
    `);

    novaPagina.document.close();
  });
} //s
