import { View } from 'react-native';
import React from 'react';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function User() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
  );
}
