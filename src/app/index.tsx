import { ScrollView, StyleSheet } from "react-native";
import SignInAssignment from "./assignments/SignInAssignment";
import SignUpAssignment from "./assignments/SignUpAssignment";
import ForgotPasswordAssignment from "./assignments/ForgotPasswordAssignment";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      {/* <BasicComponents /> */}
      {/* <SignInAssignment /> */}
      {/* <SignUpAssignment /> */}
      <ForgotPasswordAssignment />
      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
