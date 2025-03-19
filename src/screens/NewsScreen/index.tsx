import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import CustomText from "../../components/CustomText";
import FastImage from "react-native-fast-image";

const NewsScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <FastImage
                    source={require('../../assets/images/news_961.png')}
                    style={{ width: 75, height: 30 }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.navScrollContainer}
                >
                    <View style={styles.navItem}>
                        <CustomText style={styles.liveDot}>●</CustomText>
                        <CustomText style={styles.liveText}> LIVE</CustomText>
                    </View>
                    <CustomText style={styles.navItemText}>Politics</CustomText>
                    <CustomText style={styles.navItemText}>pepsi AD</CustomText>
                    <CustomText style={styles.navItemText}>Business</CustomText>
                    <CustomText style={styles.navItemText}>Sports</CustomText>
                    <CustomText style={styles.navItemText}>More</CustomText>

                </ScrollView>
            </View>
            <View style={styles.contentContainer}>
                <CustomText style={styles.contentText}>News</CustomText>
            </View>
        </SafeAreaView>
    );
};

export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000",
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginTop: 50
    },
    logoText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 10,
    },
    navScrollContainer: {
        alignItems: "center",
        paddingLeft: 10,
    },
    navItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    liveDot: {
        color: "#FF0000",
        fontSize: 14,
        marginRight: 3,
    },
    liveText: {
        color: '#FF0000',
        fontSize: 14,
        fontWeight: "500",
    },
    navItemText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "500",
        marginRight: 15,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentText: {
        fontSize: 24,
        color: "#333",
        fontWeight: "bold",
    },
});