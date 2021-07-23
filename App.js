import React, { useEffect } from 'react';
import Home from './components/home';
import About from './components/about';
import ReviewDetails from './components/reviewDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "white",
          fontSize: 20,
          marginLeft: 20,
        },
        headerStyle: {
          backgroundColor: "#1a75ff",
          borderBottomLeftRadius: 7,
          borderBottomEndRadius: 7,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          title: '',
          headerStyle: {
            height: 0,
          }
        }}
      />
      <Stack.Screen name="Review" component={ReviewDetails}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={30} color="white"
                style={{
                  marginLeft: 20,
                }}
                onPress={() => { navigation.navigate("Home") }}
              />
            </TouchableOpacity>)
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeScreen"
          edgeWidth={100}
        >
          <Drawer.Screen name="HomeScreen" component={HomeStack}
          />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
