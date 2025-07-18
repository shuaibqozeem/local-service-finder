// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const serviceType = document.getElementById('serviceType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const address = document.getElementById('address').value;
    const notes = document.getElementById('notes').value;

    const bookingData = { serviceType, date, time, address, notes };

    try {
        const response = await fetch('/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (err) {
        console.error('Error booking service:', err);
    }
});


// Live Chat Functionality
const chatBox = document.getElementById('chatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', async function () {
    const message = chatInput.value.trim();

    if (message) {
        const userMessage = document.createElement('p');
        userMessage.textContent = `User: ${message}`;
        messages.appendChild(userMessage);
        chatInput.value = '';

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const result = await response.json();
            const adminReply = document.createElement('p');
            adminReply.textContent = result.reply;
            messages.appendChild(adminReply);
        } catch (err) {
            console.error('Error in live chat:', err);
        }
    }
});
