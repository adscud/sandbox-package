import { Button, View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackScreenProps<any>['navigation'];
}

export function User({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Button title={'ToProfile'} onPress={() => navigation.push('Account')} />
    </View>
  );
}
