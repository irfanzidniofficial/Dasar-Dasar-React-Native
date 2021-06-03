import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import makanan from '../../assets/image/makanan.png';

const Product = props => {
  return (
    <View styles={styles.wrapper}>
      <Image source={makanan} style={styles.imageProduct} />
      <Text style={styles.productName}>New Seafood Seafood 2021</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000</Text>
      <Text style={styles.location}>Jakarta Selatan</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F29944',
    marginTop: 20,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    paddingTop: 6,
    paddingBottom: 18,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
});
