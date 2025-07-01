import React, { useState } from 'react';
import { Button, Text, View, Platform } from 'react-native';

export default function VoiceInput({ onSpeechResult }) {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (Platform.OS === 'web') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setError('Speech Recognition is not supported in this browser.');
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setResult(transcript);
        if (onSpeechResult) onSpeechResult(transcript);
      };
      recognition.onerror = (e) => setError(e.error);
      recognition.start();
    } else {
      setError('Voice input is currently only supported on web in this app.');
    }
  };

  return (
    <View>
      <Button title="Start Speaking" onPress={handleStart} />
      <Text>Result: {result}</Text>
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}
