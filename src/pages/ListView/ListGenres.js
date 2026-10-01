import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, ChevronDown, Search, SlidersHorizontal } from "lucide-react-native";
import { colors } from "../../colors";
import { MockFilms } from "../../data/MockFilms";
import { FilmListCard } from "../../components/FilmListCard/FilmListCard";
import { styles } from "./ListGenres.styles";
import { Footer } from "../../components/Footer/Footer";

export function ListGenres({ route, navigation }) {
    const genre = route?.params?.genre ?? "Filmes";
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const normalizedGenre = genre.toLocaleLowerCase("pt-BR");
    const normalizedSearch = searchQuery.trim().toLocaleLowerCase("pt-BR");
    const films = MockFilms
        .filter((film) => {
            const matchesGenre = film.niche.some(
                (filmGenre) => filmGenre.toLocaleLowerCase("pt-BR") === normalizedGenre
            );
            const searchableText = `${film.title} ${film.description} ${film.niche.join(" ")}`
                .toLocaleLowerCase("pt-BR");

            return matchesGenre && (!normalizedSearch || searchableText.includes(normalizedSearch));
        });

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={films}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FilmListCard item={item} />}
                ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={(
                    <View style={styles.listHeader}>
                        <View style={styles.navigationHeader}>
                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel="Voltar para Home"
                                onPress={() => navigation.goBack()}
                                style={styles.backButton}
                            >
                                <ArrowLeft size={18} color={colors.primary} />
                                <Text style={styles.backText}>Home</Text>
                            </Pressable>

                            <Text numberOfLines={1} style={styles.genreTitle}>{genre}</Text>

                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel={searchVisible ? "Fechar busca" : "Buscar filmes"}
                                onPress={() => {
                                    setSearchVisible(!searchVisible);
                                    setSearchQuery("");
                                }}
                                style={styles.searchButton}
                            >
                                <Search size={20} color={colors.white} />
                            </Pressable>
                        </View>

                        <View style={styles.controlsRow}>
                            <View style={styles.filterButton}>
                                <SlidersHorizontal size={13} color={colors.primary} />
                                <Text style={styles.filterButtonText}>Filtrar</Text>
                            </View>

                            <View style={styles.sortButton}>
                                <Text style={styles.sortButtonText}>Mais Recentes</Text>
                                <ChevronDown size={14} color={colors.gray} />
                            </View>
                        </View>

                        {searchVisible && (
                            <View style={styles.searchInputContainer}>
                                <Search size={16} color={colors.gray} />
                                <TextInput
                                    autoFocus
                                    onChangeText={setSearchQuery}
                                    placeholder="Buscar filmes"
                                    placeholderTextColor={colors.gray}
                                    style={styles.searchInput}
                                    value={searchQuery}
                                />
                            </View>
                        )}

                    </View>
                )}
                ListEmptyComponent={(
                    <Text style={styles.emptyMessage}>Nenhum filme encontrado para este gênero.</Text>
                )}
            />
            <Footer isActive={"Início"} />
        </SafeAreaView>
    );
}