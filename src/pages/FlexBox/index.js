import React, {useEffect, useState} from 'react';
// import {Component} from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==>constructor');
//     this.state = {
//       subsriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('===>component did moount');
//     setTimeout(() => {
//       this.setState({
//         subsriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('==>Component Will Unmont');
//   }

//   render() {
//     console.log('===>render');

//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'grey',
//             alignItems: 'flex-start',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 100}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 100}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 100}} />
//           <View style={{backgroundColor: 'blue', width: 50, height: 100}} />
//         </View>

//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Tentang</Text>
//         </View>

//         <View style={{flexDirection: 'row'}}>
//           <Image
//             source={{
//               uri: 'https://yt3.ggpht.com/ytc/AAUvwni7opixQ-VSQI9739TDph246ieyZxHudcFAM1OJ=s88-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text
//               style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
//               Irfan Zidni
//             </Text>
//             <Text>{this.state.subsriber} ribu subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, SetSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      SetSubscriber('400');
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     SetSubscriber('400');
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 100}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 100}} />
        <View style={{backgroundColor: 'green', width: 50, height: 100}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 100}} />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Tentang</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AAUvwni7opixQ-VSQI9739TDph246ieyZxHudcFAM1OJ=s88-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
            Irfan Zidni
          </Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
