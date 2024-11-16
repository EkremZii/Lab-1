// Initial variables
let balance = 10000;
const correctPin = "1234";
const correctUserId = "Ekrem";

// Function to check the withdrawal request
function checkWithdrawal() {
    const userId = document.getElementById("user-id").value;
    const pin = document.getElementById("pin").value;
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);

    // Check if the user ID and PIN are correct
    if (userId !== correctUserId) {
        showPopup("Invalid User ID");
        return;
    }

    if (pin !== correctPin) {
        showPopup("Invalid PIN Code");
        return;
    }

    // Validate the withdrawal amount
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        showPopup("Please enter a valid withdrawal amount");
        return;
    }

    // Check if the balance is sufficient
    if (withdrawAmount > balance) {
        showPopup("Insufficient funds");
    } else {
        balance -= withdrawAmount;
        showPopup(`Withdrawal successful! New balance: $${balance.toFixed(2)}`);
        updateBalance();
    }
}

// Function to display the popup message
function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.classList.remove("hidden"); // Show the popup

    // Hide popup after 3 seconds
    setTimeout(function() {
        popup.classList.add("hidden"); // Hide the popup after 3 seconds
    }, 3000); 
}

// Update the balance shown on the screen
function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = balance.toFixed(2); // Display the balance with two decimal places
}

// Close the popup when the close button is clicked
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden"); // Hide the popup when the close button is clicked
}

// Hide the popup initially (in case it was shown earlier)
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden"); // Ensure the popup is hidden on page load
});
