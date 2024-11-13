import { TouchableOpacity, View, Text, StyleSheet} from "react-native"

const Profile = () => {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
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

export default Profile