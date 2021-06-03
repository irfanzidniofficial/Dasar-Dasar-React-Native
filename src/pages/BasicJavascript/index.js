import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // 1 jeruk + 1 jaruk = 2 jeruk;
  // 1 j + 1 j = 2 j;

  // Tipe Data

  // Primitive
  const nama = 'Irfan Zidni'; // String
  let usia = 21; // Number
  const apakahLakiLaki = true; // boolean

  // Complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; // Objek

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda $(age)`);
    // Hello Irfan usia anda 21
  }; // Function

  const namaOrang = ['Irfan', 'Mila', 'Jessi']; // Objek - Array

  //   typeof namaOrang: // objek

  // Jika hujan turun, maka kalau kerja bawa payung,
  // Jika perut lapar, maka haris makan

  //   if (hewanPeliharaan.name) === 'Miaw'{
  //       console.log('Hallo Miaw');
  //   } else{
  //       console.log('Hewan Siapa ini?');
  //   }

  sapaOrang('Irfan', 21);

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw, apa kabar?';
    // } else {
    //   hasilSapa = 'Ini hewan Siapa';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hallo Miaw, apa kabar?'
      : 'Ini hewan Siapa';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Basic Javascript</Text>
      <Text>Name: {nama}</Text>
      <Text>Usia: {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>==============</Text>
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}  
      {/* looping */}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
