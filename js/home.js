import React, { Component } from 'react'; 
import { Text, View , Image, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native'; 
import { NavigationScreenProp } from "react-navigation";
import SignInScreen from './signIn';
import SignUpScreen from './signUp';
import { createStackNavigator } from '@react-navigation/stack';
class QuickBtn extends Component{
  render(){
    return (
      <TouchableOpacity style={styles.QuickButton}>
        <Text>O</Text>
      </TouchableOpacity>
    );
  }
}

function HomeScreen({ navigation }) {

	return (
    <View style={{ flex: 1,justifyContent: "center",alignItems: 'center' }}> 
            <View style = {{position:"absolute",flexDirection:"row",top:10,right:10}}>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
				  <Text>로그인</Text>
				</TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() =>navigation.navigate('SignUp')}>
					<Text>회원가입</Text>
				</TouchableOpacity>

            </View>
             
               <Image source={require('../img/text.png')} style={{ width:100,height:200 }}/>

              <View style={{flexDirection:"row",marginBottom:50}}>
                <TextInput style={styles.searchBar}></TextInput>
				<TouchableOpacity onPress={()=>navigation.navigate('Map')}>
					<Image source={require('../img/search.png')} style={{width:50,height:50}}/>
				</TouchableOpacity>

              </View>
              <View style={styles.QuickMenu}>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              </View>
              <View style={styles.QuickMenu}>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              <QuickBtn></QuickBtn>
              </View>
            </View>
		 
  );
};
const Stack = createStackNavigator();
function App () {
	return(
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} 
				options={{headerShown:false}}  />
			<Stack.Screen name='SignUp' component={SignUpScreen}/>
			<Stack.Screen name='SignIn' component={SignInScreen}/>
		</Stack.Navigator>
	)
}

export default App;

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 1,
        width: 300,
        borderRadius: 20,
    },
    QuickMenu : {
      flexDirection:"row",
      justifyContent:"space-around",
      margin :20,
      width:"100%"
    },
    QuickButton : {
      borderRadius : 50,
      backgroundColor:"grey",
      borderStyle:"solid",
      width: 40,
      height:40,
      justifyContent:"center",
      alignItems:"center",
    },
	btn : {
		padding : 10,
		paddingTop : 16
}
  });