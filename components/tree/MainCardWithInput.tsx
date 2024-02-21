import { View, StyleSheet } from 'react-native';
import NumericInput from '../leaf/NumericInput';
import MainCard from './MainCard';
import OdysseyButton from '../leaf/OdysseyButton';
import { useContext, useState } from 'react';
import { SetMainPriceContext } from '../forest/PriceContext';
import { CONSTANT } from '../../constants/constant';

const MainCardWithInput = () => {
  const { setMainPrice } = useContext(SetMainPriceContext);

  // 収入（年収・月給・時給）入力値
  const [annualIncome, setAnnualIncome] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  const [hourlyIncome, setHourlyIncome] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const handlePress = () => {
    if (!hour) return;

    const mainPrice = hourlyIncome * hour;
    setMainPrice(mainPrice);
    console.log('mainPrice:', mainPrice);
  };

  const calculateIncome = (incomeType: string) => {
    switch (incomeType) {
      case CONSTANT.LABEL.ANNUAL_INCOME:
        return (annualIncomeString: string) => {
          const annualIncome = Number(annualIncomeString);
          setAnnualIncome(annualIncome);
          const monthlyIncome = annualIncome / CONSTANT.CALC.MONTH_OF_THE_YEAR;
          const hourlyIncome = monthlyIncome / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
          setMonthlyIncome(Math.round(monthlyIncome));
          setHourlyIncome(Math.round(hourlyIncome));
        };
      case CONSTANT.LABEL.MONTHLY_INCOME:
        return (monthlyIncomeString: string) => {
          const monthlyIncome = Number(monthlyIncomeString);
          setMonthlyIncome(monthlyIncome);
          const annualIncome = monthlyIncome * CONSTANT.CALC.MONTH_OF_THE_YEAR;
          const hourlyIncome = monthlyIncome / CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
          setAnnualIncome(Math.round(annualIncome));
          setHourlyIncome(Math.round(hourlyIncome));
        };
      case CONSTANT.LABEL.HOURLY_INCOME:
        return (hourlyIncomeString: string) => {
          const hourlyIncome = Number(hourlyIncomeString);
          setHourlyIncome(hourlyIncome);
          const monthlyIncome = hourlyIncome * CONSTANT.CALC.ONE_MONTH_WORKING_HOUR;
          const annualIncome = monthlyIncome * CONSTANT.CALC.MONTH_OF_THE_YEAR;
          setMonthlyIncome(Math.round(monthlyIncome));
          setAnnualIncome(Math.round(annualIncome));
        };
      default:
        return () => {};
    }
  };

  return (
    <MainCard title='Time is Money' headerBgColor='#cda7ff'>
      <View style={styles.container}>
        <NumericInput
          label={CONSTANT.LABEL.ANNUAL_INCOME}
          unit='¥'
          unitPosition='left'
          value={annualIncome}
          extraHandleTextChange={calculateIncome(CONSTANT.LABEL.ANNUAL_INCOME)}
        />
        <NumericInput
          label={CONSTANT.LABEL.MONTHLY_INCOME}
          unit='¥'
          unitPosition='left'
          value={monthlyIncome}
          extraHandleTextChange={calculateIncome(CONSTANT.LABEL.MONTHLY_INCOME)}
        />
        <NumericInput
          label={CONSTANT.LABEL.HOURLY_INCOME}
          unit='¥'
          unitPosition='left'
          value={hourlyIncome}
          extraHandleTextChange={calculateIncome(CONSTANT.LABEL.HOURLY_INCOME)}
        />
        <NumericInput
          label={CONSTANT.LABEL.HOUR}
          unit='h'
          unitPosition='right'
          value={hour}
          extraHandleTextChange={(value: string) => setHour(Number(value))}
        />
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
