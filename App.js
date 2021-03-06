import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './pages/StartPage';
import DoctorSignUp from './pages/DoctorSignUp';
import PatientSignUp from './pages/PatientSignUp';
import PatientLogin from './pages/PatientLogin';
import DoctorLogin from './pages/DoctorLogin';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Assistant from './patient/Assistant';
import CheckLogs from './patient/CheckLogs';
import DoctorLogs from './patient/DoctorLogs';
import Symptoms from './patient/Symptoms';
import Results from './patient/Results';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#23a4e4' }}>
      <StartPage />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: '#23a4e4',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }} />
        <Stack.Screen 
          name="doctors-sign-up" 
          component={DoctorSignUp} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        />
          <Stack.Screen 
            name="doctor-login" 
            component={DoctorLogin} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#23a4e4',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          }}
          />
          <Stack.Screen 
            name="doctor-dashboard" 
            component={DoctorDashboard} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#23a4e4',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          }}
          />
        <Stack.Screen 
          name="patient-sign-up" 
          component={PatientSignUp} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        />
          <Stack.Screen 
            name="patient-login" 
            component={PatientLogin} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#23a4e4',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          }}
          />
        <Stack.Screen 
          name="patient-dashboard" 
          component={PatientDashboard} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        />
          <Stack.Screen 
          name="assistant" 
          component={Assistant} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="check-logs" 
          component={CheckLogs} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="doctor-logs" 
          component={DoctorLogs} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="symptoms" 
          component={Symptoms} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#23a4e4',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
            <Stack.Screen 
            name="results" 
            component={Results} 
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#23a4e4',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

