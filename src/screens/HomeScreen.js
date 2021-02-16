import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Styles from './styles/Home';
import * as CricApi from '../api/CricApi';

export default function HomeScreen({ navigation }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      try {
        const response = await CricApi.cricketMatches();
        console.log(response.data);
        setMatches(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMatches();
  }, []);

  return (
    <View style={Styles.page}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>Ongoing Matches</Text>
      </View>

      {matches.map(match =>
        <TouchableOpacity key={match.unique_id} style={Styles.item} onPress={() =>
          navigation.navigate('Match', { matchId: match.unique_id })
        }>
          <View>
            <Text style={Styles.matchText}>{match.title}</Text>
          </View>
        </TouchableOpacity>
      )}

    </View>
  )
}
