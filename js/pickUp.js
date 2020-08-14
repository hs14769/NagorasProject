import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TextInput, TouchableOpacity, position, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';

function PickUp () {
	return(
		<ScrollView contentContainerStyle={styles.contentContainer}>
			
			<View style={styles.container}>
				
				
				<View style={styles.pickUpInputBox}>
					
					<View style={styles.destination}>
						<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}> 
							<TextInput
								placeholder={'상점 주소'}
								style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 300, }} />
							<Button title='▼' color='grey' onPress={() => Alert.alert('')}/>
						</View>
					</View>
					
					<View style={styles.ordererInfo}>
						<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}> 
							<TextInput
								placeholder={'주문자 정보'}
								style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 300, }} />
							<Button title='▼' color='grey' onPress={() => Alert.alert('주문자')}/>
						</View>
					</View>
					
					<View style={styles.orderedProductInfo}>
						<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}> 
							<TextInput
								placeholder={'주문상품 정보'}
								style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 300, }} />
							<Button title='▼' color='grey' onPress={() => Alert.alert('주문상품')}/>
						</View>
					</View>
					
					<View style={styles.paymentMethod}>
						<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}> 
							<TextInput
								placeholder={'결제 수단'}
								style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 300, }} />
							<Button title='▼' color='grey' onPress={() => Alert.alert('결제')}/>
						</View>
					</View>
					
				</View>
				
				
				<View style={styles.paymentTbGroup}>
					
					<View style={styles.paymentTbLine}>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Text style={styles.paymentTbTitle}>
								최종 결제금액
							</Text>
						</View>		
					</View>
					
					<View style={styles.paymentTb}>
						<View style={{flex:1, flexDirection: 'row'}}>
							<DataTable style={styles.paymentTbRow}>
								<DataTable.Row>
									<DataTable.Cell>상품금액</DataTable.Cell>
									<DataTable.Cell numeric>10000 원</DataTable.Cell>
								</DataTable.Row>
								
								<DataTable.Row>
									<DataTable.Cell>할인</DataTable.Cell>
									<DataTable.Cell numeric>- 2000 원</DataTable.Cell>
								</DataTable.Row>
								
								<DataTable.Row styles={{flex:1, backgroundColor: 'grey',}}>
									<DataTable.Cell>총 결제금액</DataTable.Cell>
									<DataTable.Cell numeric>11000 원</DataTable.Cell>
								</DataTable.Row>
							</DataTable>
						</View>
					</View>
				</View>
				
				
				<TouchableOpacity
					style={styles.paymentBtn}
					onPress={()=> Alert.alert('가입하시겠습니까?')}>
					<Text>결제하기</Text>
				</TouchableOpacity>
				
			
			</View>
			
		</ScrollView>
	);
}

export default PickUp;

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		alignItems: 'center',
	},

	
	pickUpInputBox: {
		flex: 1,
	},
	
	destination: {
		flex: 1,
	},
	
	ordererInfo: {
		flex: 1,
		marginTop: 30,
	},
	
	orderedProductInfo: {
		flex: 1,
		marginTop: 30,
	},
	
	paymentMethod : {
		flex: 1,
		marginTop: 30,
	},
	
	
	paymentTbGroup: {
		flex: 1,
		marginTop: 100,
	},
	
	paymentTbLine: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'black',
		marginLeft: 10,
		marginRight: 10,
		width: 340,
		height: 30,
	},
	
	paymentTbTitle: {
		color: 'white',
		alignItems: 'center',
		margin: 5,
	},
	
	paymentTb: {
		flex: 1,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 50,
	},

	paymentBtn: {
		alignItems: "center",
		backgroundColor: "#cad7ed",
		padding: 10,
		width: 340,
		height: 40,
		borderRadius: 10,
		marginBottom: 100,
		marginTop: 50,
	},
	
});