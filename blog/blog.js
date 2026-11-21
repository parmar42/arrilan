(function () {
    var btn = document.getElementById('mobile-menu-btn');
    var close = document.getElementById('mobile-menu-close');
    var menu = document.getElementById('mobile-menu');
    var scrim = document.getElementById('overlay');
    if (!btn || !menu) return;
    function set(open) {
        menu.classList.toggle('active', open);
        scrim.classList.toggle('active', open);
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) close.focus(); else btn.focus();
    }
    btn.addEventListener('click', function () { set(true); });
    close.addEventListener('click', function () { set(false); });
    scrim.addEventListener('click', function () { set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('active')) set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1000 && menu.classList.contains('active')) set(false); });
})();
