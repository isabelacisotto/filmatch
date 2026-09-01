import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./Login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, LockKeyhole, Mail } from "lucide-react-native";
import { PrimaryButton } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input/Input";
import { useState } from "react";

export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleLogin() {
    if (
      !email.trim() ||
      !senha.trim() ||
      !confirmarSenha.trim()
    ) {
      Alert.alert(
        "Campos incompletos",
        "Por favor, preencha todos os campos do formulário.",
      );
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Senha inválida",
        "A senha deve ter pelo menos 6 caracteres.",
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Senhas não coincidem",
        "As senhas digitadas não coincidem. Por favor, tente novamente.",
      );
      return;
    }

    Alert.alert("Cadastro realizado", "Cadastro realizado com sucesso!", [
      {
        text: "Ir para a página de Login",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/background.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <ChevronLeft
              size={32}
              color="#ED1010"
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>
              Continue sua sessão e descubra novas recomendações.
            </Text>

            <View style={styles.LoginForm}>
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
              />
            </View>

            <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
              <PrimaryButton text="Entrar" onPress={handleLogin} />
            </View>

            <Text
              style={styles.register}
              onPress={() => navigation.navigate("Register")}
            >
              Não tem uma conta? <Text style={styles.registerLink}>Cadastre-se</Text>
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
