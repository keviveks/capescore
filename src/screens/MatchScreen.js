import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from './styles/Match';
import * as CricApi from '../api/CricApi';

export default function MatchScreen({ navigation }) {
  const [matchId, setMatcheId] = useState(navigation.state.params.matchId);
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    async function getMatches() {
      try {
        const response = await CricApi.cricketScore(matchId);
        console.log(response.data);
        setMatchData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMatches();
  }, []);

  return (
    <View style={Styles.page}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>{matchData.score}</Text>
      </View>

      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>{matchData.description}</Text>
      </View>

    </View>
  )
}
