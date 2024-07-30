<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery Delivery Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin: 10px 0 5px;
            font-weight: bold;
        }
        input, select, textarea {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        button {
            padding: 15px;
            background-color: #28a745;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            display: none;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Grocery Delivery Application</h1>
    <form id="grocery-form">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required>

        <label for="address">Delivery Address</label>
        <textarea id="address" name="address" rows="4" required></textarea>

        <label for="groceries">Grocery List</label>
        <textarea id="groceries" name="groceries" rows="6" placeholder="Enter your grocery list here..." required></textarea>

        <label for="delivery-time">Preferred Delivery Time</label>
        <select id="delivery-time" name="delivery-time" required>
            <option value="">Select a time...</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
        </select>

        <button type="submit">Submit Order</button>
    </form>
    <div id="message" class="message"></div>
</div>

<script>
    document.getElementById('grocery-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Form Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const groceries = document.getElementById('groceries').value;
        const deliveryTime = document.getElementById('delivery-time').value;

        if (name && email && address && groceries && deliveryTime) {
            // Display success message
            const messageDiv = document.getElementById('message');
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Your order has been successfully submitted!';
            messageDiv.style.display = 'block';

            // Clear the form
            document.getElementById('grocery-form').reset();
        } else {
            // Display error message
            const messageDiv = document.getElementById('message');
            messageDiv.className = 'message error';
            messageDiv.textContent = 'Please fill in all fields before submitting!';
            messageDiv.style.display = 'block';
        }
    });
</script>

</body>
</html>
