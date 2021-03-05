<?php
echo "callback";
$name = $_POST['inquirer-name'];
$email = $_POST['inquirer-email'];
$question = $_POST['question'];
$privacyAgreement = $_POST['privacy-agreement'];

echo "Имя спрашивающего: ";
echo $name;
echo "Адрес электронной почты спрашивающего: ";
echo $email;
echo "Вопрос: ";
echo $question;
echo "Согласие с политикой конфиденциальности: ";
echo $privacyAgreement;

?>
