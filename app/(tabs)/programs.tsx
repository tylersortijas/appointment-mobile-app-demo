
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ProgramsScreen() {
  const programs = [
    {
      title: "VIP Membership",
      price: "$29.99/month",
      benefits: [
        "Priority booking",
        "15% discount on all services",
        "Free monthly consultation",
        "Exclusive member events"
      ],
      color: "#e74c3c"
    },
    {
      title: "Loyalty Rewards",
      price: "Free",
      benefits: [
        "Earn points on every visit",
        "Redeem for free services",
        "Birthday month discount",
        "Referral bonuses"
      ],
      color: "#27ae60"
    },
    {
      title: "Monthly Packages",
      price: "Starting at $199",
      benefits: [
        "Bundle services for savings",
        "Flexible scheduling",
        "Transferable sessions",
        "No expiration date"
      ],
      color: "#3498db"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Programs & Rewards
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Save more with our exclusive programs
        </ThemedText>
      </ThemedView>

      {programs.map((program, index) => (
        <ThemedView key={index} style={styles.programCard}>
          <View style={[styles.programHeader, { backgroundColor: program.color }]}>
            <Text style={styles.programTitle}>{program.title}</Text>
            <Text style={styles.programPrice}>{program.price}</Text>
          </View>
          
          <View style={styles.programContent}>
            {program.benefits.map((benefit, benefitIndex) => (
              <View key={benefitIndex} style={styles.benefitItem}>
                <Text style={styles.benefitText}>✓ {benefit}</Text>
              </View>
            ))}
            
            <TouchableOpacity 
              style={[styles.joinButton, { backgroundColor: program.color }]}
            >
              <Text style={styles.joinButtonText}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </ThemedView>
      ))}

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          How It Works
        </ThemedText>
        
        <View style={styles.stepItem}>
          <Text style={styles.stepNumber}>1</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Choose Your Program</Text>
            <Text style={styles.stepDescription}>Select the program that best fits your needs</Text>
          </View>
        </View>

        <View style={styles.stepItem}>
          <Text style={styles.stepNumber}>2</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Start Saving</Text>
            <Text style={styles.stepDescription}>Enjoy discounts and benefits immediately</Text>
          </View>
        </View>

        <View style={styles.stepItem}>
          <Text style={styles.stepNumber}>3</Text>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Earn Rewards</Text>
            <Text style={styles.stepDescription}>Accumulate points and unlock exclusive perks</Text>
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
  programCard: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  programHeader: {
    padding: 20,
    alignItems: "center",
  },
  programTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  programPrice: {
    fontSize: 18,
    color: "white",
    opacity: 0.9,
  },
  programContent: {
    padding: 20,
  },
  benefitItem: {
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 16,
    color: "#2c3e50",
  },
  joinButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  joinButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3498db",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 40,
    marginRight: 15,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 14,
    color: "#7f8c8d",
  },
});
