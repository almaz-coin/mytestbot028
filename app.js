// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Включаем основную кнопку
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user || {};
const initData = tg.initDataUnsafe || {};

// Функция для обновления информации на странице
function updateUserInfo() {
    // Обновляем информацию о пользователе
    document.getElementById('userId').textContent = user.id || 'Не доступно';
    document.getElementById('firstName').textContent = user.first_name || 'Не доступно';
    document.getElementById('lastName').textContent = user.last_name || 'Не доступно';
    document.getElementById('username').textContent = user.username || 'Не доступно';
    document.getElementById('languageCode').textContent = user.language_code || 'Не доступно';
    
    // Получаем информацию о теме
    const colorScheme = tg.colorScheme;
    document.getElementById('colorScheme').textContent = colorScheme || 'Не доступно';
    
    // Получаем информацию о платформе
    const platform = tg.platform;
    document.getElementById('platform').textContent = platform || 'Не доступно';
}

// Вызываем функцию обновления информации при загрузке страницы
document.addEventListener('DOMContentLoaded', updateUserInfo);

// Обработчик изменения темы
tg.onEvent('themeChanged', updateUserInfo); 