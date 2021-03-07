import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

const UseStateExample = () => {
  const initial = 100;
  const [count, setCount] = useState(initial);
  const incre5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20}}>
          Calculation:{'      '}
          {count}
        </Text>
        <Pressable
          onPress={() => setCount(initial)}
          style={{
            backgroundColor: 'green',
            padding: 5,
            margin: 10,
            width: 50,
            borderRadius: 50,
          }}>
          <Text style={{color: 'white'}}>Reset</Text>
        </Pressable>
        <Pressable
          onPress={() => setCount((prevCount) => prevCount + 1)}
          style={{
            backgroundColor: 'green',
            padding: 5,
            margin: 10,
            width: 250,
          }}>
          <Text style={{color: 'white'}}>Increment</Text>
        </Pressable>
        <Pressable
          onPress={() => setCount((prevCount) => prevCount - 1)}
          style={{backgroundColor: 'green', padding: 5, margin: 10}}>
          <Text style={{color: 'white'}}>Decrement</Text>
        </Pressable>
        <Pressable
          style={{backgroundColor: 'green', padding: 5, margin: 10}}
          onPress={incre5}>
          <Text style={{color: 'white'}}>incre + 5</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default UseStateExample;
