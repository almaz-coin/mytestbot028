<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Форма управления таймером</title>
    <style>
        body { font-family: Arial; text-align: center; padding-top: 50px; }
        #timer { font-size: 48px; margin: 20px; }
        button { font-size: 18px; padding: 10px 20px; margin: 5px; }
    </style>
</head>
<body>

<h1>Таймер обратного отсчёта</h1>
<div id="timer">10:00</div>

<button onclick="startTimer()">Старт</button>
<button onclick="pauseTimer()">Пауза</button>
<button onclick="resetTimer()">Сброс</button>

<script src="timer.js"></script>

</body>
</html>