// СКРИПТ НА JS ДЛЯ СВАЙПА СТРАНИЦЫ ПАЛЬЦЕМ (ВВЕРХ / ВНИЗ)

document.addEventListener('DOMContentLoaded', () => {
    // Переменная, где хранится точка первого касания пальца
    let touchStartY = 0;
    let touchEndY = 0;

    // Минимальная длина свайпа в пикселях, чтобы страница не дергалась от случайных микро-касаний
    const minSwipeDistance = 50; 

    // 1. Фиксируем, где палец коснулся экрана
    document.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
    }, { passive: true });

    // 2. Фиксируем, где палец оторвался от экрана
    document.addEventListener('touchend', (event) => {
        touchEndY = event.changedTouches[0].clientY;
        
        // Запускаем расчет направления движения
        handleSwipe();
    }, { passive: true });

    // 3. Логика определения свайпа и прокрутки
    function handleSwipe() {
        const distance = touchStartY - touchEndY;

        // Если свайпнули ПАЛЬЦЕМ ВВЕРХ -> экран крутится ВНИЗ
        if (distance > minSwipeDistance) {
            window.scrollBy({
                top: window.innerHeight * 0.8, // Прокрутка на 80% высоты экрана
                behavior: 'smooth'            // Плавный переход (без рывков)
            });
            console.log("Свайп пальцем вверх -> Прокрутка вниз");
        }
        
        // Если свайпнули ПАЛЬЦЕМ ВНИЗ -> экран крутится ВВЕРХ
        else if (distance < -minSwipeDistance) {
            window.scrollBy({
                top: -window.innerHeight * 0.8, // Поднимаем экран вверх
                behavior: 'smooth'
            });
            console.log("Свайп пальцем вниз -> Прокрутка вверх");
        }
    }
});
