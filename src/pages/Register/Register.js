import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./Register.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, LockKeyhole, Mail, User } from "lucide-react-native";
import { PrimaryButton } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export function Register() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/background.png")}
                style={styles.image}
                resizeMode="cover"
            />

            <SafeAreaView style={{
                flex: 1,
                width: "100%",
                height: "100%",
            }}>
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <ChevronLeft size={32} color="#ED1010" onPress={() => navigation.goBack()} />
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>Criar Conta</Text>
                        <Text style={styles.subtitle}>Monte seu perfil e receba recomendações personalizadas.</Text>

                        <View style={styles.LoginForm}>
                            <Text style={styles.label}>Nome de usuário</Text>
                            <View style={styles.inputContainer}>
                                <User size={20} color="#ED1010" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Escolha seu nome de usuário"
                                    placeholderTextColor={styles.input.placeholderTextColor}
                                />
                            </View>

                            <Text style={styles.label}>E-mail</Text>
                            <View style={styles.inputContainer}>
                                <Mail size={20} color="#ED1010" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite seu e-mail aqui"
                                    placeholderTextColor={styles.input.placeholderTextColor}
                                />
                            </View>

                            <Text style={styles.label}>Senha</Text>
                            <View style={styles.inputContainer}>
                                <LockKeyhole size={20} color="#ED1010" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite sua senha aqui"
                                    placeholderTextColor={styles.input.placeholderTextColor}
                                    secureTextEntry
                                />
                            </View>

                            <Text style={styles.label}>Confirmar Senha</Text>
                            <View style={styles.inputContainer}>
                                <LockKeyhole size={20} color="#ED1010" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirme sua senha"
                                    placeholderTextColor={styles.input.placeholderTextColor}
                                    secureTextEntry
                                />
                            </View>

                            <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
                                <PrimaryButton text="Criar Conta" />
                            </View>

                            <Text style={styles.register} onPress={() => navigation.navigate("Login")}>
                                Já tem uma conta? <Text style={styles.registerLink}>Faça login</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}