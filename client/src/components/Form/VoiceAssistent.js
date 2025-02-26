
import React from 'react';

function VoiceAssistent({ onProductFind }) {
  const handleClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Voice command:", transcript);
      
      // Pass the transcript to the parent component
      onProductFind(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Voice assistant error:", event.error);
    };
  };

  return (
    <button
      className="btn btn-outline-info p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      type="button"
      onClick={handleClick}
    >
      🎙️ Voice Assistant
    </button>
  );
}

export default VoiceAssistent;
