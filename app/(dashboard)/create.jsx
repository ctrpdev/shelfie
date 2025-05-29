import { StyleSheet } from "react-native";

import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";

const Create = () => {
  return (
    <ThemeView style={styles.container} safe={true}>
      <ThemeText title={true} style={styles.heading}>
        Add a New Book
      </ThemeText>
      <Spacer />
    </ThemeView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
