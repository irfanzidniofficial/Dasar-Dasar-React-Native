import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Comunication from './pages/Comunication';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Position from './pages/Position';
// import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import ReactNativeSvg from './pages/ReactNativeSvg';
import BasicJavascript from './pages/BasicJavascript';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <StylingComponent /> */}
        {/* <SampleComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Comunication /> */}
        {/* <ReactNativeSvg /> */}
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;
