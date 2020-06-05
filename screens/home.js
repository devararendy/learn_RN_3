// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
//import react in our code.

import {
  Modal,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {formatCurrency, formatDate} from '../diy_lib/common';

//import all the components we are going to use.
  var dataTmp = []

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      modalVisible: false,
      isLoading: true,
      text: '' ,
      dataTF: [],
    };
    this.arrayholder = [];
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }
  componentDidMount() {
    return fetch('https://nextar.flip.id/frontend-test')
      .then(response => response.json())
      .then(responseJson => {
        dataTmp = []
        Object.keys(responseJson).forEach((FT, index)=>{
          dataTmp[index] = responseJson[FT]
          console.log(responseJson[FT])
          console.log("=========================\r\n")
        })
        this.setState(
          {
            isLoading: false,
            dataSource: dataTmp,
            dataTF: dataTmp
          },
          function() {
            this.arrayholder = dataTmp
            
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.beneficiary_name ? item.beneficiary_name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  RadioButton(props) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#000',
              }}/>
              : null
          }
        </View>
    );
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  toggleListReverse = () => {
    this.setState({
      dataSource: this.state.dataTF.reverse()
    })
  }
  toggleSortDate = () => {
    this.setState({
      dataSource: this.state.dataTF.sort((a,b) => a.created_at > b.created_at)
    })
  }
  toggleSortDateDes = () => {
    this.setState({
      dataSource: this.state.dataTF.sort((a,b) => b.created_at > a.created_at)
    })
  }
  toggleSortName = () => {
    this.setState({
      dataSource: this.state.dataTF.sort((a,b) => a.beneficiary_name > b.beneficiary_name)
    })
  }
  toggleSortNameDes = () => {
    this.setState({
      dataSource: this.state.dataTF.sort((a,b) => b.beneficiary_name > a.beneficiary_name)
    })
  }
  
  render() {
    const { modalVisible } = this.state;
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      
      //ListView to show with textinput used as search bar
      // <ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor:'#f2f2f2'}}>
        <View style={styles.viewStyle}>
          <TouchableWithoutFeedback>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* <tbody>
                  <tr>
                    <td><input type="Radio" value="Nama A-Z" onChange={() => {this.toggleSortName()}}></input></td>
                  </tr>
                </tbody> */}
                <Text style={styles.modalText, {fontWeight:'bold', marginBottom:10}}>URUTKAN</Text>
                <Text style={styles.modalText} onPress={() => {this.toggleSortName()}}>Nama A-Z</Text>
                <Text style={styles.modalText} onPress={() => {this.toggleSortNameDes()}}>Nama Z-A</Text>
                <Text style={styles.modalText} onPress={() => {this.toggleSortDate()}}>Tanggal Terbaru</Text>
                <Text style={styles.modalText} onPress={() => {this.toggleSortDateDes()}}>Tanggal Terlama</Text>
                
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3", paddingHorizontal:50 }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textMdlStyle}>Tutup</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          </TouchableWithoutFeedback>
          
        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.toggleSortName();
            // this.toggleSortDate();
            // this.toggleListReverse();
            // this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
        
        <View style={styles.textInputStyle}>
          <View style={{ flex:7,flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../img/IconSearch.png')} style={{height:30, width:30}}></Image>
            <TextInput
            style={styles.textInputStyle, {width: '100%'}}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder= "Cari nama, bank, atau nominal"
          />
          </View>
          <Text style={{color:'#f25d00', fontWeight:'bold', flex:2, textAlign:'right'}} onPress={() => { this.setModalVisible(true)}}>URUTKAN {'\u2B07'}</Text>
          
        </View>
        
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({ item }) => (
              <React.Fragment key={item.id}>
            <View style={item.status=="SUCCESS"?
              styles.separator:styles.separatorFalse}>
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => {this.props.navigation.navigate('DetailTransaction', {
                  id: item.id,
                  amount: item.amount,
                  unique_code: item.unique_code,
                  status: item.status,
                  sender_bank: item.sender_bank,
                  account_number:item.account_number,
                  beneficiary_name:item.beneficiary_name,
                  beneficiary_bank:item.beneficiary_bank,
                  remark:item.remark,
                  created_at:item.created_at,
                  completed_at:item.completed_at,
                  fee:item.fee,
                })} }
                style={styles.linkContainer}>
                  <View style={styles.itemLeft}>
                    <View style={styles.linkContainer}>
                      <Text style={{fontWeight:'bold'}}>{item.sender_bank.toUpperCase()} </Text>
                      <Image source={require('../img/IconRightArrow.png')} style={{height:20, width:25}}></Image>
                      <Text style={{fontWeight:'bold'}}> {item.beneficiary_bank.toUpperCase()}</Text>
                    </View>
                    
                    <Text style={styles.textStyle}>{item.status!="SUCCESS"?"- ":null}{item.beneficiary_name.toUpperCase()}</Text>
                    <View style={styles.linkContainer}>
                      <Text>Rp {formatCurrency(item.amount)}</Text>
                      <Text style={{fontSize:19}}> {'\u2022'} </Text>
                      <Text>{formatDate(item.created_at)}</Text>
                    </View>
                  </View>
                
                <Text style={item.status=="SUCCESS"?
                    styles.textStatus:styles.textStatusFalse}>{item.status}</Text>
              </TouchableOpacity>
            </View>
          </React.Fragment>
            )}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      // </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 1,
  },
  itemLeft: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 1,
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    // marginTop: 10,
    padding: 16,
  },
  textStyle: {
    // padding: 5,
  },
  textInputStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#fff',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    
  },
  separator: {
    // height: 40,
    borderLeftWidth: 8,
    paddingLeft: 15,
    paddingRight:15,
    marginBottom: 5,
    borderLeftColor: '#00bf40',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  separatorFalse: {
    // height: 40,
    borderLeftWidth: 8,
    paddingLeft: 15,
    paddingRight:15,
    marginBottom: 5,
    borderLeftColor: '#f25d00',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textStatus: {
    // height: 40,
    fontWeight:'bold',
    padding: 7,
    textAlign:'center',
    color:'#fff',
    // paddingRight:15,
    // marginBottom: 5,
    // borderLeftColor: '#f25d00',
    backgroundColor: '#00bf40',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  textStatusFalse: {
    // height: 40,
    fontWeight:'bold',
    padding: 7,
    textAlign:'center',
    color:'#000',
    // paddingRight:15,
    // marginBottom: 5,
    borderWidth:3,
    borderColor: '#f25d00',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    // width:300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textMdlStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  }
});