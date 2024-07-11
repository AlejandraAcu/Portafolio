const langToggle = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('ingles.html');
langToggle.checked = currentLang;
function changeLang() {
    langToggle.addEventListener('change', () => {
        if (langToggle.checked) {
            window.location.href = 'ingles.html';
        } else {
            window.location.href = 'index.html';
        }
    });
}
export default changeLang;