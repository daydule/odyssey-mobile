import { View, StyleSheet, ImageBackground } from 'react-native';
import Images from '../../constants/Images';
import Main from '../../components/forest/Main';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.aboutBackground} style={styles.backgroundImage}>
        <Main />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
