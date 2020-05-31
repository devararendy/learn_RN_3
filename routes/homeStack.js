import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home';
import DetailTransaction from '../screens/detailTransaction';

const Stack = createStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="DetailTransaction" component={DetailTransaction}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
