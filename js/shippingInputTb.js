import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TextInput, TouchableOpacity, position, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';

function delivery () {
	return(
		<View style={styles.container}>
			
			<View style={styles.shippingTbGroup}>
				
				<View style={styles.shippingTbLine}>
					<Text style={styles.shippingTbTitle}>배송지 입력</Text>
				</View>
				
				<View style={styles.shippingInputBoxGroup}>
					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={styles.shippingInputTxt}>수령인</Text>
						<TextInput style={{ height: 35, borderColor: 'grey', borderWidth: 1, width: 225, marginTop: 10,}} />
					</View>
					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={styles.shippingInputTxt}>연락처</Text>
						<TextInput style={{ height: 35, borderColor: 'grey', borderWidth: 1, width: 225, marginTop: 10,}} />
					</View>
					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={styles.shippingInputTxt}>배송지</Text>
						<TextInput style={{ height: 35, borderColor: 'grey', borderWidth: 1, width: 150, marginTop: 10,}} />
						<View style={{marginLeft: 10, marginTop: 10,}}>
							<Button title='주소검색' color='grey' onPress={() => Alert.alert('주소검색')} />
						</View>
					</View>
					<View style={{flex: 2, flexDirection: 'column', alignItems: 'flex-end', marginRight: 15,}}>
						<TextInput style={{ height: 35, borderColor: 'grey', borderWidth: 1, width: 225, marginTop: 10,}} />
						<TextInput style={{ height: 35, borderColor: 'grey', borderWidth: 1, width: 225, marginTop: 10, marginBottom: 10,}} />
					</View>
				</View>
			</View>
			
		</View>
	);
}

export default delivery;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		alignItems: 'center',
		
	},
	
	shippingTbGroup: {
		flex: 1,
		width: 340,
		height: 40,
	},
	
	
	shippingTbLine: {
		
		marginLeft: 10,
		marginRight: 10,
		
		alignItems: 'center',
		backgroundColor: 'black',
	},
	
	shippingTbTitle: {
		color: 'white',
		fontSize: 18,
		margin: 5,
	},
	
	
	shippingInputBoxGroup: {
		height: 280,
		
		borderWidth: 1,
		marginLeft: 10,
		marginRight: 10,
	},
	
	shippingInputTxt: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
	},
	

	
});