import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Welcome.styles";
import { Clapperboard } from "lucide-react-native/icons";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/background.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={styles.welcomeContainer}>
          <Clapperboard size={55} color="#FFFFFF" />
          <Text style={styles.welcomeText}>
            Fil
            <Text style={styles.filmatchSpan}>match</Text>
          </Text>

          <Text style={styles.subTitle}>Seu próximo filme já deu match</Text>
        </View>

        <View style={styles.navButtons}>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
