<?php
// Validate and process the form submission

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $productName = $_POST["productName"];
    $quantity = $_POST["quantity"];
    $bankAccount = $_POST["bankAccount"];
    
    // Save order information to a file or database
    $orderDetails = "Product: $productName, Quantity: $quantity, Bank Account: $bankAccount, Time: " . date("Y-m-d H:i:s") . "\n";
    
    // Append to a file (for simplicity, you can save to a database in a real application)
    $file = 'orders.txt';
    file_put_contents($file, $orderDetails, FILE_APPEND | LOCK_EX);
    
    // Display confirmation message to the user
    echo "<h2>Thank you for your purchase!</h2>";
    echo "<p>You ordered $quantity units of $productName.</p>";
    echo "<p>We have received your payment details.</p>";
    echo "<p>You will be contacted shortly for further processing.</p>";
}
?>
