import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemeView from "../components/ThemeView";
import ThemeLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";

const Home = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeLogo />
      <Spacer height={20} />
      <ThemeText style={styles.title} title={true}>
        The Number 1
      </ThemeText>

      <Spacer height={10} />
      <ThemeText>Reading List App</ThemeText>
      <Spacer />

      <Link href={"/about"} style={styles.link}>
        <ThemeText>About page</ThemeText>
      </Link>
      <Link href={"/contact"} style={styles.link}>
        <ThemeText>Contact page</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default Home;

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
