import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Input,
  Button,
  Text,
  View,
  Item,
} from 'native-base';
import axios from 'axios';
import styles from './styles'

import ClockItemsList from './src/components/ClockItemsList';

const API_URL: string = 'https://us-central1-app-tiendita.cloudfunctions.net';

interface ClockItem {
  id: number;
  registryInternalKey: string;
  date: string;
  shouldDisplay: boolean;
  shouldDisplayStatus: boolean;
  status: string;
  type: string;
}

function App() {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [clockItems, setClockItems] = useState<Array<ClockItem> | null>(null);

  const handleTextChange = useCallback((text: string) => {
    setUsernameInputValue(text);
  }, []);

  useEffect(() => {
    setUsernameInputValue(usernameInputValue.replace(/\D/g, ''))
  }, [usernameInputValue])

  const fetchData = useCallback(async () => {
    if (!usernameInputValue) return;

    try{
      const response = await axios.get(`${API_URL}/simpleExerciseTest?id=${usernameInputValue}`);

      if (!response.data[0]) {
        return setClockItems([]);
      }

      setClockItems(response.data[0] || []);
    } catch{
      clearData()
      alert('There was an error fetching the Clock Items \n')
    }
  }, [usernameInputValue]);

  const clearData = useCallback(() => {
    setUsernameInputValue('');
    setClockItems(null);
  }, []);

  const showNoDataText = useMemo(() => {
    return (
      <Text style={styles.noDataText} uppercase={false}>
        There is no data to return
      </Text>
    );
  }, []);

  const showRequiredIdText = useMemo(() => {
    return (
      <Text style={styles.requiredIdText} uppercase={false}>
        You need to enter an employee id on the input
      </Text>
    );
  }, []);

  const showEmployeeGreetingText = useMemo(() => {
    return (
      <View style={styles.employeeGreetingContainer}>
        <Text style={styles.employeeGreetingText}>Hello!, employee {usernameInputValue}</Text>
        <View style={styles.employeeGreetingBottomLine} />
      </View>
    );
  }, [usernameInputValue]);

  const showClearDataButton = useMemo(() => {
    return (
      <View style={styles.clearDataButtonContainer}>
        <Button onPress={clearData} light block style={styles.clearDataButton}>
          <Text style={styles.clearDataButtonText} uppercase={false}>
            Clear data
          </Text>
        </Button>
      </View>
    );
  }, []);

  const showCheckDataButton = useMemo(() => {
    return (
      <View style={styles.checkDataButtonContainer}>
        <Button
          disabled={!usernameInputValue}
          onPress={fetchData}
          block
          style={styles.checkDataButton}
        >
          <Text style={styles.checkDataButtonText} uppercase={false}>
            Check data
          </Text>
        </Button>
      </View>
    );
  }, [usernameInputValue]);

  const showTextInput = useMemo(() => {
    return (
      <View>
        <Text style={styles.textInput}>
          Enter your employee code:
        </Text>
        <Item regular>
          <Input
            onChangeText={handleTextChange}
            value={usernameInputValue}
          />
        </Item>
      </View>
    );
  }, [usernameInputValue]);

  return (
    <Container>
      <Header style={styles.header}>
        <Body>
          <Title style={styles.headerText}>iTex</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.inputContainer}>
          {showTextInput}
          {((clockItems && clockItems.length > 0) || Boolean(usernameInputValue)) && showClearDataButton}
          {Boolean(usernameInputValue) && showEmployeeGreetingText}
        </View>
        {showCheckDataButton}
        {!usernameInputValue && showRequiredIdText}
        {clockItems && clockItems.length === 0 && showNoDataText}
        {clockItems && <ClockItemsList clockItems={clockItems} />}
      </Content>
    </Container>
  );
}

export default App;
