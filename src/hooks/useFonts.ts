import * as Font from "expo-font";

const _loadFontsAsync = async () => {
    await Font.loadAsync({
        "Inter": require("../assets/fonts/Inter_18pt-Light.ttf"),
    });
};

export default _loadFontsAsync;
