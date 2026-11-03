(function () {
  const root = document.querySelector(".mn-site");
  if (!root) return;

  // --- 1. GSAP Scroll Animations ---
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const targets = root.querySelectorAll(
      ".mn-section__intro, .mn-feature-card, .mn-character-card, .mn-story-card, .mn-contact-panel, .mn-form, .mn-music-feature, .mn-track-card"
    );

    targets.forEach((target) => {
      // Set initial state
      gsap.set(target, { y: 30, opacity: 0 });

      // Create scroll animation
      gsap.to(target, {
        scrollTrigger: {
          trigger: target,
          start: "top 85%", // Trigger when the top of element hits 85% down the viewport
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    });
    
    // Parallax effect on hero scene when scrolling
    const heroScene = root.querySelector(".mn-hero__scene");
    if (heroScene) {
      gsap.to(heroScene, {
        scrollTrigger: {
          trigger: ".mn-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
        rotationX: 10,
        ease: "none"
      });
    }
  }

  // --- 2. Mouse Parallax Effect ---
  const hero = root.querySelector(".mn-hero");
  const glows = root.querySelectorAll(".mn-hero__glow");
  const scene = root.querySelector(".mn-hero__scene");
  const chars = root.querySelectorAll(".mn-neighbor");

  if (hero && window.matchMedia("(hover: hover)").matches) {
    hero.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

      if (typeof gsap !== "undefined") {
        gsap.to(glows[0], { x: x * 30, y: y * 30, duration: 1, ease: "power2.out" });
        gsap.to(glows[1], { x: x * -40, y: y * -40, duration: 1, ease: "power2.out" });
        if (scene) gsap.to(scene, { x: x * -15, y: y * -15, rotationY: -7 + x * 5, rotationX: 3 - y * 5, duration: 1, ease: "power2.out" });
        
        chars.forEach((char, i) => {
           const mult = i % 2 === 0 ? 1 : -1;
           gsap.to(char, { x: x * 20 * mult, y: y * 20 * mult, duration: 1.5, ease: "power2.out" });
        });
      }
    });
  }

  // --- 3. Particles Canvas ---
  const canvas = document.getElementById("mn-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let width, height;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * -0.5 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }
      draw() {
        ctx.fillStyle = `rgba(255, 242, 210, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(width * height / 15000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    };

    initParticles();
    animateParticles();
  }
})();
