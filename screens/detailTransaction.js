import React,  { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,

} from 'react-native';

export default class App extends Component{
  render(){
    console.log(this.props)
    // const { navigation } = this.props;
    const id = this.props.route.params.id;
    const amount = this.props.route.params.amount;
    const unique_code = this.props.route.params.unique_code;
    const status = this.props.route.params.status;
    const sender_bank = this.props.route.params.sender_bank;
    const account_number = this.props.route.params.account_number;
    const beneficiary_name = this.props.route.params.beneficiary_name;
    const beneficiary_bank = this.props.route.params.beneficiary_bank;
    const remark = this.props.route.params.remark;
    const created_at = this.props.route.params.created_at;
    const completed_at = this.props.route.params.completed_at;
    const fee = this.props.route.params.fee;
    return(
      <View style={styles.viewStyle}>
          {/* <Text>
              Bismillah...
              {id}
              {amount}
          </Text> */}
          <View style={styles.secndContainer}>
            <Text style={{fontWeight:'bold'}}>ID TRANSAKSI:#{id}</Text>
          </View>
          
          <View style={styles.secndContainer}>
            <Text style={{fontWeight:'bold'}}>DETAIL TRANSAKSI</Text>
            <Text style={{color:'#f25d00'}} onPress={() => this.props.navigation.goBack()}>Tutup</Text>
          </View>
          
          <View style={styles.colContainer}>
            <View style={{paddingVertical:15, backgroundColor:'#fff'}}>
              <View style={styles.thrdContainer}>
                <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{fontWeight:'bold', fontSize:18}}>{sender_bank.toUpperCase()}</Text>
                  <Text style={{fontSize:20}}> {'\u21e8'} </Text>
                  <Text style={{fontWeight:'bold', fontSize:18}}>{beneficiary_bank.toUpperCase()}</Text>
                </View>
              </View>
            </View>
            <View style={{paddingVertical:15, backgroundColor:'#fff'}}>
              <View style={styles.thrdContainer}>
                <Text style={{fontWeight:'bold'}}>{status!="SUCCESS"?"- ":null}{beneficiary_name.toUpperCase()}</Text>
                <Text style={{fontWeight:'bold'}}>NOMINAL</Text>
              </View>
              <View style={styles.thrdContainer}>
                <Text>{account_number}</Text>
                <Text>Rp {amount}</Text>
              </View>
            </View>
            <View style={{paddingVertical:15, backgroundColor:'#fff'}}>
              <View style={styles.thrdContainer}>
                <Text style={{fontWeight:'bold'}}>BERITA TRANSFER</Text>
                <Text style={{fontWeight:'bold'}}>KODE UNIK</Text>
              </View>
              <View style={styles.thrdContainer}>
                <Text>{remark}</Text>
                <Text>{unique_code}</Text>
              </View>
            </View>
            <View style={{paddingVertical:15, backgroundColor:'#fff'}}>
              <View style={styles.thrdContainer}>
                <Text style={{fontWeight:'bold'}}>WAKTU DIBUAT</Text>
              </View>
              <View style={styles.thrdContainer}>
                <Text>{created_at}</Text>
              </View>
            </View>
          </View>
          

      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  secndContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor:'#FFF',
    marginBottom:1,
  },
  thrdContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor:'#fff',
    paddingHorizontal: 30,
  },
  colContainer:{
    flex:1,
    flexDirection:'column',
    // justifyContent:'center',
    alignItems:'stretch',

  },
  viewStyle: {
    // justifyContent: 'center',
    flex: 1,
    marginTop: 20,
   

  },

});