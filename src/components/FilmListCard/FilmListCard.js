import { Image, Text, View } from "react-native";
import { Star } from "lucide-react-native";
import { colors } from "../../colors";
import { styles } from "./FilmListCard.styles";

export function FilmListCard({ item }) {
    const classification = item.classification === "Livre"
        ? "L"
        : item.classification;

    return (
        <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.poster} />

            <View style={styles.detailsContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>

                <View style={styles.metadata}>
                    <Star size={10} color={colors.primary} fill={colors.primary} />
                    <Text style={styles.metadataText}>{item.rating}</Text>
                    <Text style={styles.metadataSeparator}>•</Text>
                    <Text style={styles.metadataText}>{item.lauchYear}</Text>
                    <View style={styles.classificationBadge}>
                        <Text style={styles.classificationText}>{classification}</Text>
                    </View>
                </View>

                <Text style={styles.genres} numberOfLines={1}>
                    {item.niche.join(", ")}
                </Text>

                <Text style={styles.description} numberOfLines={3}>
                    {item.description}
                </Text>
            </View>
        </View>
    );
}