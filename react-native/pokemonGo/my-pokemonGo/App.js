import { StyleSheet, Text, View } from 'react-native';
import PokemonCard from './components/PokemonCards';
import { SafeAreaView } from 'react-native';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {
  const charmanderData = {
    name: "Charmander",
    avatar: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }

  const bulbasaur = {
    name: "Bulbasaur",
    avatar: require("./assets/bulbasaur.jpg"),
    type: "Grass",
    hp: 60,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }

const pikachu = {
    name: "Pikachu",
    avatar: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
}

  const squirtle = {
    name: "Squirtle",
    avatar: require("./assets/squirtle.png"),
    type: "water",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmanderData}></PokemonCard>
      <PokemonCard {...bulbasaur}></PokemonCard>
      <PokemonCard {...pikachu}></PokemonCard>
      <PokemonCard {...squirtle}></PokemonCard>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#f5f5f5`,
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
