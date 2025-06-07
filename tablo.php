<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Табло таймера</title>
    <style>
        body { background: black; color: lime; font-family: monospace; font-size: 100px; text-align: center; margin: 0; padding: 0; height: 100vh; display: flex; justify-content: center; align-items: center; }
    </style>
</head>
<body>
<div id="timer">10:00</div>
<script src="timer.js"></script>
</body>
</html>