import { useState, useRef, useEffect } from 'react'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Mitesh's virtual assistant. How can I help you today?", sender: "bot" }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }]
    setMessages(newMessages)
    setInputValue('')
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let response = "I'm sorry, I didn't understand that. Can you please rephrase?"
      
      if (inputValue.toLowerCase().includes('hello') || inputValue.toLowerCase().includes('hi')) {
        response = "Hello there! How can I help you today?"
      } else if (inputValue.toLowerCase().includes('project')) {
        response = "Mitesh has worked on several projects including Text Summarization, Finance Tracker, and Movie Recommendation System. You can check them out in the Projects section!"
      } else if (inputValue.toLowerCase().includes('skill')) {
        response = "Mitesh is skilled in Python, JavaScript, React, Django, Flask, and various other technologies. Check out the Skills section for more details!"
      } else if (inputValue.toLowerCase().includes('contact')) {
        response = "You can contact Mitesh via email at miteshsakhare301@gmail.com or through the contact form on this website."
      } else if (inputValue.toLowerCase().includes('resume')) {
        response = "You can download Mitesh's resume by clicking the 'Resume' button in the hero section."
      }
      
      setMessages(prev => [...prev, { text: response, sender: 'bot' }])
    }, 1000)
  }

  const quickQuestions = [
    "What projects has Mitesh worked on?",
    "What are Mitesh's skills?",
    "How can I contact Mitesh?",
    "Can I see Mitesh's resume?"
  ]

  const handleQuickQuestion = (question) => {
    setInputValue(question)
    handleSendMessage()
  }

  return (
    <div className="live-chat">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h5 className="mb-0">Chat with Mitesh's Assistant</h5>
            <button 
              className="btn-close btn-close-white"
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="quick-questions">
            {quickQuestions.map((question, index) => (
              <div 
                key={index}
                className="quick-question"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              →
            </button>
          </div>
        </div>
      )}
      <button className="chat-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  )
}

export default LiveChat