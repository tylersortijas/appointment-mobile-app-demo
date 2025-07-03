
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  price: number;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

export default function SalonBookingScreen() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const services: Service[] = [
    { id: '1', name: 'Haircut & Style', duration: 60, price: 65 },
    { id: '2', name: 'Hair Color', duration: 120, price: 120 },
    { id: '3', name: 'Highlights', duration: 180, price: 150 },
    { id: '4', name: 'Blowout', duration: 45, price: 45 },
    { id: '5', name: 'Hair Treatment', duration: 90, price: 85 },
    { id: '6', name: 'Beard Trim', duration: 30, price: 35 }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const getAvailableTimeSlots = () => {
    const bookedTimes = appointments
      .filter(apt => apt.date === selectedDate)
      .map(apt => apt.time);
    
    return timeSlots.filter(time => !bookedTimes.includes(time));
  };

  const getDaysInMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const formatDateForDisplay = (day: number) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    return new Date(year, month, day).toISOString().split('T')[0];
  };

  const getAppointmentsForDate = (date: string) => {
    return appointments.filter(apt => apt.date === date);
  };

  const bookAppointment = () => {
    if (!clientName || !selectedService || !selectedTime) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      clientName,
      service: selectedService.name,
      date: selectedDate,
      time: selectedTime,
      duration: selectedService.duration,
      price: selectedService.price
    };

    setAppointments(prev => [...prev, newAppointment]);
    setClientName('');
    setSelectedService(null);
    setSelectedTime('');
    setShowBookingForm(false);
    Alert.alert('Success', 'Appointment booked successfully!');
  };

  const cancelAppointment = (id: string) => {
    Alert.alert(
      'Cancel Appointment',
      'Are you sure you want to cancel this appointment?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => setAppointments(prev => prev.filter(apt => apt.id !== id)) }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Salon Lofts</ThemedText>
        <ThemedText style={styles.subtitle}>Professional Hair & Beauty Services</ThemedText>
      </ThemedView>

      {/* Calendar */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Select Date</ThemedText>
        <View style={styles.calendar}>
          <View style={styles.weekDays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <Text key={day} style={styles.weekDay}>{day}</Text>
            ))}
          </View>
          <View style={styles.daysGrid}>
            {getDaysInMonth().map((day, index) => {
              if (day === null) {
                return <View key={index} style={styles.emptyDay} />;
              }
              
              const dateStr = formatDateForDisplay(day);
              const dayAppointments = getAppointmentsForDate(dateStr);
              const isSelected = dateStr === selectedDate;
              const isToday = dateStr === new Date().toISOString().split('T')[0];
              
              return (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    isSelected && styles.selectedDay,
                    isToday && styles.today
                  ]}
                  onPress={() => setSelectedDate(dateStr)}
                >
                  <Text style={[
                    styles.dayText,
                    isSelected && styles.selectedDayText
                  ]}>{day}</Text>
                  {dayAppointments.length > 0 && (
                    <View style={styles.appointmentDot} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ThemedView>

      {/* Appointments for Selected Date */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Appointments for {new Date(selectedDate).toLocaleDateString()}
        </ThemedText>
        {getAppointmentsForDate(selectedDate).length === 0 ? (
          <Text style={styles.noAppointments}>No appointments scheduled</Text>
        ) : (
          getAppointmentsForDate(selectedDate).map(apt => (
            <View key={apt.id} style={styles.appointmentCard}>
              <View style={styles.appointmentInfo}>
                <Text style={styles.appointmentTime}>{apt.time}</Text>
                <Text style={styles.appointmentClient}>{apt.clientName}</Text>
                <Text style={styles.appointmentService}>{apt.service}</Text>
                <Text style={styles.appointmentPrice}>${apt.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => cancelAppointment(apt.id)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ThemedView>

      {/* Book Appointment Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => setShowBookingForm(!showBookingForm)}
      >
        <Text style={styles.bookButtonText}>
          {showBookingForm ? 'Hide Booking Form' : 'Book Appointment'}
        </Text>
      </TouchableOpacity>

      {/* Booking Form */}
      {showBookingForm && (
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Book New Appointment</ThemedText>
          
          <TextInput
            style={styles.input}
            placeholder="Client Name"
            value={clientName}
            onChangeText={setClientName}
          />

          <Text style={styles.label}>Select Service:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesContainer}>
            {services.map(service => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceCard,
                  selectedService?.id === service.id && styles.selectedService
                ]}
                onPress={() => setSelectedService(service)}
              >
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceDetails}>{service.duration} min • ${service.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.label}>Available Times:</Text>
          <View style={styles.timeSlotsContainer}>
            {getAvailableTimeSlots().map(time => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTimeSlot
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  styles.timeSlotText,
                  selectedTime === time && styles.selectedTimeSlotText
                ]}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={bookAppointment}>
            <Text style={styles.confirmButtonText}>Confirm Booking</Text>
          </TouchableOpacity>
        </ThemedView>
      )}
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
    fontSize: 18,
    fontWeight: '600',
  },
  calendar: {
    marginBottom: 10,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
    width: 40,
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyDay: {
    width: '14.28%',
    height: 40,
  },
  dayButton: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  selectedDay: {
    backgroundColor: '#3498db',
    borderRadius: 20,
  },
  today: {
    borderWidth: 2,
    borderColor: '#e74c3c',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  appointmentDot: {
    position: 'absolute',
    bottom: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e74c3c',
  },
  noAppointments: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
    padding: 20,
  },
  appointmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  appointmentClient: {
    fontSize: 14,
    color: '#34495e',
    marginTop: 2,
  },
  appointmentService: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
  },
  appointmentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 2,
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: '#3498db',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2c3e50',
  },
  servicesContainer: {
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    marginRight: 10,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  selectedService: {
    backgroundColor: '#3498db',
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  serviceDetails: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 5,
    textAlign: 'center',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  timeSlot: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#27ae60',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  selectedTimeSlotText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
