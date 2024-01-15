import { View, StyleSheet } from 'react-native';
import NumericInput from '../leaf/NumericInput';
import MainCard from './MainCard';
import OdysseyButton from '../leaf/OdysseyButton';

const MainCardWithInput = () => {
  const handlePress = () => {
    console.log('Time is Money');
  };

  return (
    <MainCard title='Time is Money' headerBgColor='#cda7ff'>
      <View style={styles.container}>
        <NumericInput label='年収' unit='¥' unitPosition='left' />
        <NumericInput label='月収' unit='¥' unitPosition='left' />
        <NumericInput label='時給' unit='¥' unitPosition='left' />
        <NumericInput label='Time' unit='h' unitPosition='right' />
        <View style={styles.buttonContainer}>
          <OdysseyButton label='Time is Money' onPress={handlePress} />
        </View>
      </View>
    </MainCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 54,
  },
});

export default MainCardWithInput;
