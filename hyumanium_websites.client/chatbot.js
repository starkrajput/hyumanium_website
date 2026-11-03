(function () {
      const chatButton = document.getElementById('chat-button');
      const chatWindow = document.getElementById('chat-window');
      const closeChat = document.getElementById('close-chat');
      const chatInput = document.getElementById('chat-input');
      const sendButton = document.getElementById('send-button');
      const chatMessages = document.getElementById('chat-messages');
      const typingIndicator = document.querySelector('.typing-indicator');

      // Toggle chat window
      chatButton.addEventListener('click', function () {
        chatWindow.classList.add('open');
        chatInput.focus();
      });

      closeChat.addEventListener('click', function () {
        chatWindow.classList.remove('open');
      });

      // Send message function
      function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        typingIndicator.classList.add('active');
        scrollToBottom();

        // Simulate AI response
        setTimeout(function () {
          typingIndicator.classList.remove('active');
          const response = getAIResponse(message);
          addMessage(response, 'bot');
        }, 1500);
      }

      // Add message to chat
      function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + sender;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;

        messageDiv.appendChild(contentDiv);

        // Insert before typing indicator
        chatMessages.insertBefore(messageDiv, typingIndicator.parentElement);
        scrollToBottom();
      }

      // Scroll to bottom of messages
      function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      // Psychology-focused AI response logic
      function getAIResponse(message) {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('anxiety')) {
          return 'Anxiety is a common mental health condition characterized by excessive worry or fear. Evidence-based treatments include cognitive-behavioral therapy (CBT) and medication. For severe symptoms, consult a licensed psychologist or psychiatrist.';
        } else if (lowerMessage.includes('depression')) {
          return 'Depression involves persistent sadness, loss of interest, and can affect daily functioning. Treatment often includes therapy, medication, and lifestyle changes. Professional help is recommended for moderate to severe cases.';
        } else if (lowerMessage.includes('ptsd')) {
          return 'PTSD (Post-Traumatic Stress Disorder) can develop after experiencing or witnessing trauma. Effective treatments include trauma-focused CBT and EMDR. Professional diagnosis and treatment are essential.';
        } else if (lowerMessage.includes('therapy') || lowerMessage.includes('counseling')) {
          return 'Therapy is a collaborative process with a trained professional to address emotional and psychological challenges. Different types include CBT, DBT, and psychodynamic therapy.';
        } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
          return 'We offer psychological counseling, behavioral training, HR consulting, and workplace wellness programs. Would you like to know more about a specific service?';
        } else if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
          return 'To book an appointment, please call us or use our online booking system. Our team is available Monday-Friday, 9 AM to 6 PM.';
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
          return 'You can reach us via email or phone. Visit our Contact page for detailed information.';
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
          return 'Our pricing varies depending on the service. Please contact us for a detailed quote tailored to your needs.';
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
          return 'Hello! How can I help you today?';
        } else {
          return 'Thank you for your question. For detailed information, please contact our team directly or explore our services page. Is there anything specific I can help you with?';
        }
      }

      // Send message on button click
      sendButton.addEventListener('click', sendMessage);

      // Send message on Enter key
      chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });

      // Disable send button when input is empty
      chatInput.addEventListener('input', function () {
        sendButton.disabled = !chatInput.value.trim();
      });

      // Initialize
      sendButton.disabled = true;
    })();
