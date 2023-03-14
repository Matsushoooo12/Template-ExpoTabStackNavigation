import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'
import MessageScreen from '../screens/MessageScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Tab'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Setting'
          component={SettingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator