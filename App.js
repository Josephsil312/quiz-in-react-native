import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Index from "./navigation";
export default function App() {
  return (
    
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    paddingHorizontal: 10,
  },
});
