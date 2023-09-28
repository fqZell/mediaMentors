// Получаем элементы
const animationContainer = document.querySelector('.animation-container');
const preview = document.querySelector('.preview');

// Функция, которая будет выполняться при скролле
function handleScroll() {
    const scrollPosition = window.scrollY;
    const opacity = 1 - (scrollPosition / (window.innerHeight * 0.3)); // Регулируйте этот коэффициент по своему усмотрению

    // Применяем изменение стиля
    animationContainer.style.opacity = opacity < 0 ? '0' : opacity.toString();
}

// Добавляем обработчик события при скролле
window.addEventListener('scroll', handleScroll);

// После загрузки страницы, через некоторое время, устанавливаем начальное состояние
window.addEventListener('load', () => {
    setTimeout(() => {
        handleScroll(); // Вызываем обработчик скролла для установки начальной прозрачности
    }, 0); // 2000 миллисекунд (2 секунды)
});
