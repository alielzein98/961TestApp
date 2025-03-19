import React from "react";
import { View, StyleSheet, FlatList, ScrollView, Dimensions, SafeAreaView, Platform, StatusBar } from "react-native";
import Logo from "../../assets/images/navIcons/Logo.svg";
import MenuIcon from "../../assets/images/icons/Menu-icon.svg";
import CustomText from "../../components/CustomText";
import SearchBar from "../../components/SearchBar";
import CalendarIcon from "../../assets/images/icons/Calendar-icon.svg";
import LocationIcon from "../../assets/images/icons/Location-icon.svg";
import GiftIcon from "../../assets/images/icons/Gift-icon.svg";
import DoublePointsIcon from "../../assets/images/icons/Double-points-icon.svg";
import FastImage from "react-native-fast-image";
import PopularDealsCard from "../../components/cards/PopularDealsCard";

const [width, height] = [Dimensions.get("window").width, Dimensions.get("window").height];
const popularDeals = [
    {
        id: "1",
        image:
            "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f6HIYbIeLBo9u~bLK8PubBOM7~L2qE--KHF4e-WkshHW5-BB3lrD1YwPLnLSijOYdtTg6v8RkDjamjN2Hs5GWxF3Yt3pAO0-rxe~JvQXPSmiLC59MJqCdcYpwcscg3LDuabpyF29HNy9ZJsTj5bql6GMNoqkBMGoXsDeP0i9EPycQgj6BZ2abGPslX6UXkoCdhZDJV13qHJE2tn9IJ5EKY9JiPDrTHpGMlQWOPLO5lhlcXCgT6R2XPhKOZ7bACi1neWJ-zaSFIc-87qGKAvMcZEt4Z-cEXFsucY8l92e1dxNkxBLyLJECvVBQLLbwd3PV9NPb1ydhrd-e5J0w5ePyw__",
        points: "200pts",
        title: "Grill Katz",
        category: "Restaurant",
        type: "Steakhouse",
        location: "Mar Mikhael, Achrafieh",
        rating: 4.5,
        tags: ["2:1 Main Course", "10% Off Bill", "+1"],
    },
    {
        id: "2",
        image:
            "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f6HIYbIeLBo9u~bLK8PubBOM7~L2qE--KHF4e-WkshHW5-BB3lrD1YwPLnLSijOYdtTg6v8RkDjamjN2Hs5GWxF3Yt3pAO0-rxe~JvQXPSmiLC59MJqCdcYpwcscg3LDuabpyF29HNy9ZJsTj5bql6GMNoqkBMGoXsDeP0i9EPycQgj6BZ2abGPslX6UXkoCdhZDJV13qHJE2tn9IJ5EKY9JiPDrTHpGMlQWOPLO5lhlcXCgT6R2XPhKOZ7bACi1neWJ-zaSFIc-87qGKAvMcZEt4Z-cEXFsucY8l92e1dxNkxBLyLJECvVBQLLbwd3PV9NPb1ydhrd-e5J0w5ePyw__",
        points: "150pts",
        title: "Sushi Delight",
        category: "Restaurant",
        type: "Japanese",
        location: "Downtown, Beirut",
        rating: 4.7,
        tags: ["Free Appetizer", "15% Off"],
    },
    {
        id: "3",
        image:
            "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f6HIYbIeLBo9u~bLK8PubBOM7~L2qE--KHF4e-WkshHW5-BB3lrD1YwPLnLSijOYdtTg6v8RkDjamjN2Hs5GWxF3Yt3pAO0-rxe~JvQXPSmiLC59MJqCdcYpwcscg3LDuabpyF29HNy9ZJsTj5bql6GMNoqkBMGoXsDeP0i9EPycQgj6BZ2abGPslX6UXkoCdhZDJV13qHJE2tn9IJ5EKY9JiPDrTHpGMlQWOPLO5lhlcXCgT6R2XPhKOZ7bACi1neWJ-zaSFIc-87qGKAvMcZEt4Z-cEXFsucY8l92e1dxNkxBLyLJECvVBQLLbwd3PV9NPb1ydhrd-e5J0w5ePyw__",
        points: "150pts",
        title: "Sushi Delight",
        category: "Restaurant",
        type: "Japanese",
        location: "Downtown, Beirut",
        rating: 4.7,
        tags: ["Free Appetizer", "15% Off", "+3"],
    },
    {
        id: "4",
        image:
            "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f6HIYbIeLBo9u~bLK8PubBOM7~L2qE--KHF4e-WkshHW5-BB3lrD1YwPLnLSijOYdtTg6v8RkDjamjN2Hs5GWxF3Yt3pAO0-rxe~JvQXPSmiLC59MJqCdcYpwcscg3LDuabpyF29HNy9ZJsTj5bql6GMNoqkBMGoXsDeP0i9EPycQgj6BZ2abGPslX6UXkoCdhZDJV13qHJE2tn9IJ5EKY9JiPDrTHpGMlQWOPLO5lhlcXCgT6R2XPhKOZ7bACi1neWJ-zaSFIc-87qGKAvMcZEt4Z-cEXFsucY8l92e1dxNkxBLyLJECvVBQLLbwd3PV9NPb1ydhrd-e5J0w5ePyw__",
        points: "150pts",
        title: "Sushi Delight",
        category: "Restaurant",
        type: "Japanese",
        location: "Downtown, Beirut",
        rating: 4.7,
        tags: ["Free Appetizer", "15% Off"],
    },
];

const DealsScreen: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Logo width={35} height={18} />
                        <CustomText fontSize={20} fontWeight="bold">
                            Deals
                        </CustomText>
                    </View>
                    <MenuIcon />
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <SearchBar />
                </View>

                {/* Bookings, Discover, Earn */}
                <View style={{ gap: 30, paddingTop: 10 }} >
                    <View style={styles.optionsContainer}>
                        <View style={styles.option}>
                            <CalendarIcon width={30} height={30} />
                            <CustomText fontSize={12} fontWeight="500">
                                Bookings
                            </CustomText>
                        </View>
                        <View style={styles.option}>
                            <LocationIcon width={30} height={30} />
                            <CustomText fontSize={12} fontWeight="500">
                                Discover
                            </CustomText>
                        </View>
                        <View style={styles.option}>
                            <GiftIcon width={30} height={30} />
                            <CustomText fontSize={12} fontWeight="500" >
                                Earn
                            </CustomText>
                        </View>
                    </View>
                    {/* Image */}
                    <View style={{ width: width, alignItems: "center", justifyContent: 'center', height: 99 }}>
                        <FastImage
                            source={require("../../assets/images/gift-img.png")}
                            style={{ width: width - 44, height: '130%', marginTop: -15 }}
                            resizeMode={FastImage.resizeMode.stretch}
                        />
                    </View>
                    {/* Popular Section */}
                    <View style={{ gap: 16, paddingBottom: 8 }} >
                        <CustomText fontSize={18} fontWeight="800" style={{ paddingHorizontal: 17 }} >
                            Popular 🔥
                        </CustomText>
                        <FlatList
                            data={popularDeals}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 17 }}
                            ItemSeparatorComponent={()=> <View style={{width: 17}} />}
                            renderItem={({ item }) => <PopularDealsCard {...item} />}
                        />
                    </View>

                    {/* Double Points Section */}
                    <View style={{ gap: 16, paddingBottom: 38 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }} >
                            <CustomText fontSize={18} fontWeight="800" style={{ paddingLeft: 17 }} >
                                Double Points
                            </CustomText>
                            <DoublePointsIcon height={25} width={18} />
                        </View>
                        <FlatList
                            data={popularDeals}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 17 }}
                            ItemSeparatorComponent={()=> <View style={{width: 17}} />}
                            renderItem={({ item }) => <PopularDealsCard {...item} />}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 18,
        paddingRight: 20,
        paddingVertical: 4
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7
    },
    searchContainer: {
        marginVertical: 8,
        marginHorizontal: 17,
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    option: {
        alignItems: "center",
        gap: 10
    },
});