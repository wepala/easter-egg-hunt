'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import {FlatGrid} from 'react-native-super-grid';

import EggItem from './EggItem';
import {addHuntEggs} from '../actions';

export default ({eggs, onPickEgg, navigation}) => {
  const items = Object.values(eggs);
  return (
    <SafeAreaView style={styles.layout}>
      <View style={{paddingBottom: 10}}>
        <Text style={styles.header}>Choose Eggs!</Text>
        <Text style={styles.subHeader}>10 Eggs added to basket</Text>
      </View>
      <FlatGrid
        alwaysBounceVertical={true}
        fadingEdgeLength={20}
        showsVerticalScrollIndicator={true}
        itemDimension={85}
        items={items}
        renderItem={({item, key}) => (
          <EggItem
            key={key}
            egg={item}
            onPickEgg={onPickEgg}
            navigation={navigation}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          appearance="primary"
          onPress={() => navigation.navigate('Invite')}>
          Invite Users
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 30,
    justifyContent: 'flex-start',
  },
  header: {
    fontFamily: 'Tahu!',
    fontSize: 40,
    color: '#438FCB',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 25,
    color: '#438FCB',
    textAlign: 'center',
  },
  buttonContainer: {
    // justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 30,
  },
});
