import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./Home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoHome } from "../../components/Logo/Logo";
import { Activity, Book, Heart, Laugh, Search, Skull, Sword, User } from "lucide-react-native";
import { colors } from "../../colors";
import { MockFilms } from "../../data/MockFilms";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { GenresCard } from "../../components/GenresCard/GenresCard";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.homeContainer}>
                    <View style={styles.header}>
                        <LogoHome />

                        <View style={{ flexDirection: "row", gap: 10, marginLeft: "auto" }}>
                            <Search size={24} color={colors.white} />
                            <User size={24} color={colors.white} />
                        </View>
                    </View>

                    <View style={styles.welcomeContainer}>
                        <View style={styles.line}></View>

                        <View style={styles.welcomeTexts}>
                            <Text style={styles.welcomeTextHome}>
                                Bem-vinda, <Text style={styles.highlightedText}>Isabela!</Text>
                            </Text>

                            <Text style={styles.subTitleHome}>
                                Estamos aqui para te ajudar a encontrar seu próximo filme!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.filmsSection}>
                        <View style={styles.filmsSectionHeader}>
                            <View style={styles.lineMini}></View>

                            <View style={styles.filmsSectionTexts}>
                                <Text style={styles.filmsSectionTitle}>Recomendações para você</Text>
                                <Text style={styles.filmsSectionSeeAll}>Ver todos {">"}</Text>
                            </View>
                        </View>


                        <View style={styles.filmsSectionCards}>
                            <FlatList
                                data={MockFilms.slice(0, 9)}
                                numColumns={3}
                                contentContainerStyle={{ gap: 15 }}
                                renderItem={({ item }) => <FilmCard item={item} />}
                                keyExtractor={(item) => String(item.id)}
                                ListEmptyComponent={() => (
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: colors.white }}>Nenhum filme encontrado.</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <View style={styles.exploreGenres}>
                        <View style={styles.exploreGenresHeader}>
                            <View style={styles.lineMini}></View>

                            <View style={styles.exploreGenresTexts}>
                                <Text style={styles.exploreGenresTitle}>Explorar por gêneros</Text>
                            </View>
                        </View>
                        
                        <View style={styles.exploreGenresCards}>
                            <GenresCard genre="Ação" icon={<Sword color={colors.primary} />} />
                            <GenresCard genre="Romance" icon={<Heart color={colors.primary}/>} />
                            <GenresCard genre="Terror" icon={<Skull color={colors.primary}/>} />
                            <GenresCard genre="Drama" icon={<Book color={colors.primary}/>} />
                            <GenresCard genre="Comédia" icon={<Laugh color={colors.primary}/>} />
                            <GenresCard genre="Suspense" icon={<Activity color={colors.primary}/>} />
                        </View>
                    </View>

                    
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView >
    )
}