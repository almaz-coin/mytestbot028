<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'get') {
        echo json_encode([
            'time_left' => $_SESSION['timer_time_left'] ?? 600,
            'running' => $_SESSION['timer_running'] ?? false,
        ]);
        exit;
    }

    if ($action === 'set') {
        $time_left = (int)($_POST['time_left'] ?? 600);
        $running = filter_var($_POST['running'], FILTER_VALIDATE_BOOLEAN);
        $_SESSION['timer_time_left'] = $time_left;
        $_SESSION['timer_running'] = $running;
        echo json_encode(['status' => 'ok']);
        exit;
    }
}
?>