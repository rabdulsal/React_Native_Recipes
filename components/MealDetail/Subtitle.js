import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
 return (
   <View style={styles.subitleContainer}>
     <Text style={styles.subtitle}>{children}</Text>
   </View>
 );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 12,
    fontWeight: 'bold',

  },
  subitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24
  }
})

export default Subtitle;
