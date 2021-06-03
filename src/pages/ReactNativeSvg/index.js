import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMyApp from '../../assets/image/undraw_city.svg';

const ReactNativeSvg = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Materi Menggunakan SVG</Text>
      </View>
      <IllustrationMyApp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
