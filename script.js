document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const messageText = inputElement.value.trim();

    if (messageText === '') return; // Don't send empty messages

    // 1. Display User Message
    appendMessage(messageText, 'user-message');
    inputElement.value = ''; // Clear input field

    // 2. Simulate Bot Thinking & Response
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        appendMessage(botResponse, 'bot-message');
    }, 800); // 0.8-second delay for realism
}

function appendMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    
    messageDiv.classList.add('message', className);
    messageDiv.innerText = text;
    
    chatBox.appendChild(messageDiv);
    
    // Automatically scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple rule-based logic for the bot's answers
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) {
        return "Hey there! Hope you're having a great day.";
    } else if (msg.includes('how are you')) {
        return "I'm doing great, just living inside a browser! How about you?";
    } else if (msg.includes('help')) {
        return "I can answer basic greetings or just chat. Try saying 'hi' or 'how are you'.";
    } else {
        return "That's interesting! I'm still learning, so I'm not quite sure how to reply to that yet.";
    }
}