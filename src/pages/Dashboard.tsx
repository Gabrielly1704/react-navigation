import { TouchableOpacity, View, Text, StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import { StackNavigatorProps } from "../routes"

const Dashboard = () => {
  const {navigate} = useNavigation<StackNavigatorProps>()
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigate("signin")}>
        <Text style={styles.title}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4b5fd"
  },
  title:{
    fontSize: 24,
  }
})

export default Dashboard