import React from 'react';
import { StyleSheet, Button, View, Text, Alert, Image, TextInput, TouchableOpacity, position, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function signUp () {
	return (
		
		
		<View style={styles.container}>
			<KeyboardAvoidingView style={styles.keyboardCon}
				behavior="position" keyboardVerticalOffset={-550}>
				
				<Text style={styles.titleText}>Welcome!</Text>
				<Text style={styles.titleSubText}>내 집 주변의 상점을 쉽고 편하게 이용하세요!</Text>
				<Text style={styles.idBoxText}>아이디</Text>
				<TextInput style={{ height: '7%', borderColor: 'gray', borderWidth: 1, width: 300, marginBottom: '3%',}} />
				<Text style={styles.boxText}>비밀번호</Text>
				<TextInput style={{ height: '7%', borderColor: 'gray', borderWidth: 1, width: 300, marginBottom: '3%',}} />
				<Text style={styles.boxText}>휴대전화</Text>
				<TextInput style={{ height: '7%', borderColor: 'gray', borderWidth: 1, width: 300, marginBottom: '3%',}} />
				<Text style={styles.boxText}>주소</Text>
				<TextInput style={{ height: '7%', borderColor: 'gray', borderWidth: 1, width: 300, marginBottom: '2%',}} />
				<TextInput style={{ height: '7%', borderColor: 'gray', borderWidth: 1, width: 300, marginBottom: '10%',}} />
				<TouchableOpacity
					style={styles.button}
					onPress={()=> Alert.alert('가입하시겠습니까?')} >
					<Text>회원가입</Text>
			  	</TouchableOpacity>
				
			</KeyboardAvoidingView>
		</View>
  );
}

export default signUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		flexDirection: 'column',
	},
	
	titleText: {
	  fontSize: 30,
	  textAlign: 'center',
	  margin: '2%',
	  marginTop: '7%',
	},
	
	titleSubText: {
	  fontSize: 13,
	  textAlign: 'center',
	  marginBottom: '10%',
	},

	idBoxText: {
		marginTop: '2%',
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
  	},


});