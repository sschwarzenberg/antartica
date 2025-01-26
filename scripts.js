const data = {
    "header": {
      "title": "Armada de Chile",
      "menu": ["Bases Navales", "Buques", "Historia", "Investigaciones"]
    },
    "sections": {
      "hero": {
        "title": "Antártica Chilena",
        "subtitle": "Exploración y Ciencia en la Armada",
        "image": "images/antartica-210.jpg"
      },
      "basesNavales": {
        "title": "Bases Navales",
        "description": "Explora las bases de la Armada en la Antártica.",
        "mapImage": "images/map.png"
      },
      "buques": {
        "title": "Buques",
        "description": "Conoce los detalles técnicos de nuestros buques.",
        "items": [
          {
            "name": "Almirante Viel",
            "image": "images/almirante_viel.png",
            "details": "Características técnicas y detalles."
          },
          {
            "name": "Aquiles",
            "image": "images/aquiles.png",
            "details": "Características técnicas y detalles."
          }
        ]
      },
      "historia": {
        "title": "Historia",
        "description": "Conoce las expediciones más importantes.",
        "timeline": [
          {
            "year": 1947,
            "title": "Primera Expedición",
            "details": "Detalles sobre esta expedición histórica."
          }
        ]
      },
      "investigaciones": {
        "title": "Investigaciones",
        "description": "Conoce los trabajos científicos desarrollados en la Antártica.",
        "items": [
          {
            "title": "Título de la Investigación",
            "details": "Detalles sobre la investigación y los científicos responsables."
          }
        ]
      }
    },
    "footer": {
      "text": "© 2024 Armada de Chile. Todos los derechos reservados."
    }
  };
  
  // Now render using the same logic
  const app = document.getElementById('app');
  
  // Render Header
  app.innerHTML += `
    <header class="header">
      <div class="container">
        <nav>
          <h3>${data.header.title}</h3>
          <ul>
            ${data.header.menu.map(item => `<li><a href="#${item.toLowerCase().replace(/ /g, '-')}">${item}</a></li>`).join('')}
          </ul>
        </nav>
      </div>
    </header>
  `;
  
  // Render Sections
  const sections = data.sections;
  app.innerHTML += `
    <section id="hero" class="hero">
      <div class="container hero-content">
        <h1>${sections.hero.title}</h1>
        <h2>${sections.hero.subtitle}</h2>
      </div>
    </section>
  `;

  app.innerHTML += `
    <section id="bases-navales" class="section">
      <div class="container">
        <h2>${sections.basesNavales.title}</h2>
        <p>${sections.basesNavales.description}</p>
        <div class="map">
          <img src="${sections.basesNavales.mapImage}" alt="${sections.basesNavales.title}">
        </div>
      </div>
    </section>
  `;
  // Render Interactive Map Section
  app.innerHTML += `
    <section id="interactive-map" class="section">
      <div class="container">
        <h2>Mapa Interactivo de la Antártica</h2>
        <div class="interactive-map">
          <img src="images/antartica-outline.png" alt="Mapa de la Antártica" class="map-image">
          <div class="map-points">
            <div class="map-point" style="top: 20%; left: 30%;" data-info="Base Naval 1"></div>
            <div class="map-point" style="top: 50%; left: 50%;" data-info="Base Naval 2"></div>
            <div class="map-point" style="top: 70%; left: 80%;" data-info="Base Naval 3"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Add CSS for interactive map
  const style = document.createElement('style');
  style.innerHTML = `
    .interactive-map {
      position: relative;
      width: 50vw;
      height: 100%;
      overflow: hidden;
      transition: transform 2s ease, width 2s ease, height 2s ease;
    }
    .map-image {
      width: 100%;
      height: auto;
    }
    .map-points {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .map-point {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      cursor: pointer;
    }
    .map-point:hover::after {
      content: attr(data-info);
      position: absolute;
      top: -20px;
      left: 20px;
      background-color: white;
      padding: 5px;
      border: 1px solid black;
      border-radius: 5px;
    }
    .interactive-map.shrink {
      width: 200vw;
      transform: rotate(45deg);
    }
    .interactive-map.shrink .map-image {
      width: 100%;
    }
  `;
  document.head.appendChild(style);

  // Add scroll event to shrink and rotate map
  window.addEventListener('scroll', () => {
    const mapSection = document.querySelector('.interactive-map');
    if (window.scrollY > 200) {
      mapSection.classList.add('shrink');
    } else {
      mapSection.classList.remove('shrink');
    }
  });

  app.innerHTML += `
    <section id="buques" class="section">
      <div class="container">
        <h2>${sections.buques.title}</h2>
        <p>${sections.buques.description}</p>
        <div class="buques">
          ${sections.buques.items.map(buque => `
            <div class="buque">
              <h3>${buque.name}</h3>
              <img src="${buque.image}" alt="${buque.name}">
              <p>${buque.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  app.innerHTML += `
    <section id="historia" class="section">
      <div class="container">
        <h2>${sections.historia.title}</h2>
        <p>${sections.historia.description}</p>
        <div class="timeline">
          ${sections.historia.timeline.map(event => `
            <div class="event">
              <h3>${event.year} - ${event.title}</h3>
              <p>${event.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  app.innerHTML += `
    <section id="investigaciones" class="section">
      <div class="container">
        <h2>${sections.investigaciones.title}</h2>
        <p>${sections.investigaciones.description}</p>
        <div class="research">
          ${sections.investigaciones.items.map(item => `
            <div class="research-item">
              <h3>${item.title}</h3>
              <p>${item.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Render Footer
  app.innerHTML += `
    <footer class="footer">
      <div class="container">
        <p>${data.footer.text}</p>
      </div>
    </footer>
  `;
