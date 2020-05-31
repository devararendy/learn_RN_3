// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
//   TouchableOpacity,
//   useState,
//   useEffect
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// function onPressAlhamdulillah() {
//   return <View><Text style={styles.sectionTitle}>Step Alhamdulillah Finally</Text></View>;
// }
// const links2 = [
//   {
//     id: 1,
//     title: 'The Basics',
//     link: 'https://facebook.github.io/react-native/docs/tutorial',
//     description: 'Explains a Hello World for React Native.',
//   },
//   {
//     id: 2,
//     title: 'Style',
//     link: 'https://facebook.github.io/react-native/docs/style',
//     description:
//       'Covers how to use the prop named style which controls the visuals.',
//   },
//   {
//     id: 3,
//     title: 'Layout',
//     link: 'https://facebook.github.io/react-native/docs/flexbox',
//     description: 'React Native uses flexbox for layout, learn how it works.',
//   },
//   {
//     id: 4,
//     title: 'Components',
//     link: 'https://facebook.github.io/react-native/docs/components-and-apis',
//     description: 'The full list of components and APIs inside React Native.',
//   },
//   {
//     id: 5,
//     title: 'Navigation',
//     link: 'https://facebook.github.io/react-native/docs/navigation',
//     description:
//       'How to handle moving between screens inside your application.',
//   },
//   {
//     id: 6,
//     title: 'Networking',
//     link: 'https://facebook.github.io/react-native/docs/network',
//     description: 'How to use the Fetch API in React Native.',
//   },
//   {
//     id: 7,
//     title: 'Help',
//     link: 'https://facebook.github.io/react-native/help',
//     description:
//       'Need more help? There are many other React Native developers who may have the answer.',
//   },
//   {
//     id: 8,
//     title: 'Follow us on Twitter',
//     link: 'https://twitter.com/reactnative',
//     description:
//       'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
//   },
// ];

// const App: () => React$Node = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//       {isLoading ? <ActivityIndicator/> : (

//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step Alhamdulillah </Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//               <Button onPress={onPressAlhamdulillah} title="Alhamdulillah hghg" color="grey" ></Button>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <TransactionList></TransactionList>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//         )}
//       </SafeAreaView>
//     </>
//   );
// };

// const TransactionList = (): Node => (
//   <View style={styles2.container}>
//     {links2.map(({id, title, link, description}) => {
//       return (
//         <React.Fragment key={id}>
//           <View style={styles2.separator} />
//           <TouchableOpacity
//             accessibilityRole={'button'}
//             onPress={() => openURLInBrowser(link)}
//             style={styles2.linkContainer}>
//             <Text style={styles2.link}>{title}</Text>
//             <Text style={styles2.description}>{description}</Text>
//           </TouchableOpacity>
//         </React.Fragment>
//       );
//     })}
//   </View>
// );

// const styles2 = StyleSheet.create({
//   container: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   linkContainer: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   link: {
//     flex: 2,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.primary,
//   },
//   description: {
//     flex: 3,
//     paddingVertical: 16,
//     fontWeight: '400',
//     fontSize: 18,
//     color: Colors.dark,
//   },
//   separator: {
//     backgroundColor: Colors.light,
//     height: 1,
//   },
// });

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

// import React,  {Component}  from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,

// } from 'react-native';

// const TransactionList = [
//   {
//     "FT25968":
//     {
//       "id":"FT25968",
//       "amount":4264101,
//       "unique_code":297,
//       "status":"SUCCESS",
//       "sender_bank":"bni",
//       "account_number":"1740619476",
//       "beneficiary_name":"Shanice Harwood",
//       "beneficiary_bank":"btpn",
//       "remark":"sample remark",
//       "created_at":"2020-05-28 18:19:57",
//       "completed_at":"2020-05-28 18:19:57",
//       "fee":0
//     }
//   }
// ];

// export default class bismillah_flip extends Component {
//   constructor(){
//     super()
//     this.state = {
//       dataSource : []
//     }
//   }
//   renderItem = () => {
//     {console.log(item.account_number)}
//     <View>
//       <Text>Ya Allah</Text>
//       <Text>{item.account_number}</Text>
//     </View>
//   }
//   componentDidMount() {
//     const url = 'https://nextar.flip.id/frontend-test'
//     fetch(url)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       // console.log(JSON.stringify(responseJson))
//       this.setState({
//         dataSource: responseJson.FT25968
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//   }
//   render() {
//     return (
//       <View style={style.container}>
//         <Text>Alhamdulillah ygyg</Text>
//         <FlatList
//           data={this.state.dataSource}
//           // keyExtractor={({ id }, index) => id}
//           renderItem={this.renderItem}
//         ></FlatList>
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       backgroundColor:'#F5bbF5',

//     }
//   }
// );


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
} from 'react-native';
//import all the components we are going to use.
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const transdata = [
  
    {
      "id":"FT25968",
      "amount":4264101,
      "unique_code":297,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"1740619476",
      "beneficiary_name":"Shanice Harwood",
      "beneficiary_bank":"btpn",
      "remark":"sample remark",
      "created_at":"2020-05-28 18:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT84371",
      "amount":3992153,
      "unique_code":408,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"3107079972",
      "beneficiary_name":"Shanice Harwood",
      "beneficiary_bank":"bri",
      "remark":"sample remark",
      "created_at":"2020-05-28 18:18:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT26995",
      "amount":2533773,
      "unique_code":852,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"3482073465",
      "beneficiary_name":"Selin Dawe",
      "beneficiary_bank":"muamalat",
      "remark":"sample remark",
      "created_at":"2020-05-28 18:17:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT57291",
      "amount":4981301,
      "unique_code":392,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"4033667796",
      "beneficiary_name":"Sufyan Kramer",
      "beneficiary_bank":"btpn",
      "remark":"sample remark",
      "created_at":"2020-05-27 15:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT90495",
      "amount":3255093,
      "unique_code":111,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"9299133671",
      "beneficiary_name":"Sammy-Jo Mccall",
      "beneficiary_bank":"muamalat",
      "remark":"sample remark",
      "created_at":"2020-05-26 14:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT1703",
      "amount":2110377,
      "unique_code":398,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"7718903324",
      "beneficiary_name":"Shanice Harwood",
      "beneficiary_bank":"bri",
      "remark":"sample remark",
      "created_at":"2020-05-25 13:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT1073",
      "amount":1379246,
      "unique_code":201,
      "status":"SUCCESS",
      "sender_bank":"bni",
      "account_number":"5538652078",
      "beneficiary_name":"Hal Matthams",
      "beneficiary_bank":"bsm",
      "remark":"sample remark",
      "created_at":"2020-05-24 12:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
    {
      "id":"FT22827",
      "amount":2093756,
      "unique_code":329,
      "status":"PENDING",
      "sender_bank":"bni",
      "account_number":"9770462273",
      "beneficiary_name":"Jake Castillo",
      "beneficiary_bank":"btpn",
      "remark":"sample remark",
      "created_at":"2020-05-23 11:19:57",
      "completed_at":"2020-05-28 18:19:57",
      "fee":0
    },
  ]

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
  toggleSortName = () => {
    this.setState({
      dataSource: this.state.dataTF.sort((a,b) => a.beneficiary_name > b.beneficiary_name)
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
           <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textMdlStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.toggleSortName();
            // this.toggleSortDate();
            // this.toggleListReverse();
            // this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
        <View style={styles.textInputStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder= "Cari nama, bank, atau nominal"
          />
          <Text style={{color:'#f25d00', fontWeight:'bold'}} onPress={() => { this.setModalVisible(true)}}>URUTKAN {'\u2B07'}</Text>
          <Text></Text>
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
                      <Text style={{fontWeight:'bold'}}>{item.sender_bank.toUpperCase()}</Text>
                      <Text style={{fontSize:19}}> {'\u21e8'} </Text>
                      <Text style={{fontWeight:'bold'}}>{item.beneficiary_bank.toUpperCase()}</Text>
                    </View>
                    
                    <Text style={styles.textStyle}>{item.status!="SUCCESS"?"- ":null}{item.beneficiary_name.toUpperCase()}</Text>
                    <View style={styles.linkContainer}>
                      <Text>Rp {item.amount}</Text>
                      <Text style={{fontSize:19}}> {'\u2022'} </Text>
                      <Text>{item.created_at}</Text>
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
    marginTop: 10,
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
    // paddingLeft: 10,
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    textAlign: "center"
  }
});