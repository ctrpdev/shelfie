import { StyleSheet } from "react-native";

import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Login to you account
      </ThemeText>

      <Spacer heigth={100} />

      <Link href={"/register"}>
        <ThemeText style={{ textAlign: "center" }}>Register instead</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
