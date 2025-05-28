const sendButton = document.getElementById('send-btn');
const emojiButton = document.getElementById('emoji-btn');
const attachButton = document.getElementById('attach-btn');
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const inputField = document.getElementById('message-field');
const messages = document.querySelector('.messages');

// Toggle menu visibility
menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Send message
sendButton.addEventListener('click', () => {
  const messageText = inputField.value.trim();
  if (messageText) {
    const newMessage = document.createElement('div');
    newMessage.className = 'message sent';
    newMessage.textContent = messageText;
    messages.appendChild(newMessage);
    inputField.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
});

// Add emoji
emojiButton.addEventListener('click', () => {
  inputField.value += '😊';
});

// Attach file (placeholder functionality)
attachButton.addEventListener('click', () => {
  alert('Attach file feature coming soon!');
});
