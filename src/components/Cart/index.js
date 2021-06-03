import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ic_order from '../../assets/icon/ic_order.png';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={ic_order} style={styles.ic_order} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  wrapper: {
    padding: 28,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    height: 90,
    borderColor: 'orange',
    width: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  ic_order: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
