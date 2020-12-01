<?php 

require('mail.php');


$email = 'info@cleveru.ru';

if (!empty($_POST)) {
    $post = $_POST;

    $mail = new Mail();

    if (isset($post['aplication__type'])) {
        // sending form
        $type = $post['aplication__type'];


        if (isset($post['aplication__type'])) {
            $type = $post['aplication__type'];
        } else {
            $type = false;
        }

        if (isset($post['form-header__area'])) {
            $area = $post['form-header__area'];
        } else {
            $area = false;
        }

        if (isset($post['aplication__room'])) {
            $rooms = $post['aplication__room'];
        } else {
            $rooms = false;
        }

        if (isset($post['aplication__name'])) {
            $name = $post['aplication__name'];
        } else {
            $name = false;
        }

        if (isset($post['aplication__phone'])) {
            $phone = $post['aplication__phone'];
        } else {
            $phone = false;
        }

        $html = '';
        $html .= '<div style="max-width: 500px;border: 2px solid #eee;padding: 20px;font-size:14px;">';
        if ($type) {
            $html .= '<div style="padding:5px;"><b>Тип уборки:</b> ' . $type . '</div>';
        }
        if ($area) {
            $html .= '<div style="padding:5px;"><b>Площадь квартиры:</b> ' . $area . '</div>';
        }
        if ($rooms) {
            $html .= '<div style="padding:5px;"><b>Кол-во комнат:</b> ' . $rooms . '</div>';
        }
        if ($name) {
            $html .= '<div style="padding:5px;"><b>Имя:</b> ' . $name . '</div>';
        }
        if ($phone) {
            $html .= '<div style="padding:5px;"><b>Телефон:</b> ' . $phone . '</div>';
        }
        $html .= '</div>';


        $mail = new Mail();
        $mail->protocol = 'mail';
        $mail->parameter = '';
        $mail->smtp_hostname = '';
        $mail->smtp_username = '';
        $mail->smtp_password = '';
        $mail->smtp_port = 25;
        $mail->smtp_timeout = 5;

        $mail->setTo($email);
        $mail->setFrom('info@clever.ru');
        $mail->setSender(html_entity_decode('Clever - Клининговая компания', ENT_QUOTES, 'UTF-8'));
        $mail->setSubject(html_entity_decode('Новая заявка с сайта cleveru.ru', ENT_QUOTES, 'UTF-8'));
        $mail->setHtml($html);
        $mail->send();
    } elseif (isset($post['calculator'])) {
        if (isset($post['area'])) {
            $area = $post['area'];
        } else {
            $area = false;
        }

        if (isset($post['rooms'])) {
            $rooms = $post['rooms'];
        } else {
            $rooms = false;
        }

        if (isset($post['cleaning'])) {
            $cleaning_price = $post['cleaning'];
        } else {
            $cleaning_price = false;
        }

        if (isset($post['type'])) {
            $type = $post['type'];
        } else {
            $type = false;
        }

        if (isset($post['total'])) {
            $total = $post['total'];
        } else {
            $total = false;
        }

        if (isset($post['services'])) {
            $services = $post['services'];
        } else {
            $services = false;
        }

        if (isset($post['name'])) {
            $name = $post['name'];
        } else {
            $name = false;
        }

        if (isset($post['phone'])) {
            $phone = $post['phone'];
        } else {
            $phone = false;
        }

        $html = '';
        $html .= '<div style="max-width: 500px;border: 2px solid #eee;padding: 20px;font-size:14px;">';
        if ($name) {
            $html .= '<div style="padding:5px;"><b>Имя:</b> ' . $name . '</div>';
        }
        if ($phone) {
            $html .= '<div style="padding:5px;"><b>Телефон:</b> ' . $phone . '</div>';
        }
        if ($type) {
            $html .= '<div style="padding:5px;"><b>Тип уборки:</b> ' . $type . '</div>';
        }
        if ($area) {
            $html .= '<div style="padding:5px;"><b>Площадь квартиры:</b> ' . $area . ' м2</div>';
        }
        if ($rooms) {
            $html .= '<div style="padding:5px;"><b>Кол-во комнат:</b> ' . $rooms . '</div>';
        }
        if ($cleaning_price) {
            $html .= '<div style="padding:5px 5px 20px 5px;"><b>Стоимость уборки:</b> ' . $cleaning_price . '</div>';
        }

        if ($services) {
            foreach ($services as $service) {
                if ($service['item']['quantity'] != 'auto') {
                    $quantity = '(кол-во: ' .  $service['item']['quantity'] . ')';
                } else {
                    $quantity = '';
                }
                $html .= '<div style="padding:3px 5px;font-size:12px;"><b>' . $service['item']['name'] . ':</b> ' . $service['item']['price'] . ' ' . $quantity . '</div>';
            }
        }

        if ($total) {
            $html .= '<div style="padding:30px 5px 5px 5px;font-size:16px;font-weight:bold"><b>Итого</b> ' . $total . '</div>';
        }

        $html .= '</div>';

        $mail = new Mail();
        $mail->protocol = 'mail';
        $mail->parameter = '';
        $mail->smtp_hostname = '';
        $mail->smtp_username = '';
        $mail->smtp_password = '';
        $mail->smtp_port = 25;
        $mail->smtp_timeout = 5;

        $mail->setTo($email);
        $mail->setFrom('info@clever.ru');
        $mail->setSender(html_entity_decode('Clever - Клининговая компания', ENT_QUOTES, 'UTF-8'));
        $mail->setSubject(html_entity_decode('Новая заявка с сайта cleveru.ru', ENT_QUOTES, 'UTF-8'));
        $mail->setHtml($html);
        $mail->send();
    }
}