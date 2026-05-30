import {
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Colors from "../Colors";

const SignUpAssignment = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isFocusedPassConfirm, setIsFocusedPassConfirm] = useState(false);
  const [isFocusedButton, setisFocusedButton] = useState(false);

  const [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={40}
      style={{ flex: 1, backgroundColor: Colors.background }}
      enabled={true}
    >
      <ScrollView
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          width: "100%",
          backgroundColor: Colors.background,
        }}
      >
        {/* Logo Placeholder */}
        <View
          style={{
            width: "100%",
            height: 120,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 75,
              width: 75,
              tintColor: Colors.primary,
            }}
            resizeMode="cover"
            source={require("@/assets/Ashish-Sharma.png")}
          />
        </View>

        {/* Label Signin */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: Colors.text,
              marginLeft: 3,
              fontFamily: "Nunito_700Bold",
            }}
          >
            Sign Up for Free
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "grey",
              fontFamily: "Nunito_500Medium",
            }}
          >
            Sign up in 1 minute for free!
          </Text>
        </View>

        {/* Email  */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Email Address
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              borderColor: isFocusedEmail ? Colors.primary : "grey",
              borderWidth: isFocusedEmail ? 2 : 1,
              borderRadius: 12,
              paddingLeft: 9,
              paddingTop: 6,
              paddingBottom: 6,
              backgroundColor: Colors.white,
            }}
          >
            <Ionicons
              name="mail"
              size={20}
              color={isFocusedEmail ? Colors.primary : Colors.text}
            />
            <TextInput
              onFocus={() => setIsFocusedEmail(!isFocusedEmail)}
              onBlur={() => setIsFocusedEmail(!isFocusedEmail)}
              style={{
                fontSize: 15,
                marginLeft: 3,
              }}
              placeholder="Enter your email address"
            />
          </View>
        </View>

        {/* Password */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              borderColor: isFocusedPass ? Colors.error : Colors.error,
              borderWidth: isFocusedPass ? 2 : 2,
              backgroundColor: Colors.white,
              borderRadius: 12,
              paddingLeft: 9,
              overflow: "hidden",
              marginTop: 3,
              paddingTop: 6,
              paddingBottom: 6,
              width: "100%",
            }}
          >
            <FontAwesome name="lock" size={20} color="black" />
            <TextInput
              secureTextEntry={!isFocusedPass}
              defaultValue="*****************"
              onFocus={() => setIsFocusedPass(true)}
              onBlur={() => setIsFocusedPass(false)}
              placeholder="Enter your Password"
              style={{
                flex: 1,
                fontSize: 15,

                marginLeft: 3,
              }}
            />
            <Pressable
              onPress={() => setIsFocusedPass(!isFocusedPass)}
              style={{ paddingRight: 9 }}
            >
              <FontAwesome
                name={isFocusedPass ? "eye" : "eye-slash"}
                size={20}
                color="black"
              />
            </Pressable>
          </View>
        </View>

        {/* Password  Confirmation*/}
        <View
          style={{
            marginTop: 18,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Password Confirmation
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              borderColor: isFocusedPassConfirm ? Colors.primary : "grey",
              borderWidth: isFocusedPassConfirm ? 2 : 1,
              backgroundColor: Colors.white,
              borderRadius: 12,
              paddingLeft: 9,
              overflow: "hidden",
              marginTop: 3,
              paddingTop: 6,
              paddingBottom: 6,
              width: "100%",
            }}
          >
            <FontAwesome name="lock" size={20} color="black" />
            <TextInput
              defaultValue="*****************"
              secureTextEntry={!isFocusedPassConfirm}
              onFocus={() => setIsFocusedPass(true)}
              onBlur={() => setIsFocusedPass(false)}
              placeholder="Enter your Password"
              style={{
                flex: 1,
                fontSize: 15,

                marginLeft: 3,
              }}
            />
            <Pressable
              onPress={() => setIsFocusedPass(!isFocusedPassConfirm)}
              style={{ paddingRight: 9 }}
            >
              <FontAwesome
                name={isFocusedPass ? "eye" : "eye-slash"}
                size={20}
                color="black"
              />
            </Pressable>
          </View>

          {/* Error Field*/}

          <View
            style={{
              backgroundColor: Colors.errorlight,
              flex: 1,
              flexDirection: "row",
              padding: 12,
              borderRadius: 12,
              borderColor: isFocusedPass ? Colors.error : Colors.error,
              borderWidth: isFocusedPass ? 2 : 2,
              marginTop: 10,
            }}
          >
            <FontAwesome
              style={{
                color: Colors.error,
              }}
              size={20}
              name="exclamation"
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: Colors.text,
                marginLeft: 12,
              }}
            >
              ERROR : Password do not match!
            </Text>
          </View>
        </View>

        {/* Button */}

        <Pressable
          style={{
            padding: 12,
            flex: 1,
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 21,
            backgroundColor: isFocusedButton ? Colors.primary : Colors.primary,
            borderColor: isFocusedButton ? Colors.primary : Colors.primary,
            borderRadius: 12,
          }}
          onPress={() => {
            setisFocusedButton(!isFocusedButton);
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
          <FontAwesome
            style={{
              fontSize: 16,
              color: "#fff",
              alignContent: "center",
              justifyContent: "center",
              paddingLeft: 6,
              paddingTop: 3,
            }}
            name="arrow-right"
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 21,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.text,
            }}
          >
            Already have an account?
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: Colors.primary,
              marginLeft: 3,
              textDecorationLine: "underline",
            }}
          >
            Sign Up.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpAssignment;

const styles = StyleSheet.create({});
