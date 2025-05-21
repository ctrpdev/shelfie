import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemeView from "../components/ThemeView";
import ThemeText from "../components/ThemeText";

const About = () => {
  return (
    <ThemeView style={[styles.container]}>
      <ThemeText style={[styles.title]}>About Page</ThemeText>

      <Link href={"/"} style={styles.link}>
        <ThemeText>Back home</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
