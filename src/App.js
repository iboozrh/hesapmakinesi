import React from 'react'
import { Text, View } from 'react-native';
import Button from './component/button';
import { Calculator } from './hooks/hooks';
import styles from './style';

const CalculadorScreen = () => {
  const {
    beforeNumber,
    number,
    cleanNumber,
    negativeNumber,
    deleteLastNumber,
    dividir,
    concatNumber,
    multiplicar,
    restar,
    sumar,
    operation,
  } = Calculator();

  return (
    <View style={styles.container}>
      {beforeNumber !== '0' && (
        <Text style={styles.beforeText}>
          {beforeNumber}
        </Text>
      )}
      <Text
        style={styles.text}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.rowButton}>
        <Button
          text="AC"
          action={cleanNumber}
          color="#9B9B9B"
        />
        <Button
          text="+/-"
          action={negativeNumber}
          color="#9B9B9B"
        />
        <Button
          text="%"
          action={deleteLastNumber}
          color="#9B9B9B"
        />
        <Button
          text="÷"
          action={dividir}
          color="#FF9427"
          
        />
      </View>

      <View style={styles.rowButton}>
        <Button
          text="7"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="8"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="9"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="X"
          action={multiplicar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <Button
          text="4"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="5"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="6"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="-"
          action={restar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <Button
          text="1"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="2"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="3"
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="+"
          action={sumar}
          color="#FF9427"
        />
      </View>

      <View style={styles.rowButton}>
        <Button
          text="0"
          action={concatNumber}
          color="#2B2B2B"
          width="50"
        />
        <Button
          text=","
          action={concatNumber}
          color="#2B2B2B"
        />
        <Button
          text="="
          action={operation}
          color="#FF9427"
        />
      </View>
    </View>
  )
}

export default CalculadorScreen;
