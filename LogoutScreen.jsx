import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LogoutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout Screen</Text>
      <Button title="Confirm Logout" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, marginBottom: 20},
});

export default LogoutScreen;
