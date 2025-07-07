
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from 'expo-router';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (!isLogin && !name) {
      Alert.alert("Error", "Please enter your name");
      return;
    }

    // For now, just navigate to the main app
    // In a real app, you would handle authentication here
    Alert.alert(
      "Success", 
      isLogin ? "Logged in successfully!" : "Account created successfully!",
      [
        {
          text: "OK",
          onPress: () => router.replace("/(tabs)")
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Salon Lofts
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Professional Hair & Beauty Services
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.authContainer}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isLogin && styles.activeToggle]}
            onPress={() => setIsLogin(true)}
          >
            <Text style={[styles.toggleText, isLogin && styles.activeToggleText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isLogin && styles.activeToggle]}
            onPress={() => setIsLogin(false)}
          >
            <Text style={[styles.toggleText, !isLogin && styles.activeToggleText]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          )}

          <TouchableOpacity style={styles.authButton} onPress={handleAuth}>
            <Text style={styles.authButtonText}>
              {isLogin ? "Login" : "Create Account"}
            </Text>
          </TouchableOpacity>

          {isLogin && (
            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.featuresContainer}>
          <ThemedText type="subtitle" style={styles.featuresTitle}>
            Why Choose Salon Lofts?
          </ThemedText>
          <View style={styles.feature}>
            <Text style={styles.featureText}>✓ Easy online booking</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>✓ Professional stylists</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>✓ Flexible scheduling</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>✓ Premium services</Text>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 40,
    backgroundColor: "#2c3e50",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ecf0f1",
    fontSize: 16,
    marginTop: 5,
  },
  authContainer: {
    margin: 20,
    padding: 25,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#ecf0f1",
    borderRadius: 25,
    padding: 3,
    marginBottom: 25,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 22,
  },
  activeToggle: {
    backgroundColor: "#3498db",
  },
  toggleText: {
    fontSize: 16,
    color: "#7f8c8d",
    fontWeight: "600",
  },
  activeToggleText: {
    color: "white",
  },
  formContainer: {
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f8f9fa",
  },
  authButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  authButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotButton: {
    alignItems: "center",
    marginTop: 15,
  },
  forgotButtonText: {
    color: "#3498db",
    fontSize: 14,
  },
  featuresContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 20,
  },
  featuresTitle: {
    textAlign: "center",
    marginBottom: 15,
    color: "#2c3e50",
  },
  feature: {
    paddingVertical: 5,
  },
  featureText: {
    fontSize: 16,
    color: "#27ae60",
    textAlign: "center",
  },
});
