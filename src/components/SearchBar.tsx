// src/components/SearchBar.tsx
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import SearchIcon from "../assets/images/icons/Search.svg";
interface SearchBarProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = "Search",
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchIcon}>
                <SearchIcon />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F7",
        borderRadius: 43,
        paddingHorizontal: 15,
        height: 40,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: "#333",
    },
});
