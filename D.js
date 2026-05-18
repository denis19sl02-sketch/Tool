// НАПИСАННЫЙ СКРИПТ НА JS ДЛЯ КАЛЬКУЛЯТОРА

// 1. Создаем функцию инициализации калькулятора
function initCalculator() {
    const display = document.getElementById('display');
    // Находим абсолютно все кнопки внутри блока .buttons
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            // Если нажали "C" — очищаем экран
            if (buttonText === 'C') {
                display.value = '';
            } 
            // Если нажали "=" — берем строку (например, 2*2) и выдаем решение
            else if (buttonText === '=') {
                try {
                    if (display.value !== '') {
                        // Магический движок eval берет строку и решает ее
                        display.value = eval(display.value);
                    }
                } catch (error) {
                    display.value = 'Error'; // Если ввели бред
                }
            } 
            // Если нажали "×", меняем символ на "*" для математического движка
            else if (buttonText === '×') {
                display.value += '*';
            }
            // Для всех остальных кнопок (цифры, +, -, /) просто дописываем их на экран
            else {
                display.value += buttonText;
            }
        });
    });
}

// 2. Запускаем этот скрипт сразу после загрузки страницы
document.addEventListener('DOMContentLoaded', initCalculator);
