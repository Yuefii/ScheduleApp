import { Feather, MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";

interface IconMap {
    [key: string]: (props: { color: string }) => ReactNode;
}

export const icon: IconMap = {
    index: (props) => (<Feather name='home' size={24} {...props}/>),
    schedule: (props) => (<MaterialIcons name="schedule" size={24} {...props}/>)
}