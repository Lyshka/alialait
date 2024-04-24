<?php

$email = "lesha_novitskiy@mail.ru";

// Проверяем, является ли запрос методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем значение параметра formName
    if ($_POST['formName'] === 'formBlock') {
        // Получаем значения полей tel и message из POST запроса
        $tel = $_POST['tel'];
        $message = $_POST['message'];

        // Отправляем значения на почту
        $to = $email;
        $subject = 'Новое сообщение с формы "Оставить заявку"';
        $body = "Телефон: $tel\n\nСообщение: $message";
        $headers = "From: " . $email;

        if (mail($to, $subject, $body, $headers)) {
            // Возвращаем успешный JSON ответ
            echo json_encode(['success' => true]);
        } else {
            // Возвращаем ошибку JSON ответ
            echo json_encode(['success' => false, 'error' => 'Не удалось отправить сообщение']);
        }
    } elseif ($_POST['formName'] === 'orderForm') {
        // Получаем значения полей name и tel из POST запроса
        $name = $_POST['name'];
        $tel = $_POST['tel'];

        // Отправляем значения на почту
        $to = $email;
        $subject = 'Новая заявка с формы "Заказать звонок"';
        $body = "Имя: $name\n\nТелефон: $tel";
        $headers = "From: " . $email;

        if (mail($to, $subject, $body, $headers)) {
            // Возвращаем успешный JSON ответ
            echo json_encode(['success' => true]);
        } else {
            // Возвращаем ошибку JSON ответ
            echo json_encode(['success' => false, 'error' => 'Не удалось отправить заявку']);
        }
    } else {
        // Возвращаем ошибку JSON ответ, если значение formName не найдено
        echo json_encode(['success' => false, 'error' => 'Неверное значение formName']);
    }
} else {
    // Возвращаем ошибку JSON ответ, если запрос не является методом POST
    echo json_encode(['success' => false, 'error' => 'Метод запроса должен быть POST']);
}
