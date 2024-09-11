import { StyleSheet, Text, View } from "react-native";

interface ScheduleItemType {
    time: string,
    subject: string,
    isHighlighted: boolean,
}

export const ScheduleItem = ({
    time,
    subject,
    isHighlighted
}: ScheduleItemType) => (
    <View
        style={styles.scheduleItem}>
        <Text
            style={styles.time}>{time}</Text>
        <Text
            style={[styles.subject, isHighlighted && styles.highlightedSubject]}>
            {subject}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    scheduleItem: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    time: {
        borderRightWidth: 3,
        paddingRight: 10,
        fontSize: 16,
    },
    subject: {
        fontSize: 16,
        paddingVertical: 3,
    },
    highlightedSubject: {
        backgroundColor: "#000",
        borderRadius: 20,
        color: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 3,
    }
});