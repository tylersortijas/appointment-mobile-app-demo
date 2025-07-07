
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function MoreScreen() {
  const moreItems = [
    { title: "About Us", icon: "ℹ️" },
    { title: "Terms of Service", icon: "📋" },
    { title: "Privacy Policy", icon: "🔐" },
    { title: "FAQ", icon: "❓" },
    { title: "Rate the App", icon: "⭐" },
    { title: "Share App", icon: "📤" },
    { title: "Contact Us", icon: "📞" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "https://instagram.com/salonlofts" },
    { name: "Facebook", icon: "👍", url: "https://facebook.com/salonlofts" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/salonlofts" },
    { name: "TikTok", icon: "🎵", url: "https://tiktok.com/@salonlofts" },
  ];

  const handleSocialLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          More Options
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Additional features and information
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Information
        </ThemedText>
        
        {moreItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.moreItem}>
            <Text style={styles.moreItemIcon}>{item.icon}</Text>
            <Text style={styles.moreItemText}>{item.title}</Text>
            <Text style={styles.moreItemArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Follow Us
        </ThemedText>
        
        <View style={styles.socialContainer}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialButton}
              onPress={() => handleSocialLink(social.url)}
            >
              <Text style={styles.socialIcon}>{social.icon}</Text>
              <Text style={styles.socialName}>{social.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          App Information
        </ThemedText>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Build</Text>
          <Text style={styles.infoValue}>2024.01.001</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Last Updated</Text>
          <Text style={styles.infoValue}>January 2024</Text>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Emergency Contact
        </ThemedText>
        
        <TouchableOpacity 
          style={styles.emergencyButton}
          onPress={() => Linking.openURL("tel:911")}
        >
          <Text style={styles.emergencyText}>🚨 Emergency: 911</Text>
        </TouchableOpacity>
      </ThemedView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Salon Lofts. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#2c3e50",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ecf0f1",
    fontSize: 16,
    marginTop: 5,
  },
  section: {
    margin: 15,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "600",
  },
  moreItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  moreItemIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  moreItemText: {
    flex: 1,
    fontSize: 16,
    color: "#2c3e50",
  },
  moreItemArrow: {
    fontSize: 18,
    color: "#bdc3c7",
  },
  socialContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  socialButton: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  socialIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  socialName: {
    fontSize: 14,
    color: "#2c3e50",
    fontWeight: "600",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  infoLabel: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  infoValue: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "600",
  },
  emergencyButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  emergencyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#7f8c8d",
    textAlign: "center",
  },
});
