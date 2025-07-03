
import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface ServiceCategory {
  title: string;
  services: {
    name: string;
    description: string;
    duration: string;
    price: string;
  }[];
}

export default function ServicesScreen() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Hair Services',
      services: [
        {
          name: 'Haircut & Style',
          description: 'Professional cut and styling for all hair types',
          duration: '60 min',
          price: '$65'
        },
        {
          name: 'Hair Color',
          description: 'Full color service with premium products',
          duration: '120 min',
          price: '$120'
        },
        {
          name: 'Highlights',
          description: 'Partial or full highlights to brighten your look',
          duration: '180 min',
          price: '$150'
        },
        {
          name: 'Blowout',
          description: 'Professional styling and blowdry',
          duration: '45 min',
          price: '$45'
        },
        {
          name: 'Hair Treatment',
          description: 'Deep conditioning and repair treatment',
          duration: '90 min',
          price: '$85'
        }
      ]
    },
    {
      title: 'Men\'s Services',
      services: [
        {
          name: 'Men\'s Haircut',
          description: 'Classic and modern cuts for men',
          duration: '45 min',
          price: '$45'
        },
        {
          name: 'Beard Trim',
          description: 'Professional beard shaping and styling',
          duration: '30 min',
          price: '$35'
        },
        {
          name: 'Hot Towel Shave',
          description: 'Traditional straight razor shave with hot towel',
          duration: '45 min',
          price: '$55'
        }
      ]
    },
    {
      title: 'Specialty Services',
      services: [
        {
          name: 'Bridal Hair',
          description: 'Special occasion styling for your wedding day',
          duration: '120 min',
          price: '$200'
        },
        {
          name: 'Hair Extensions',
          description: 'Professional extension application and styling',
          duration: '180 min',
          price: '$300'
        },
        {
          name: 'Scalp Treatment',
          description: 'Therapeutic scalp massage and treatment',
          duration: '60 min',
          price: '$75'
        }
      ]
    }
  ];

  const salonFeatures = [
    {
      icon: 'star.fill',
      title: 'Premium Products',
      description: 'We use only the finest professional hair care products'
    },
    {
      icon: 'person.3.fill',
      title: 'Expert Stylists',
      description: 'Our team consists of licensed and experienced professionals'
    },
    {
      icon: 'clock.fill',
      title: 'Flexible Hours',
      description: 'Open 7 days a week with evening appointments available'
    },
    {
      icon: 'house.fill',
      title: 'Private Suites',
      description: 'Each stylist operates in their own private, fully-equipped suite'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Our Services</ThemedText>
        <ThemedText style={styles.subtitle}>Professional hair care in private suites</ThemedText>
      </ThemedView>

      {/* Salon Features */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Why Choose Salon Lofts?</ThemedText>
        <View style={styles.featuresGrid}>
          {salonFeatures.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <IconSymbol name={feature.icon} size={32} color="#3498db" style={styles.featureIcon} />
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </ThemedView>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <ThemedView key={categoryIndex} style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>{category.title}</ThemedText>
          {category.services.map((service, serviceIndex) => (
            <View key={serviceIndex} style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <View style={styles.servicePricing}>
                  <Text style={styles.serviceDuration}>{service.duration}</Text>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                </View>
              </View>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </View>
          ))}
        </ThemedView>
      ))}

      {/* Contact Information */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Location & Hours</ThemedText>
        
        <View style={styles.infoCard}>
          <IconSymbol name="location.fill" size={24} color="#e74c3c" style={styles.infoIcon} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Address</Text>
            <Text style={styles.infoText}>123 Main Street, Suite 100{'\n'}Anytown, ST 12345</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <IconSymbol name="phone.fill" size={24} color="#e74c3c" style={styles.infoIcon} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Phone</Text>
            <Text style={styles.infoText}>(555) 123-4567</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <IconSymbol name="clock.fill" size={24} color="#e74c3c" style={styles.infoIcon} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Hours</Text>
            <Text style={styles.infoText}>
              Monday - Friday: 9:00 AM - 8:00 PM{'\n'}
              Saturday: 9:00 AM - 6:00 PM{'\n'}
              Sunday: 10:00 AM - 5:00 PM
            </Text>
          </View>
        </View>
      </ThemedView>

      {/* Book Now CTA */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Book Your Appointment Today</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ecf0f1',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  featureIcon: {
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 16,
  },
  serviceCard: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
  },
  servicePricing: {
    alignItems: 'flex-end',
  },
  serviceDuration: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 18,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  infoIcon: {
    marginRight: 15,
    marginTop: 2,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 18,
  },
  ctaButton: {
    backgroundColor: '#e74c3c',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
