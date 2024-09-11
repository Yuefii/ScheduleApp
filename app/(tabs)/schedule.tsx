import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { SCHEDULE_DATA } from '@/constants/schedule';
import { ScheduleItem } from '@/components/ScheduleItem';

export default function Schedule(){
  return (
    <SafeAreaView>
      <StatusBar 
      style="light" 
      backgroundColor='#000' />
      <View 
      style={styles.header}>
        <Text 
        style={styles.headerText}>Schedule</Text>
      </View>
      {SCHEDULE_DATA.map((daySchedule, index) => (
        <View
          key={index}
          style={styles.scheduleDay}
        >
          <Text 
          style={styles.dayText}>
            {daySchedule.day}
            </Text>
          {daySchedule.events.map((event, idx) => (
            <ScheduleItem
              key={idx}
              time={event.time}
              subject={event.subject}
              isHighlighted={event.isHighlighted}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    height: 50,
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    paddingVertical: 10,
    textAlign: "center"
  },
  scheduleDay: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 130,
    marginTop: 16,
    marginHorizontal: 10,
    borderRadius: 16,
  },
  dayText: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
