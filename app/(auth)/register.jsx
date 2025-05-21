import { StyleSheet } from "react-native";

import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register for an account
      </ThemeText>

      <Spacer heigth={100} />

      <Link href={"/login"}>
        <ThemeText style={{ textAlign: "center" }}>Login instead</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default Register;

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
