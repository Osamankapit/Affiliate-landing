(function () {
  var cfg = window.SITE_CONFIG || {};
  var fb = (cfg.fbPixelId || '').trim();
  var ga = (cfg.googleTagId || '').trim();

  // --- Inject Google tag, only if an ID is set in config.js ---
  if (ga) {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ga);
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga);
  }

  // --- Inject Meta Pixel, only if an ID is set in config.js ---
  if (fb) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', fb);
    window.fbq('track', 'PageView');

    var noscript = document.createElement('noscript');
    var img = document.createElement('img');
    img.height = 1; img.width = 1; img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=' + encodeURIComponent(fb) + '&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Scroll-reveal for sections
    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      items.forEach(function (el) { observer.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Fire a lead event on every affiliate CTA click. Does not block navigation.
    var ctas = document.querySelectorAll('[data-cta="affiliate"]');
    ctas.forEach(function (el) {
      el.addEventListener('click', function () {
        try { if (typeof window.fbq === 'function') { window.fbq('track', 'Lead'); } } catch (e) {}
        try { if (typeof window.gtag === 'function') { window.gtag('event', 'generate_lead'); } } catch (e) {}
      });
    });
  });
})();
