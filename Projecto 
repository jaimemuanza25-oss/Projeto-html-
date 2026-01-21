<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOME - Trabalhos de Programação</title>

  <style>
    /* Reset e fontes */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      background: #f1f5f9;
      color: #333;
    }

    /* Header */
    .header {
      position: sticky;
      top: 0;
      background: #3e68ca;
      padding: 15px 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      flex-wrap: wrap;
    }

    .header h1 a {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
    }

    /* Menu Toggle Mobile */
    .menu-toggle {
      display: none;
      font-size: 2rem;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .menu-toggle.active {
      transform: rotate(90deg);
    }

    nav {
      display: flex;
      gap: 10px;
    }

    nav a {
      text-decoration: none;
      padding: 8px 16px;
      background: #1e293b;
      color: #fff;
      border-radius: 6px;
      font-weight: bold;
      transition: 0.3s, transform 0.3s;
    }

    nav a:hover {
      background: #3e68ca;
      color: #fff;
      transform: scale(1.05);
    }

    /* Main */
    main {
      padding: 40px 20px;
      display: flex;
      justify-content: center;
    }

    .trimestres {
      padding: 50px 30px;
      text-align: center;
      background: linear-gradient(135deg, #3e68ca, #1e293b);
      color: #fff;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      max-width: 700px;
      width: 100%;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .trimestres:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.2);
    }

    .trimestres h1 {
      font-size: 2rem;
    }

    /* Responsividade */
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      nav {
        display: none;
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
      }

      nav.active {
        display: flex;
      }

      .header {
        flex-direction: column;
        align-items: flex-start;
      }

      nav a {
        width: 100%;
        text-align: center;
        margin: 5px 0;
      }
    }
  </style>
</head>

<body>

<header class="header">
  <h1><a href="index.html">HOME</a></h1>
  <button class="menu-toggle">☰</button>

  <nav id="menu">
    <a href="pag/trimestre1.html">I Trimestre</a>
    <a href="pag/trimestre2.html">II Trimestre</a>
    <a href="pag/trimestre3.html">III Trimestre</a>
  </nav>
</header>

<main>
  <div class="trimestres">
    <h1>Seja bem-vindo/a ao meu programa</h1>
    
  </div>
</main>

<script>
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
  });
</script>

</body>
u
</html>