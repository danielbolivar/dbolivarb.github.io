(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("language"); } catch (e) {}
  var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  var lang = saved === "en" || saved === "es" ? saved : (nav === "es" ? "es" : "en");

  function apply(l) {
    lang = l;
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    var t = root.getAttribute("data-title-" + l);
    if (t) document.title = t;
    var btn = document.querySelector(".lang");
    if (btn) {
      btn.textContent = l === "en" ? "ES" : "EN";
      btn.setAttribute("aria-label", l === "en" ? "Ver en español" : "View in English");
    }
  }

  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    var btn = document.querySelector(".lang");
    if (!btn) return;
    btn.addEventListener("click", function () {
      apply(lang === "en" ? "es" : "en");
      try { localStorage.setItem("language", lang); } catch (e) {}
    });
  });
})();
