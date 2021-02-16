import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Styles from './styles/Home';

export default function SettingScreen() {
  const _handleMatchPress = () => {}

  return (
    <View style={Styles.page}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>Ongoing Matches</Text>
      </View>

      <TouchableOpacity style={Styles.item} onPress={_handleMatchPress}>
        <View>
          <Text style={Styles.matchText}>Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.item} onPress={_handleMatchPress}>
        <View>
          <Text style={Styles.matchText}>Options</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.item} onPress={_handleMatchPress}>
        <View>
          <Text style={Styles.matchText}>Logout</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}
