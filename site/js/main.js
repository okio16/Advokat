// JS на сайта: мобилно меню, слайдер, анимации при скрол (Motion), въпроси и форма.
// Ако Motion (js/motion.js) не се зареди, всичко се показва веднага – нищо не остава скрито.
(function () {
  var root = document.documentElement;
  var M = window.Motion;
  var animated = root.classList.contains("motion") && M && M.animate && M.inView;
  var EASE = [0.23, 1, 0.32, 1];

  // ---------- Появяване на елементите ----------
  var revealAll = function () {
    document.querySelectorAll("[data-reveal], [data-stagger], [data-hero]").forEach(function (el) {
      el.style.opacity = 1;
    });
  };

  if (!animated) {
    root.classList.remove("motion");
  } else {
    // Началният екран: заглавие, текст и бутони един след друг
    var hero = document.querySelectorAll("[data-hero]");
    if (hero.length) {
      M.animate(hero, { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: M.stagger(0.08, { startDelay: 0.1 }), ease: EASE });
    }

    // Скриват се само елементите под екрана при зареждане – видимото не мига и не изчезва
    var below = function (el) {
      return el.getBoundingClientRect().top > window.innerHeight;
    };

    // Отделни блокове – веднъж, когато влязат в екрана
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      if (!below(el)) return;
      el.style.opacity = 0;
      M.inView(el, function () {
        M.animate(el, { opacity: [0, 1], y: [24, 0] }, { duration: 0.6, ease: EASE });
      });
    });

    // Групи (карти, въпроси, колони във футъра) – един след друг, по 70ms
    var groups = new Map();
    document.querySelectorAll("[data-stagger]").forEach(function (el) {
      var parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });
    groups.forEach(function (items, parent) {
      if (!below(parent)) return;
      items.forEach(function (el) {
        el.style.opacity = 0;
      });
      M.inView(parent, function () {
        M.animate(items, { opacity: [0, 1], y: [20, 0] }, { duration: 0.55, delay: M.stagger(0.07), ease: EASE });
      });
    });

    // При печат всичко се показва
    window.addEventListener("beforeprint", revealAll);
  }
  if (!animated) revealAll();

  // ---------- Сянка на хедъра при скрол ----------
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Мобилно меню ----------
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    var icon = toggle.querySelector("i");
    var isOpen = function () {
      return nav.classList.contains("open");
    };
    var setOpen = function (open, focusToggle) {
      nav.classList.toggle("open", open);
      root.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", toggle.getAttribute(open ? "data-close-label" : "data-open-label"));
      icon.className = open ? "fas fa-xmark" : "fas fa-bars";
      if (open) {
        var first = nav.querySelector("a");
        if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 60);
      } else if (focusToggle) {
        toggle.focus({ preventScroll: true });
      }
    };
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!isOpen());
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    // Докосване навсякъде извън менюто го затваря (включително върху затъмнения фон)
    document.addEventListener("click", function (e) {
      if (isOpen() && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    // При завъртане на телефона или разширяване до десктоп менюто се затваря
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (mq) {
      if (mq.matches && isOpen()) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) setOpen(false, true);
    });
    nav.addEventListener("focusout", function (e) {
      if (nav.classList.contains("open") && e.relatedTarget && !nav.contains(e.relatedTarget) && e.relatedTarget !== toggle) setOpen(false);
    });
  }

  // ---------- Слайдер: смяна на 6 секунди, бавно приближаване на снимката, пауза ----------
  var slider = document.querySelector("[data-slider]");
  if (slider) {
    var slides = slider.querySelectorAll(".slide");
    var dots = slider.querySelectorAll(".indicator");
    var pause = slider.querySelector(".slider-pause");
    var current = 0;
    var timer = null;
    var paused = !root.classList.contains("motion");

    var zoom = function (i) {
      if (!animated) return;
      M.animate(slides[i].querySelector("img"), { scale: [1.08, 1] }, { duration: 7, ease: "linear" });
    };
    var show = function (i) {
      slides[current].classList.remove("active");
      slides[current].setAttribute("aria-hidden", "true");
      dots[current].classList.remove("active");
      dots[current].removeAttribute("aria-current");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("active");
      slides[current].removeAttribute("aria-hidden");
      dots[current].classList.add("active");
      dots[current].setAttribute("aria-current", "true");
      zoom(current);
    };
    var start = function () {
      clearInterval(timer);
      if (paused) return;
      timer = setInterval(function () {
        show(current + 1);
      }, 6000);
    };
    var setPaused = function (p) {
      paused = p;
      pause.setAttribute("aria-label", pause.getAttribute(p ? "data-play-label" : "data-pause-label"));
      pause.querySelector("i").className = p ? "fas fa-play" : "fas fa-pause";
      start();
    };
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });
    pause.addEventListener("click", function () {
      setPaused(!paused);
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) clearInterval(timer);
      else start();
    });
    setPaused(paused);
    zoom(0);
  }

  // ---------- Въпроси: отговорът се появява плавно ----------
  if (animated) {
    document.querySelectorAll(".faq details").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open) M.animate(d.querySelector(".faq-body"), { opacity: [0, 1], y: [-6, 0] }, { duration: 0.25, ease: EASE });
      });
    });
  }

  // ---------- Формата: текст за грешка под полето и заключен бутон, докато се изпраща ----------
  document.querySelectorAll(".contact-form").forEach(function (form) {
    var btn = form.querySelector("button[type=submit]");
    var label = btn.querySelector("span").textContent;

    var showError = function (field) {
      var msg = form.querySelector("#" + field.id + "-error");
      if (!msg) {
        msg = document.createElement("p");
        msg.className = "field-error";
        msg.id = field.id + "-error";
        field.insertAdjacentElement("afterend", msg);
        var described = field.getAttribute("aria-describedby");
        field.setAttribute("aria-describedby", described ? described + " " + msg.id : msg.id);
      }
      var bad = !field.validity.valid;
      msg.hidden = !bad;
      msg.textContent = bad ? field.validationMessage : "";
      field.setAttribute("aria-invalid", String(bad));
    };

    form.addEventListener(
      "invalid",
      function (e) {
        showError(e.target);
      },
      true,
    );
    form.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true") showError(e.target);
    });
    form.addEventListener("submit", function () {
      btn.disabled = true;
      btn.querySelector("i").className = "fas fa-spinner fa-spin";
      btn.querySelector("span").textContent = form.getAttribute("data-sending");
    });
    // При връщане назад от страницата на FormSubmit бутонът отново работи
    window.addEventListener("pageshow", function () {
      btn.disabled = false;
      btn.querySelector("i").className = "fas fa-paper-plane";
      btn.querySelector("span").textContent = label;
    });
  });

  // Бутон „Запитване за абонамент“: попълва формата, ако посетителят още не е писал нищо
  document.querySelectorAll("[data-prefill]").forEach(function (link) {
    link.addEventListener("click", function () {
      var form = document.querySelector(".contact-form");
      if (!form) return;
      var box = form.querySelector("textarea[name=message]");
      if (box && !box.value.trim()) box.value = link.getAttribute("data-prefill");
      var subject = form.querySelector("input[name=_subject]");
      if (subject && link.hasAttribute("data-subject")) subject.value = link.getAttribute("data-subject");
    });
  });

  // Годината във футъра
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
