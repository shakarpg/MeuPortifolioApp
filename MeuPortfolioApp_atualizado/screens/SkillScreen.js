import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import SkillBar from '../components/SkillBar';

export default function SkillScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
      <Text style={styles.title}>Minhas Habilidades</Text>
      <SkillBar skill="CSS" level={4} />
      <SkillBar skill="HTML" level={5} />
      <SkillBar skill="React" level={3} />
      <View style={styles.spacer} />
      <Button title="Fala comigo" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, marginTop: 40 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  spacer: { height: 20 },
});