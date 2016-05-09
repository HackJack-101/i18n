var int;

function changeLanguage(locale) {
    int.translate(locale);
}

window.addEventListener('load', function () {
    int = new i18n();
    int.translate();
    document.getElementById("language").addEventListener("click", function (e) {
        e.preventDefault();
        int.switchLocale();
    });
});
