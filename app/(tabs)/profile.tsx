
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from 'expo-router';

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          onPress: () => router.replace("/auth"),
        },
      ]
    );
  };

  const profileItems = [
    { title: "Edit Profile", icon: "👤" },
    { title: "Appointment History", icon: "📅" },
    { title: "Payment Methods", icon: "💳" },
    { title: "Notifications", icon: "🔔" },
    { title: "Privacy Settings", icon: "🔒" },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileImageText}>JD</Text>
        </View>
        <ThemedText type="title" style={styles.name}>
          John Doe
        </ThemedText>
        <ThemedText style={styles.email}>
          john.doe@email.com
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Account
        </ThemedText>
        
        {profileItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.profileItem}>
            <Text style={styles.profileItemIcon}>{item.icon}</Text>
            <Text style={styles.profileItemText}>{item.title}</Text>
            <Text style={styles.profileItemArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Membership Status
        </ThemedText>
        
        <View style={styles.membershipCard}>
          <Text style={styles.membershipTitle}>VIP Member</Text>
          <Text style={styles.membershipPoints}>2,350 Points</Text>
          <Text style={styles.membershipNext}>250 points until next reward</Text>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Quick Stats
        </ThemedText>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Appointments</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$1,250</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>
      </ThemedView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 30,
    backgroundColor: "#2c3e50",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImageText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    color: "#ecf0f1",
    fontSize: 16,
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
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  profileItemIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  profileItemText: {
    flex: 1,
    fontSize: 16,
    color: "#2c3e50",
  },
  profileItemArrow: {
    fontSize: 18,
    color: "#bdc3c7",
  },
  membershipCard: {
    backgroundColor: "#3498db",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  membershipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  membershipPoints: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  membershipNext: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
