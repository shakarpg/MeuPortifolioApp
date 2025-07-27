import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SkillBar({ skill, level }) {
  return (
    <View style={styles.skillRow}>
      <Text style={styles.skillText}>{skill}:</Text>
      {[...Array(5)].map((_, i) => (
        <FontAwesome
          key={i}
          name="star"
          size={20}
          color={i < level ? "#FFD700" : "#ccc"}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  skillRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  skillText: { width: 70, fontSize: 16 },
});