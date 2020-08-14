import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Title, Content, Footer, FooterTab, Icon } from 'native-base';

import DeliveryScreen from './delivery';
import PickUpScreen from './pickUp';

const Stack = createStackNavigator();

function ProductScreen({navigation}) {
  return (
	  <Container>
		  <Content>
			  <ScrollView contentContainerStyle={styles.contentContainer}>

				<View style={styles.container}>

					<View style={styles.productImg}>
						<View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
							<Image style={{ width: 250, height: 180, resizeMode: 'contain', }}
							  source={{
								uri: 'https://mblogthumb-phinf.pstatic.net/20150929_180/hamebio_1443500955434xeOBz_JPEG/banana1.jpg?type=w2',
								resizeMode: 'contain',
							  }}
							/>
						</View>
						<Text style={styles.imgTitle}>
								델몬트 현지 직배송 싱싱 바나나
						</Text>
					</View>

					<View style={styles.productTb}>
						<DataTable>
							<DataTable.Row>
								<DataTable.Cell>가격(묶음당)</DataTable.Cell>
								<DataTable.Cell numeric>20000 원</DataTable.Cell>
							</DataTable.Row>

							<DataTable.Row>
								<DataTable.Cell>수량(재고)</DataTable.Cell>
								<DataTable.Cell numeric>500 개</DataTable.Cell>
							</DataTable.Row>

							<DataTable.Row>
								<DataTable.Cell>입고일</DataTable.Cell>
								<DataTable.Cell numeric>Today!</DataTable.Cell>
							</DataTable.Row>

							<DataTable.Row>
								<DataTable.Cell>유통기한</DataTable.Cell>
								<DataTable.Cell numeric>7일 뒤까지</DataTable.Cell>
							</DataTable.Row>				
						</DataTable>
					</View>

					<View style={styles.descriptionImg}>
						<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
							<Image
							  source={{
								uri: 'https://t1.daumcdn.net/cfile/tistory/99C54F3C5BD8073E02',
								method: 'POST',
							  }}
							  style={{ 
									width: 250,
									height: 180,

									borderRadius: 20,
									resizeMode: 'contain',
								}}
							/>
						</View>
						<Text style={styles.descriptionTitle}>
								제품정보 및 설명
						</Text>
						<Text style={styles.description}>
								원산지: 제주도 / 품종: 몽키바나나 / 당도: 18Brix / 아무말아무말아넘모하기싫다귀찮다고
						</Text>
					</View>		
					<View style={styles.descriptionBtn}>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Button
								title="상세정보 더보기 ▼"
								color="grey"
								onPress={() => Alert.alert("Don't touch Me!")}
							/>
						</View>
					</View>

					<View style={styles.qnaLine}>
						<View style={{flex: 1, flexDirection: 'row'}}>
							<Text style={styles.qnaTitle}>
								문의사항
							</Text>
						</View>		
					</View>

					<View style={styles.qnaTb}>
						<View style={{flex:1, flexDirection: 'row'}}>
							<DataTable style={styles.qnaTbRow1}>
								<DataTable.Header>
									<DataTable.Title>UserName</DataTable.Title>
									<DataTable.Title numeric>Comment</DataTable.Title>
								</DataTable.Header>

								<DataTable.Row>
									<DataTable.Cell>김씨</DataTable.Cell>
									<DataTable.Cell numeric>18Brix라 기분이 나쁩니다.</DataTable.Cell>
								</DataTable.Row>

								<DataTable.Row>
									<DataTable.Cell>이씨</DataTable.Cell>
									<DataTable.Cell numeric>바나나가 맛이 죠읍니다.</DataTable.Cell>
								</DataTable.Row>
							</DataTable>
						</View>
					</View>

				</View>
			  </ScrollView>
		  </Content>
		  
		  <Footer style={styles.footer}>
			<FooterTab style={styles.footerTab}>
				
				
				<TouchableOpacity
					style={styles.footerBtn}
					onPress={()=>Alert.alert('Press!')}>
					<Text style={{ color: 'grey', fontSize: 12}}>☆ 즐겨찾기</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.footerCenterBtn}
					onPress={() =>navigation.navigate('Delivery')}>
					<Text style={{ color: 'grey', fontSize: 12}}>결제</Text>
				</TouchableOpacity>
				
				<TouchableOpacity
					style={styles.footerBtn}
					onPress={()=>Alert.alert('Press!')}>
					<Text style={{ color: 'grey', fontSize: 12}}>리뷰</Text>
				</TouchableOpacity>
			  
			</FooterTab>
		  </Footer>
		  
	  </Container>
  );
}
function App () {
	return(
		<Stack.Navigator>
			<Stack.Screen name='Product' options={{headerShown:false}} component={ProductScreen}/>
			<Stack.Screen name='Delivery' options={{headerShown:false}} component={DeliveryScreen}/>
			<Stack.Screen name='PickUp' options={{headerShown:false}} component={PickUpScreen}/>
		</Stack.Navigator>
	)
}

export default App;
const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

  container: {
	marginTop: 50,
	marginLeft: 10,
	marginRight: 10,
  },


	
  productImg: {
	flex: 1,
	marginBottom: 30,
	flexDirection: 'column',
  },
	
  imgTitle: {
	flex: 1,
	fontSize: 18,
	alignSelf: 'center',
  },
	
  productTb: {
	margin: 30,
    marginBottom: 70,
    backgroundColor: '#F1F1F1',
	flexDirection: 'column',
  },

	
	
  descriptionImg: {
	flex: 1,
	marginTop: 100,
	marginBottom: 50,
	flexDirection: 'column',
  },
	
  descriptionTitle: {
	flex: 1,
	marginTop: 30,
	marginLeft: 10,
	fontSize: 18,
	alignSelf: 'flex-start',
  },

  description: {
	flex: 1,
	margin: 10,
	fontSize: 15,
	alignSelf: 'flex-start',
  },
	
  descriptionBtn: {
	flex: 1,
	alignSelf: 'center',
	marginBottom: 150,
  },
	
  qnaLine: {
	backgroundColor: 'black',
  },
	
  qnaTitle: {
	alignSelf: 'center',
	color: 'white',
  },
	
  qnaTb: {
	alignSelf: 'center',
	marginTop: 10,
	marginBottom: 100,
  },
	
	
  footer: {
	  height: 45,
	  
	  justifyContent: 'center',
	  alignItems: 'center',
  },
	
  payBtnGroup: {	
	
    flex: 1,
    flexDirection: 'row',
	justifyContent: 'flex-start'
	
  },
	
  footerBtn: {
	  width: '25%',
	  backgroundColor: 'white',
	  alignItems: 'center',
	  justifyContent: 'center',
	  
  },
	
  footerCenterBtn: {
	  width: '50%',
	  backgroundColor: 'white',
	  alignItems: 'center',
	  justifyContent: 'center',
	  
  },
	
	
	
});
