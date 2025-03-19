import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import ShareIcon from "../../assets/images/icons/Share-icon.svg";
import CustomText from "../../components/CustomText";

const DealsIcon = require("../../assets/images/deals.png");
const ProfilePic = require("../../assets/images/avatar.png");

/** 
 * Helper function to render a single word. 
 * If it starts with "#", we separate the "#" symbol (in red) from the rest (in white).
 */
function renderWord(word: string, index: number): JSX.Element {
    // Example: "#961" → "#" + "961"
    if (word.startsWith("#") && word.length > 1) {
        const hashSymbol = word.slice(0, 1); // "#"
        const restOfWord = word.slice(1);    // e.g. "961"

        return (
            <CustomText key={`${word}-${index}`}>
                <CustomText style={styles.hashSymbol}>{hashSymbol}</CustomText>
                <CustomText style={styles.hashtagRest}>{restOfWord + " "}</CustomText>
            </CustomText>
        );
    }

    // If the word is literally just "#"
    if (word === "#") {
        return (
            <CustomText key={`${word}-${index}`}>
                <CustomText style={styles.hashSymbol}>#</CustomText>{" "}
            </CustomText>
        );
    }

    // Otherwise, render normal text
    return (
        <CustomText key={`${word}-${index}`} style={styles.normalText}>
            {word + " "}
        </CustomText>
    );
}

/**
 * Splits the entire description text into words and applies 
 * the 'renderWord' function to each piece.
 */
function renderTextWithHashtags(text: string): JSX.Element[] {
    const words = text.split(/\s+/); // split on whitespace
    return words.map((word, index) => renderWord(word, index));
}

const PulseScreen: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const fullDescription = `A very long text that the user might write as a description here that takes up the entire line #fyp #961. This could contain hashtags or more details about the post. Maybe even multiple lines if needed...`;

    // Truncate logic
    const maxChars = 80;
    let displayText = fullDescription;
    if (!isExpanded && fullDescription.length > maxChars) {
        displayText = fullDescription.slice(0, maxChars).trim() + "...";
    }

    // Toggle Read More / Read Less
    const handleToggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Gradient Background */}
            <LinearGradient
                colors={["#FF0000", "#2600FF"]}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
            />

            {/* Top Tabs */}
            <View style={styles.topTabsContainer}>
                <CustomText style={styles.topTabText}>Following</CustomText>
                <View style={styles.activeTabContainer}>
                    <CustomText style={[styles.topTabText, styles.activeTabText]}>
                        For You
                    </CustomText>
                    <View style={styles.activeTabIndicator} />
                </View>
                <CustomText style={styles.topTabText}>News</CustomText>
                <CustomText style={styles.topTabText}>Eat & Drink</CustomText>
                <CustomText style={styles.topTabText}>pepsi</CustomText>
                <Ionicons name="search" size={20} color="#fff" style={{ marginLeft: 10 }} />
            </View>

            {/* Main Content */}
            <View style={styles.mainContentContainer}>
                {/* Right Sidebar */}
                <View style={styles.rightSidebar}>
                    <TouchableOpacity style={styles.dealsContainer}>
                        <Image source={DealsIcon} style={styles.dealsImage} />
                    </TouchableOpacity>
                    <View style={styles.sidebarItem}>
                        <Ionicons name="heart-outline" size={30} color="#fff" />
                        <CustomText style={styles.sidebarText}>Like</CustomText>
                    </View>
                    <View style={styles.sidebarItem}>
                        <Ionicons name="gift-outline" size={30} color="#fff" />
                        <CustomText style={styles.sidebarText}>Gift</CustomText>
                    </View>
                    <View style={styles.sidebarItem}>
                        <Ionicons name="chatbubble-ellipses-outline" size={30} color="#fff" />
                        <CustomText style={styles.sidebarText}>Comment</CustomText>
                    </View>
                    <View style={styles.sidebarItem}>
                        <ShareIcon />
                        <CustomText style={styles.sidebarText}>Share</CustomText>
                    </View>
                    <View style={styles.sidebarItem}>
                        <Ionicons name="ellipsis-horizontal" size={30} color="#fff" />
                    </View>
                </View>

                {/* Post Info */}
                <View style={styles.postInfoContainer}>
                    {/* Profile & Title */}
                    <View style={styles.profileRow}>
                        <Image source={ProfilePic} style={styles.profilePic} />
                        <CustomText style={styles.titleText}>961 News</CustomText>
                        <TouchableOpacity style={styles.followButton}>
                            <CustomText style={styles.followButtonText}>Follow</CustomText>
                        </TouchableOpacity>
                        <View style={styles.collabContainer}>
                            <CustomText style={styles.collabText}>7 collab</CustomText>
                        </View>
                    </View>

                    {/* Description + Read More */}
                    <CustomText style={styles.description}>
                        {renderTextWithHashtags(displayText)}
                        <CustomText onPress={handleToggleExpand} style={styles.readMore}>
                            {isExpanded ? "  Read less" : "  Read more"}
                        </CustomText>
                    </CustomText>

                    {/* Ad Placeholder */}
                    <View style={styles.adContainer}>
                        <CustomText style={styles.adText}>AD</CustomText>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PulseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    topTabsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 60,
        marginHorizontal: 16,
    },
    topTabText: {
        color: "#fff",
        marginRight: 20,
        fontSize: 16,
    },
    activeTabContainer: {
        marginRight: 5,
    },
    activeTabText: {
        fontWeight: "bold",
        textAlign: "center",
    },
    activeTabIndicator: {
        width: 28,
        height: 3,
        backgroundColor: "#fff",
        marginTop: 2,
        alignSelf: "center",
        marginRight: 16,
    },
    mainContentContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
    },
    rightSidebar: {
        position: "absolute",
        right: 10,
        bottom: 1,
        alignItems: "center",
    },
    dealsContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    dealsImage: {
        width: 60,
        height: 60,
        marginBottom: 5,
        resizeMode: "contain",
    },
    sidebarItem: {
        alignItems: "center",
        marginBottom: 20,
    },
    sidebarText: {
        color: "#fff",
        fontSize: 12,
        marginTop: 2,
    },
    postInfoContainer: {
        paddingHorizontal: 20,
        justifyContent: "flex-end",
        marginBottom: 10,
        width: "85%",
    },
    profileRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
        backgroundColor: "#fff",
    },
    titleText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 8,
    },
    followButton: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        width: 55,
        height: 25,
        marginLeft: 5,
    },
    followButtonText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
    },
    collabContainer: {
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 3,
        padding: 2.5,
        marginLeft: 8,
    },
    collabText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
        color: "#fff",
        opacity: 0.7,
    },

    // 1) Red symbol only
    hashSymbol: {
        color: "red",
        opacity: 0.7,
    },
    // 2) The rest of the hashtag text (e.g., "961")
    hashtagRest: {
        color: "#fff",
        opacity: 0.7,
    },
    // 3) Normal (non-hashtag) text
    normalText: {
        color: "#fff",
        opacity: 0.7,
    },
    readMore: {
        color: "#fff",
        textDecorationLine: "underline",
        opacity: 0.7,
    },
    adContainer: {
        backgroundColor: "#fff",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    adText: {
        color: "#000",
    },
});