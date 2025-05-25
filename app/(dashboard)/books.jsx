import { StyleSheet } from "react-native";
import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";

const Books = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>
    </ThemeView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
