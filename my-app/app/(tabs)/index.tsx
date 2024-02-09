import { ScrollView, StyleSheet,TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container} >
        <StatusBar style="auto"/>
            <ScrollView
              contentContainerStyle={{
                flex:1,
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.icon}>
                     <Feather  name="mail" size={22} color="#7C8080"/>
                  </View>
                  <TextInput style={styles.input} placeholder="Email ID" placeholderTextColor="#7C8080" selectionColor="#3662AA"/>
                 
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.icon}>
                     <Feather  name="mail" size={22} color="#7C8080"/>
                  </View>
                  <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#7C8080" selectionColor="#3662AA"/>
                 <TouchableOpacity style={styles.passwordVisible}>
                   <Feather name="eye-off" size={20} color="#7C8080"/>
                 </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordButtonText}>Forgot password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.orContainer}>
                    <View style={styles.orLine}/>
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.orLine}/>
                    <View/>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                
              </View>
        </ScrollView>
       
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
    
  },
  content:{
    paddingHorizontal:30,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000',
    marginBottom:40
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputContainer:{
    flexDirection: "row",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,
    position:"relative",
    backgroundColor: '#fff'
  },
  icon:{
    marginRight:15,
    backgroundColor: '#fff'
  },
  input:{
    borderBottomWidth:1.5,
    flex:1,
    paddingBottom:18,
    borderBottomColor:"#eee",
    fontSize:16
    
  },
  passwordVisible:{
    position: "absolute",
    right:0
  },
  forgotPasswordButton:{
    alignSelf:"flex-end"
  },
  forgotPasswordButtonText:{
    color:"#3662AA",
    fontSize:16,
    fontWeight:"500"
  },
  loginButton:{
    backgroundColor:"#3662AA",
    padding:14,
    borderRadius:10,
    marginTop:20,

  },
  loginButtonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16
  },
  orContainer:{
     flexDirection:"row",
     alignItems:"center",
     marginTop:20,
     marginBottom:20,
     backgroundColor: '#fff'
     
  },
  orLine:{
    height:1,
    backgroundColor:"#eee",
    flex:1
  },
  orText:{
    color: "#7C8080",
    marginRight: 10,
    marginLeft:10,
    fontSize:14,
    backgroundColor: '#fff'
  },
  regButton:{
    color:"#4E5867",
    fontSize:16,
    fontWeight: "500",
    textAlign: "center"
  }
});
