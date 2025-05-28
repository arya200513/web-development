document.addEventListener("DOMContentLoaded", () => {
    const socket = io(); // Initialize Socket.IO connection
    const chatBody = document.getElementById("chat-body");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    // Send a message
    sendButton.addEventListener("click", () => {
      const message = messageInput.value.trim();
      if (message) {
        const data = { sender: "You", text: message };
        socket.emit("sendMessage", data); // Send message to server
        appendMessage(data, true); // Append to chat
        messageInput.value = "";
      }
    });
  
    // Receive a message
    socket.on("receiveMessage", (data) => {
      appendMessage(data, false);
    });
  
    // Function to append a message
    function appendMessage(data, isSender) {
      const messageDiv = document.createElement("div");
      messageDiv.textContent = `${data.sender}: ${data.text}`;
      messageDiv.style.margin = "10px 0";
      messageDiv.style.padding = "10px";
      messageDiv.style.borderRadius = "8px";
      messageDiv.style.maxWidth = "70%";
      messageDiv.style.backgroundColor = isSender ? "#25d366" : "#fff";
      messageDiv.style.color = isSender ? "white" : "black";
      messageDiv.style.alignSelf = isSender ? "flex-end" : "flex-start";
  
      chatBody.appendChild(messageDiv);
      chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    }
  });
  