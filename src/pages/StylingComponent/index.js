import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import makanan from '../../assets/image/makanan.png';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component Kuys</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={makanan}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 21, fontWeight: 'bold', marginTop: 16}}>
          New Seafood Seafood 2021
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#F29944',
            marginTop: 20,
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Selatan
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            paddingTop: 6,
            paddingBottom: 18,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
