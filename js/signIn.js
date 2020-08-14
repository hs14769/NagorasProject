import React from 'react';
import { StyleSheet, Button, View, Text, Alert, Image, TextInput, TouchableOpacity, position, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



function signIn () {
	return (
		<View style={styles.container}>
			<KeyboardAvoidingView style={styles.keyboardCon}
				behavior="position" keyboardVerticalOffset={-550}>
				
				<Text style={styles.titleText}>로그인</Text>
				<Text style={styles.boxText}>아이디</Text>
				<TextInput style={{ height: '10%', borderColor: 'gray', borderWidth: 1, width: 300,marginBottom: '5%',}} />
				<Text style={styles.boxText}>비밀번호</Text>
				<TextInput style={{ height: '10%', borderColor: 'gray', borderWidth: 1, width: 300, }} />
				<TouchableOpacity
					style={styles.button}
					onPress={()=> Alert.alert('눌러봐야 아무것도 없다!!')} >
					<Text>로그인</Text>
			  	</TouchableOpacity>
				
				
			</KeyboardAvoidingView>
		
		</View>
	);
}

export default signIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		flexDirection: 'column',
	},
	
	
	titleText: {
	  fontSize: 40,
	  textAlign: 'center',
	  marginTop: '10%',
	  marginBottom: '18%'
	},
	
	idBoxText: {
		marginBottom: 3,
	},

	boxText: {
		marginBottom: 3,
	},
	
	signUpBtn: {
		flex: 1,
	},

	button: {
		alignItems: "center",
    	backgroundColor: "#cad7ed",
    	padding: 10,
		width: 300,
		height: 40,
		borderRadius: 10,
		marginTop: '30%',
  	},

});