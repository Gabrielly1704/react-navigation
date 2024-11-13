import { TouchableOpacity, View, Text, StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import { StackNavigatorProps } from "../routes"

const SignIn = () => {
  const {navigate} = useNavigation<StackNavigatorProps>()
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigate("dashboard")}>
        <Text style={styles.title}>SignIn</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a5b4fc"
  },
  title:{
    fontSize: 24,
    color: "#f8fafc"
  }
})

export default SignIn