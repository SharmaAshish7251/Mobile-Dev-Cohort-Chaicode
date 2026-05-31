import {
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../Colors";

const SignUpAssignment = () => {
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

        {/* Label Forgot Password */}
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
            Forgot Password
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "grey",
              fontFamily: "Nunito_500Medium",
            }}
          >
            Select with methods you'd like to reset.
          </Text>
        </View>

        {/* Email  */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
            flex: 1,
            padding: 12,
            flexDirection: "row",
            backgroundColor: Colors.white,
            borderRadius: 21,
            elevation: 2,
          }}
        >
          {/* Left */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#EBEBEB",
              width: 80,
              height: 65,
              borderRadius: 21,
              marginRight: 12,
              justifyContent: "center",
            }}
          >
            <Ionicons name="mail" size={32} color="grey" />
          </View>

          {/* Right */}

          <View
            style={{
              marginTop: 3,
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: 900,
                color: Colors.text,
              }}
            >
              Email Adress
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: Colors.text,
              }}
            >
              Send via email adress securely.
            </Text>
          </View>
        </View>

        {/* 2FA  */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
            flex: 1,
            padding: 12,
            flexDirection: "row",
            backgroundColor: Colors.white,
            borderRadius: 21,
            elevation: 2,
          }}
        >
          {/* Left */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: Colors.greenlight,
              width: 40,
              height: 65,
              marginRight: 38,
              borderRadius: 21,
              
              justifyContent: "center",
            }}
          >
            <Ionicons name="clipboard" size={32} color={Colors.primary} />
          </View>

          {/* Right */}

          <View
            style={{
              marginTop: 3,
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: 900,
                color: Colors.text,
              }}
            >
              2FA Authentication
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: Colors.text,
              }}
            >
              Send via 2FA securely.
            </Text>
          </View>
        </View>

        {/* Google Authenticator  */}
        <View
          style={{
            marginTop: 18,
            width: "100%",
            flex: 1,
            padding: 12,
            flexDirection: "row",
            backgroundColor: Colors.white,
            borderRadius: 21,
            elevation: 2,
          }}
        >
          {/* Left */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#EBEBEB",
              width: 80,
              height: 65,
              borderRadius: 21,
              marginRight: 12,
              justifyContent: "center",
            }}
          >
            <FontAwesome name="lock" size={32} color="grey" />
          </View>

          {/* Right */}

          <View
            style={{
              marginTop: 3,
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: 900,
                color: Colors.text,
              }}
            >
              Google Authenticator
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: Colors.text,
              }}
            >
              Send via Google Authenticator securely.
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
            backgroundColor: Colors.primary,
            borderRadius: 12,
          }}
          onPress={() => {
            alert("Email send successfully");
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Reset Password
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpAssignment;

const styles = StyleSheet.create({});
