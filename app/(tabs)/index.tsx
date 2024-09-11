import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import 'moment/locale/id';
import moment from 'moment';

export default function Home() {
  moment.locale('id');
  const today = moment();
  const dayOfWeek = today.format('dddd');
  const date = today.format('D MMMM YYYY');

  return (
    <SafeAreaView>
      <StatusBar
        style="light"
        backgroundColor="#000" />
      <View style={{
        backgroundColor: "#000",
        height: "auto",
        paddingHorizontal: 10,
        paddingVertical: 10
      }}>
        <Text style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold"
        }}>Welcome...</Text>
        <Text style={{
          color: "#fff",
          fontSize: 16,
        }}>Teknologi Informasi</Text>
        <View style={{
          backgroundColor: "#fff",
          height: 150,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 16,
        }}>
          <Text style={{
            fontSize: 16,
          }}>Jadwal Hari Ini</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: "bold"
          }}>{`${dayOfWeek}, ${date}`}</Text>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 80
          }}>
            <Text>Tidak ada jadwal kelas hari ini</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}