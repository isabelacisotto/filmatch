import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./Register.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, LockKeyhole, Mail, User } from "lucide-react-native";
import { PrimaryButton } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input/Input";
import { useState } from "react";

export function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleRegister() {
    if (
      !username.trim() ||
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
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.header}>
              <ChevronLeft
                size={32}
                color="#ED1010"
                onPress={() => navigation.goBack()}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Criar Conta</Text>
              <Text style={styles.subtitle}>
                Monte seu perfil e receba recomendações personalizadas.
              </Text>

              <View style={styles.LoginForm}>
                <Input
                  label="Nome de usuário"
                  placeholder="Escolha seu nome de usuário"
                  value={username}
                  onChangeText={setUsername}
                />
                <Input
                  label="E-mail"
                  placeholder="Digite seu e-mail aqui"
                  value={email}
                  onChangeText={setEmail}
                />
                <Input
                  label="Senha"
                  placeholder="Digite sua senha aqui"
                  secureTextEntry
                  value={senha}
                  onChangeText={setSenha}
                />
                <Input
                  label="Confirmar senha"
                  placeholder="Confirme sua senha"
                  secureTextEntry
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                />

                <View
                  style={{ marginTop: 20, width: "100%", alignItems: "center" }}
                >
                  <PrimaryButton text="Criar Conta" onPress={handleRegister} />
                </View>

                <Text
                  style={styles.register}
                  onPress={() => navigation.navigate("Login")}
                >
                  Já tem uma conta? <Text style={styles.registerLink}>Faça login</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}
