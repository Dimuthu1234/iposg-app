import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import MyShops from './screens/MyShops';
import LiveSales from './screens/LiveSales';
import SalesExceptions from './screens/SalesExceptions';
import StockManager from './screens/StockManager';
import Promotions from './screens/Promotions';
import StockControl from './screens/StockControl';
import StockAdjustment from './screens/StockAdjustment';
import StockIn from './screens/StockIn';
import Order from './screens/Order';
import LabelPrint from './screens/LabelPrint';
import About from './screens/About';
import Notification from './screens/Notification';


const {width} = Dimensions.get('window');

export default function App() {
  return (
    <AppDrawerNavigator />
  );
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.drawerHeader}>
      <Image source={require('./assets/images/logo.png')} style={styles.drawerHeaderImage} />
      <Text style={styles.drawerHeaderText}>IposgApp</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  'Login':Login,
  'User Profile':Profile,
  'Dashboard':Dashboard,
  'My Shops':MyShops,
  'Live Sales':LiveSales,
  'Sales Exceptions':SalesExceptions,
  'Stock Manager':StockManager,
  'Promotions':Promotions,
  'Stock Control':StockControl,
  'Stock Adjustment':StockAdjustment,
  'Stock In':StockIn,
  'Order':Order,
  'Label Print':LabelPrint,
  'About':About,
  'Notifications':Notification,
},{
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor: '#0000A0'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea:{
    flex:1,
    backgroundColor: '#D3D3D3',
  },
  drawerHeader:{
    width:'100%',
    height: 200,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#D3D3D3',
  },
  drawerHeaderImage:{
    height: 130,
    width: '90%',
  },
  drawerHeaderText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0000A0',
  },
});
