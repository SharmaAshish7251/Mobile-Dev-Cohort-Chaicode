import { ScrollView, StyleSheet } from "react-native";
import SignInAssignment from "./assignments/SignInAssignment";
import SignUpAssignment from "./assignments/SignUpAssignment";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      {/* <BasicComponents /> */}
      {/* <SignInAssignment /> */}
      <SignUpAssignment />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
