import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function Schedule() {
  return (
    <SafeAreaView>
    <StatusBar style="light" backgroundColor='#000' />
      <View style={{
        backgroundColor: "#000",
        height: 50,
      }}>
      <Text style={{
        fontSize: 20,
        color: "#fff",
        paddingVertical: 10,
        textAlign: "center"
      }}>Schedule</Text>
      </View>
      <View style={{
        backgroundColor: "#fff",
        padding: 10,
        height: 100,
        borderStyle: "solid",
        borderColor: "#000",
        marginVertical: 10,
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline"
        }}>Rabu</Text>
        <View style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                borderRightWidth: 3,
                paddingRight: 10,
                fontSize: 16,
            }}>10.30 - 11.30</Text>
            <Text style={{
                backgroundColor: "#000",
                borderRadius: 20,
                fontSize: 16,
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 3,
            }}>Kimia</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: "#fff",
        padding: 10,
        height: "auto",
        borderStyle: "solid",
        borderColor: "#000"
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline"
        }}>Kamis</Text>
        <View>
            <View style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                borderRightWidth: 3,
                paddingRight: 10,
                fontSize: 16,
            }}>09.30 - 10.30</Text>
            <Text style={{
                fontSize: 16,
                paddingVertical: 3,
            }}>Teknologi Web</Text>
            </View>
        </View>
        <View>
            <View style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                borderRightWidth: 3,
                paddingRight: 10,
                fontSize: 16,
            }}>10.30 - 11.30</Text>
            <Text style={{
                backgroundColor: "#000",
                borderRadius: 20,
                fontSize: 16,
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 3,
            }}>Komunikasi Prof</Text>
            </View>
        </View>
      </View>
      <View style={{
        backgroundColor: "#fff",
        padding: 10,
        height: "auto",
        borderStyle: "solid",
        borderColor: "#000",
        marginVertical: 10
      }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline"
        }}>Sabtu</Text>
        <View>
            <View style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                borderRightWidth: 3,
                paddingRight: 10,
                fontSize: 16,
            }}>09.30 - 10.30</Text>
            <Text style={{
                backgroundColor: "#000",
                borderRadius: 20,
                fontSize: 16,
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 3,
            }}>Permodelan Data</Text>
            </View>
        </View>
        <View>
            <View style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                borderRightWidth: 3,
                paddingRight: 10,
                fontSize: 16,
            }}>10.30 - 11.30</Text>
            <Text style={{
                fontSize: 16,
                paddingVertical: 3,
            }}>Jaringan Nirkabel</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}