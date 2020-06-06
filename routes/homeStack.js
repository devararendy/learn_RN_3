import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import DetailTransaction from '../screens/detailTransaction';

const Stack = createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Transaction List' }}/>
                <Stack.Screen name="DetailTransaction" component={DetailTransaction}  options={{ title: 'Transaction Detail' }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
