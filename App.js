import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import VoiceInput from './components/VoiceInput';
import VoiceOutput from './components/VoiceOutput';
import explainMath from './utils/explainMath';

export default function App() {
  const [question, setQuestion] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleVoiceInput = (text) => {
    setQuestion(text);
    const result = explainMath(text);
    setExplanation(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>7th Grade Math Tutor</Text>
      <VoiceInput onSpeechResult={handleVoiceInput} />
      <Text style={styles.question}>Question: {question}</Text>
      <Text style={styles.answer}>Explanation: {explanation}</Text>
      <VoiceOutput text={explanation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  question: {
    fontSize: 18,
    marginTop: 20,
  },
  answer: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: 'italic',
  },
});