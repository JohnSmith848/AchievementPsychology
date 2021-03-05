<?php
echo "get test";
$name = $_POST['testee-name'];
$email = $_POST['testee-email'];
$privacyAgreement = $_POST['privacy-аgreement'];
echo "Имя тестируемого: ";
echo $name;
echo "Адрес электронной почты тестируемого: ";
echo $email;
echo "Согласие с политикой конфиденциальности: ";
echo $privacyAgreement;

?>
