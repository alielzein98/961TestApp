import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { Ionicons } from "@expo/vector-icons";
import { backgrounds, fonts } from "../../styles/colors";
import CustomText from "../CustomText";
import DoublePointsIcon from "../../assets/images/icons/Double-points-icon.svg";
const width = Dimensions.get("window").width;
interface DealCardProps {
    image: any;
    points: string;
    title: string;
    category: string;
    type: string;
    location: string;
    rating: number;
    tags: string[];
}

const PopularDealsCard: React.FC<DealCardProps> = ({
    image,
    points,
    title,
    category,
    type,
    location,
    rating,
    tags,
}) => {
    return (
        <View style={styles.card}>
            <FastImage source={{ uri: image }} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay}>
                <View style={styles.pointsContainer}>
                    <DoublePointsIcon width={15} height={15} />
                    <CustomText style={styles.pointsText}>{points}</CustomText>
                </View>
                <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 50 }}>
                    <Ionicons name="heart-outline" size={22} color="#555" />
                </View>
            </View>
            <View style={{ padding: 10, gap: 15 }} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.details}>
                        <CustomText style={styles.title}>{title}</CustomText>
                        <CustomText style={styles.subtitle}>
                            <CustomText style={styles.boldText}>{category}</CustomText> • {type}
                        </CustomText>
                    </View>
                    <View style={{ alignItems: 'flex-end', gap: 6 }}>
                        <View style={styles.ratingContainer}>
                            <Ionicons name="star" size={14} color="red" />
                            <CustomText style={styles.ratingText}>{rating}</CustomText>
                        </View>
                        <View style={styles.locationContainer}>
                            <Ionicons name="location-outline" size={14} color="#777" />
                            <CustomText style={styles.locationText}>{location}</CustomText>
                        </View>

                    </View>
                </View>
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <View
                            key={index}
                            style={[
                                styles.tag,
                                /^\+\d+$/.test(tag) ? styles.plusTag : null // Check if tag starts with "+"
                            ]}
                        >
                            <CustomText style={[
                                /^\+\d+$/.test(tag) ? { color: fonts.primary } : styles.tagText
                            ]}>{tag}</CustomText>
                        </View>
                    ))}
                </View>
            </View>

        </View>
    );
};

export default PopularDealsCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        height: 264,
        width: width / 1.18,
        borderWidth:1,
        borderColor: '#F3F4F6'
    },
    image: {
        width: "100%",
        height: 150,
    },
    overlay: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    pointsContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        gap: 2,
    },
    pointsText: {
        fontSize: 13,
        fontWeight: "500",
        color: fonts.lightGrey,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
    },
    subtitle: {
        fontSize: 12,
        color: "#777",
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 10.2
    },
    details: {
        gap: 6
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    locationText: {
        fontSize: 10.2,
        color: "#777",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
        gap: 5
    },
    ratingText: {
        fontSize: 10.2,
        fontWeight: "500",
        color: "#333",
    },
    tagsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
    },
    tag: {
        backgroundColor: backgrounds.primary, 
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    plusTag: {
        backgroundColor: "#FFE7E5", 
    },
    tagText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
    },
});