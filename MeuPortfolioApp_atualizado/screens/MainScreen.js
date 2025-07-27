import React from 'react';
import { View, Text, Image, Linking, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  const openLink = (url) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
      <Text style={styles.name}>Rafael PG</Text>
      <Button title="LinkedIn" onPress={() => openLink('https://www.linkedin.com/in/rpg2011')} />
      <Button title="GitHub" onPress={() => openLink('https://github.com/shakarpg')} />
      <Button title="E-mail" onPress={() => openLink('mailto:rafaelpereiragalhardo@gmail.com')} />
      <View style={styles.spacer} />
      <Button title="Ver habilidades" onPress={() => navigation.navigate('Skills')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, marginBottom: 20 },
  spacer: { height: 20 },
});