import { StyleSheet, Text } from "react-native";

import ThemeView from "../../components/ThemeView";
import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemeButton from "../../components/ThemeButton";

const Register = () => {
  const handleSubmit = () => {
    console.log("hola");
  };
  return (
    <ThemeView style={styles.container}>
      <Spacer />
      <ThemeText title={true} style={styles.title}>
        Register for an account
      </ThemeText>

      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemeButton>
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
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
