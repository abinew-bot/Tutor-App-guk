import React from 'react';
import { Text, View } from 'react-native';

export default function VoiceOutput({ text }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16 }}>🔈 Voice Explanation Disabled (Offline Mode)</Text>
    </View>
  );
}