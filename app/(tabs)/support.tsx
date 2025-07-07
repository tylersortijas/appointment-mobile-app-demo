
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

export default function SupportScreen() {
  const handleCall = () => {
    Linking.openURL("tel:+1-555-SALON-1");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:support@salonlofts.com");
  };

  const supportItems = [
    {
      title: "Booking Help",
      description: "Need help scheduling your appointment?",
    },
    {
      title: "Service Questions",
      description: "Questions about our services and pricing?",
    },
    {
      title: "Account Issues",
      description: "Having trouble with your account?",
    },
    {
      title: "Technical Support",
      description: "App not working properly?",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Support Center
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          We're here to help you
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Contact Us
        </ThemedText>
        
        <TouchableOpacity style={styles.contactButton} onPress={handleCall}>
          <Text style={styles.contactButtonText}>📞 Call Us: (555) SALON-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
          <Text style={styles.contactButtonText}>✉️ Email: support@salonlofts.com</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Common Questions
        </ThemedText>
        
        {supportItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.supportItem}>
            <Text style={styles.supportItemTitle}>{item.title}</Text>
            <Text style={styles.supportItemDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Business Hours
        </ThemedText>
        <Text style={styles.hoursText}>Monday - Friday: 9:00 AM - 8:00 PM</Text>
        <Text style={styles.hoursText}>Saturday: 8:00 AM - 6:00 PM</Text>
        <Text style={styles.hoursText}>Sunday: 10:00 AM - 5:00 PM</Text>
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
  contactButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  contactButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  supportItem: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 10,
  },
  supportItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 5,
  },
  supportItemDescription: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  hoursText: {
    fontSize: 16,
    color: "#2c3e50",
    marginBottom: 5,
  },
});
