import React from 'react';
import FloatingLabelTextInput from '../../src/floatingLabelTextInput';

export default function BorderBottomOnly() {
  return (
    <FloatingLabelTextInput
      label="Border bottom only"
      containerStyle={{
        borderWidth: 0,
        backgroundColor: '#f5f0e1',
        borderBottomWidth: 1,
        height: 40,
      }}
      labelStyle={{left: -15, backgroundColor: '#f5f0e1'}}
      floatUpRange={16}
      inputStyle={{left: -20}}
    />
  );
}
