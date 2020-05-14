import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryContainer,
  VictoryAxis
} from 'victory-native';
import { device, func } from '../constants';

const ChartWeek = () => (
  <View style={styles.container}>
    <VictoryChart
      height={170}
      width={550}
      containerComponent={(
        <VictoryContainer
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      )}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
    >
      <VictoryLine
        interpolation="step"
        style={{
          data: { stroke: 'green' },
          parent: { border: '1px solid #ccc' }
        }}
        data={[
          { x: 0, y: 0 },
          { x: 2, y: func.getRandomInt(1, 3) },
          { x: 4, y: func.getRandomInt(4, 8) },
          { x: 6, y: func.getRandomInt(0, 2) },
          { x: 8, y: func.getRandomInt(2, 7) },
          { x: 9, y: func.getRandomInt(2, 9) },
          { x: 10, y: 10 }
        ]}
      />
      <VictoryAxis style={{ axis: { stroke: 'none' } }} tickFormat={() => ''} />
    </VictoryChart>
  </View>
);
export default ChartWeek;

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  }
});
