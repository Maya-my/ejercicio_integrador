(() => {
  "use strict";

  /* =========================================================
     ANIMACIONES Y TRANSICIONES
     Desafío integrador · Métodos numéricos en finanzas
     Archivo independiente
     ========================================================= */

  document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       1. ESTILOS DE ANIMACIÓN
       ========================================================= */

    const style = document.createElement("style");

    style.textContent = `
      /* -----------------------------
         Variables generales
      ----------------------------- */

      :root {
        --animation-ease: cubic-bezier(.22, 1, .36, 1);
        --animation-duration: .65s;
      }

      /* -----------------------------
         Estado inicial de elementos
      ----------------------------- */

      .anim-reveal {
        opacity: 0;
        transform: translateY(35px);
        transition:
          opacity var(--animation-duration) var(--animation-ease),
          transform var(--animation-duration) var(--animation-ease);
      }

      .anim-reveal.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .anim-scale {
        opacity: 0;
        transform: scale(.94) translateY(20px);
        transition:
          opacity .8s var(--animation-ease),
          transform .8s var(--animation-ease);
      }

      .anim-scale.is-visible {
        opacity: 1;
        transform: scale(1) translateY(0);
      }

      /* -----------------------------
         Tarjetas
      ----------------------------- */

      .card,
      .sumcard,
      .methodcard,
      .variable-card {
        transition:
          transform .3s var(--animation-ease),
          box-shadow .3s ease,
          border-color .3s ease;
      }

      .card:hover,
      .sumcard:hover,
      .methodcard:hover,
      .variable-card:hover {
        transform: translateY(-7px);
        box-shadow:
          0 15px 35px rgba(0, 0, 0, .10);
      }

      /* -----------------------------
         Navegación
      ----------------------------- */

      nav a,
      .nav a {
        position: relative;
        transition:
          color .25s ease,
          transform .25s ease;
      }

      nav a:hover,
      .nav a:hover {
        transform: translateY(-2px);
      }

      nav a::after,
      .nav a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        transition: width .3s ease;
      }

      nav a:hover::after,
      .nav a:hover::after {
        width: 100%;
      }

      /* -----------------------------
         Botones
      ----------------------------- */

      .btn,
      .tbtn {
        transition:
          transform .2s ease,
          box-shadow .2s ease,
          opacity .2s ease;
      }

      .btn:hover,
      .tbtn:hover {
        transform: translateY(-3px);
        box-shadow:
          0 8px 20px rgba(0, 0, 0, .12);
      }

      .btn:active,
      .tbtn:active {
        transform: translateY(0) scale(.97);
      }

      /* -----------------------------
         Bloques de resultados
      ----------------------------- */

      .resultblock {
        transition:
          transform .3s var(--animation-ease),
          box-shadow .3s ease,
          opacity .4s ease;
      }

      .resultblock:hover {
        transform: translateY(-4px);
        box-shadow:
          0 12px 30px rgba(0, 0, 0, .08);
      }

      .resultblock.anim-new {
        animation: resultAppear .65s var(--animation-ease);
      }

      @keyframes resultAppear {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(.98);
        }

        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      /* -----------------------------
         Tabla de comparación
      ----------------------------- */

      table tbody tr {
        transition:
          background-color .25s ease,
          transform .25s ease;
      }

      table tbody tr:hover {
        transform: scale(1.01);
      }

      .comparison-highlight {
        animation: comparisonPulse 1.8s ease-in-out infinite;
      }

      @keyframes comparisonPulse {
        0%,
        100% {
          opacity: 1;
        }

        50% {
          opacity: .72;
        }
      }

      /* -----------------------------
         Insights
      ----------------------------- */

      .insight {
        transition:
          transform .3s ease,
          box-shadow .3s ease;
      }

      .insight:hover {
        transform: translateX(5px);
        box-shadow:
          0 8px 22px rgba(0, 0, 0, .08);
      }

      /* -----------------------------
         Barra de progreso
      ----------------------------- */

      #animation-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        z-index: 99999;
        pointer-events: none;
        transition: width .08s linear;
      }

      /* -----------------------------
         Punto decorativo del hero
      ----------------------------- */

      .hero-dot-animated {
        animation:
          heroDotPulse 2s ease-in-out infinite;
      }

      @keyframes heroDotPulse {
        0%,
        100% {
          transform: scale(1);
          opacity: .8;
        }

        50% {
          transform: scale(1.35);
          opacity: 1;
        }
      }

      /* -----------------------------
         Reloj / temporizador
      ----------------------------- */

      #clockDisplay.clock-tick {
        animation: clockTick .35s ease;
      }

      @keyframes clockTick {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.06);
        }

        100% {
          transform: scale(1);
        }
      }

      /* -----------------------------
         Inputs
      ----------------------------- */

      input,
      select,
      textarea {
        transition:
          border-color .25s ease,
          box-shadow .25s ease,
          transform .2s ease;
      }

      input:focus,
      select:focus,
      textarea:focus {
        transform: translateY(-1px);
        box-shadow:
          0 0 0 3px rgba(0, 0, 0, .06);
      }

      /* -----------------------------
         Elementos dinámicos
      ----------------------------- */

      .dynamic-update {
        animation: dynamicUpdate .55s var(--animation-ease);
      }

      @keyframes dynamicUpdate {
        0% {
          opacity: .2;
          transform: translateY(8px);
        }

        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* -----------------------------
         Animación de aparición del body
      ----------------------------- */

      body {
        animation: pageEnter .7s ease both;
      }

      @keyframes pageEnter {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      /* -----------------------------
         Accesibilidad
      ----------------------------- */

      @media (prefers-reduced-motion: reduce) {

        *,
        *::before,
        *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }

        .anim-reveal,
        .anim-scale {
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `;

    document.head.appendChild(style);


    /* =========================================================
       2. BARRA DE PROGRESO DE SCROLL
       ========================================================= */

    const progress = document.createElement("div");
    progress.id = "animation-progress";

    document.body.appendChild(progress);

    function updateScrollProgress() {

      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        progress.style.width = "0%";
        return;
      }

      const percentage =
        (scrollTop / documentHeight) * 100;

      progress.style.width =
        `${Math.min(100, Math.max(0, percentage))}%`;
    }

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      { passive: true }
    );

    updateScrollProgress();


    /* =========================================================
       3. ELEMENTOS QUE APARECEN AL HACER SCROLL
       ========================================================= */

    const revealSelectors = [
      ".hero",
      ".ledger-page > .partlabel",
      ".parttitle",
      ".intro-text",
      ".card",
      ".summarygrid",
      ".pagefoot",
      ".resultblock",
      ".insight",
      ".variable-card"
    ];

    const revealElements = [];

    revealSelectors.forEach(selector => {

      document
        .querySelectorAll(selector)
        .forEach(element => {

          if (
            !element.classList.contains("anim-reveal") &&
            !element.classList.contains("hero")
          ) {
            element.classList.add("anim-reveal");
          }

          revealElements.push(element);
        });
    });


    /* Hero con efecto diferente */

    const hero = document.querySelector(".hero");

    if (hero) {
      hero.classList.add("anim-scale");
    }


    /* IntersectionObserver */

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("is-visible");

              revealObserver.unobserve(
                entry.target
              );
            }
          });

        },
        {
          threshold: .12,
          rootMargin: "0px 0px -50px 0px"
        }
      );


    revealElements.forEach(element => {

      revealObserver.observe(element);

    });


    if (hero) {
      revealObserver.observe(hero);
    }


    /* =========================================================
       4. ANIMACIÓN ESCALONADA DE TARJETAS
       ========================================================= */

    const cardGroups = [
      ".summarygrid",
      ".methodgrid",
      ".variablesGrid"
    ];

    cardGroups.forEach(selector => {

      document
        .querySelectorAll(selector)
        .forEach(group => {

          const children =
            group.children;

          Array.from(children).forEach(
            (child, index) => {

              child.style.transitionDelay =
                `${index * 80}ms`;

            }
          );

        });

    });


    /* =========================================================
       5. PUNTO ANIMADO DEL HERO
       ========================================================= */

    const possibleDots = [
      ".hero-dot",
      ".dot",
      ".status-dot",
      ".live-dot"
    ];

    possibleDots.forEach(selector => {

      document
        .querySelectorAll(selector)
        .forEach(dot => {

          dot.classList.add(
            "hero-dot-animated"
          );

        });

    });


    /* =========================================================
       6. ANIMACIÓN DEL RELOJ
       ========================================================= */

    const clock =
      document.getElementById(
        "clockDisplay"
      );

    if (clock) {

      let previousValue =
        clock.textContent;

      const clockObserver =
        new MutationObserver(() => {

          const currentValue =
            clock.textContent;

          if (
            currentValue !== previousValue
          ) {

            clock.classList.remove(
              "clock-tick"
            );

            void clock.offsetWidth;

            clock.classList.add(
              "clock-tick"
            );

            previousValue =
              currentValue;
          }

        });

      clockObserver.observe(
        clock,
        {
          childList: true,
          subtree: true,
          characterData: true
        }
      );
    }


    /* =========================================================
       7. ANIMACIÓN DE BOTONES AL HACER CLICK
       ========================================================= */

    document.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            ".btn, .tbtn"
          );

        if (!button) return;

        button.classList.remove(
          "dynamic-update"
        );

        void button.offsetWidth;

        button.classList.add(
          "dynamic-update"
        );

      }
    );


    /* =========================================================
       8. RESULTADOS DINÁMICOS
       ========================================================= */

    const dynamicContainers = [
      "#methodgrid1",
      "#methodgrid2",
      "#methodgrid3",
      "#lu1",
      "#summaryGrid",
      "#variablesGrid",
      "#comparisonTbody"
    ];


    function animateDynamicElement(
      element
    ) {

      if (
        !element ||
        element.nodeType !== 1
      ) {
        return;
      }

      element.classList.remove(
        "dynamic-update"
      );

      void element.offsetWidth;

      element.classList.add(
        "dynamic-update"
      );
    }


    dynamicContainers.forEach(selector => {

      const container =
        document.querySelector(selector);

      if (!container) return;

      const observer =
        new MutationObserver(
          mutations => {

            mutations.forEach(
              mutation => {

                mutation.addedNodes.forEach(
                  node => {

                    if (
                      node.nodeType === 1
                    ) {

                      animateDynamicElement(
                        node
                      );

                      node
                        .querySelectorAll(
                          ".resultblock, .sumcard, .methodcard, .variable-card"
                        )
                        .forEach(
                          child => {

                            animateDynamicElement(
                              child
                            );

                          }
                        );
                    }

                  }
                );

              }
            );

          }
        );

      observer.observe(
        container,
        {
          childList: true,
          subtree: true
        }
      );

    });


    /* =========================================================
       9. EFECTO DE PULSO PARA RESULTADOS IMPORTANTES
       ========================================================= */

    function highlightImportantResults() {

      const selectors = [
        ".resultblock strong",
        ".result-value",
        ".summary-value",
        ".metric-value"
      ];

      selectors.forEach(selector => {

        document
          .querySelectorAll(selector)
          .forEach(element => {

            element.style.transition =
              "transform .25s ease";

            element.addEventListener(
              "mouseenter",
              () => {

                element.style.transform =
                  "scale(1.04)";

              }
            );

            element.addEventListener(
              "mouseleave",
              () => {

                element.style.transform =
                  "scale(1)";

              }
            );

          });

      });

    }

    highlightImportantResults();


    /* =========================================================
       10. ANIMACIÓN DE FILAS DE TABLA
       ========================================================= */

    function animateTableRows() {

      document
        .querySelectorAll(
          "#comparisonTbody tr"
        )
        .forEach((row, index) => {

          row.style.opacity = "0";
          row.style.transform =
            "translateX(-15px)";

          row.style.transition =
            `opacity .45s ease ${index * 70}ms,
             transform .45s ease ${index * 70}ms`;

          requestAnimationFrame(() => {

            row.style.opacity = "1";
            row.style.transform =
              "translateX(0)";

          });

        });

    }

    animateTableRows();


    /* =========================================================
       11. DETAILS / HISTORIAL
       ========================================================= */

    document
      .querySelectorAll("details")
      .forEach(details => {

        details.addEventListener(
          "toggle",
          () => {

            if (!details.open) return;

            const content =
              details.querySelector(
                ":scope > *:not(summary)"
              );

            if (!content) return;

            content.animate(
              [
                {
                  opacity: 0,
                  transform:
                    "translateY(-8px)"
                },
                {
                  opacity: 1,
                  transform:
                    "translateY(0)"
                }
              ],
              {
                duration: 350,
                easing:
                  "cubic-bezier(.22,1,.36,1)"
              }
            );

          }
        );

      });


    /* =========================================================
       12. NAVEGACIÓN SUAVE
       ========================================================= */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          event => {

            const id =
              link.getAttribute("href");

            if (
              !id ||
              id === "#"
            ) {
              return;
            }

            const target =
              document.querySelector(id);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        );

      });


    /* =========================================================
       13. NAVEGACIÓN ACTIVA SEGÚN SECCIÓN
       ========================================================= */

    const sections =
      document.querySelectorAll(
        "section[id], div[id]"
      );

    const navLinks =
      document.querySelectorAll(
        'nav a[href^="#"], .nav a[href^="#"]'
      );


    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return;
            }

            const id =
              entry.target.id;

            navLinks.forEach(link => {

              const href =
                link.getAttribute("href");

              link.classList.toggle(
                "active-section",
                href === `#${id}`
              );

            });

          });

        },
        {
          threshold: .35
        }
      );


    sections.forEach(section => {

      sectionObserver.observe(section);

    });


    /* =========================================================
       14. ESTILO PARA NAVEGACIÓN ACTIVA
       ========================================================= */

    const activeStyle =
      document.createElement("style");

    activeStyle.textContent = `
      nav a.active-section,
      .nav a.active-section {
        font-weight: 700;
      }

      nav a.active-section::after,
      .nav a.active-section::after {
        width: 100%;
      }
    `;

    document.head.appendChild(
      activeStyle
    );


    /* =========================================================
       15. ANIMACIÓN DE INPUTS
       ========================================================= */

    document
      .querySelectorAll(
        "input, select, textarea"
      )
      .forEach(input => {

        input.addEventListener(
          "focus",
          () => {

            input.animate(
              [
                {
                  transform:
                    "translateY(0)"
                },
                {
                  transform:
                    "translateY(-2px)"
                }
              ],
              {
                duration: 180,
                easing: "ease-out",
                fill: "forwards"
              }
            );

          }
        );

        input.addEventListener(
          "blur",
          () => {

            input.animate(
              [
                {
                  transform:
                    "translateY(-2px)"
                },
                {
                  transform:
                    "translateY(0)"
                }
              ],
              {
                duration: 180,
                easing: "ease-out",
                fill: "forwards"
              }
            );

          }
        );

      });


    /* =========================================================
       16. EFECTO PARALLAX MUY SUAVE PARA EL HERO
       ========================================================= */

    if (hero) {

      window.addEventListener(
        "scroll",
        () => {

          const scroll =
            window.scrollY;

          if (scroll > 800) {
            return;
          }

          hero.style.transform =
            `translateY(${scroll * .08}px)`;

        },
        {
          passive: true
        }
      );

    }


    /* =========================================================
       17. OBSERVADOR PARA ELEMENTOS AGREGADOS DINÁMICAMENTE
       ========================================================= */

    const bodyObserver =
      new MutationObserver(
        mutations => {

          mutations.forEach(
            mutation => {

              mutation.addedNodes.forEach(
                node => {

                  if (
                    node.nodeType !== 1
                  ) {
                    return;
                  }

                  const elements = [
                    node,
                    ...node.querySelectorAll(
                      ".card, .resultblock, .sumcard, .methodcard, .variable-card"
                    )
                  ];

                  elements.forEach(
                    element => {

                      if (
                        element.classList.contains(
                          "anim-reveal"
                        )
                      ) {
                        return;
                      }

                      element.classList.add(
                        "anim-reveal"
                      );

                      revealObserver.observe(
                        element
                      );

                    }
                  );

                }
              );

            }
          );

        }
      );


    bodyObserver.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );


    /* =========================================================
       18. INICIO
       ========================================================= */

    document.body.classList.add(
      "animations-loaded"
    );

    console.log(
      "✓ Sistema de animaciones cargado correctamente."
    );

  });

})();
