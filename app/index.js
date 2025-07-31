import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.containerGeral}>
      {/* Imagem acima do container */}
      <Image
        source={require("../assets/charmander.png")}
        style={styles.imagem}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
      <Text style={{ color: "#fff" }}>Este é um app com Expo Router.</Text>

      <View style={styles.container}>
        <Text style={styles.title}>charmander</Text>
        <Text>kansflkanfl.</Text>
      </View>

      {/* Barra de navegação */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="home" size={28} color="#E76F51" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="staro" size={28} color="#E76F51" />
          <Text style={styles.navText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="user" size={28} color="#E76F51" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E76F51',
    paddingBottom: 70, 
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 16,
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f1f3f7',
    height: 200,
    width: 300,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },
  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingHorizontal: 16,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    color: "#E76F51",
    marginTop: 2,
  },
});