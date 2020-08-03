import React from 'react';
import { Text, View, Left, Right, List, ListItem, Icon } from 'native-base';
import styles from './styles'

interface ClockItem {
  id: number;
  registryInternalKey: string;
  date: string;
  shouldDisplay: boolean;
  shouldDisplayStatus: boolean;
  status: string;
  type: string;
}

export interface Props {
  clockItems: Array<ClockItem>
}

function ClockItemsList({ clockItems}: Props) {
  return (
    <List style={styles.listContainer}>
      {clockItems.map(item => {
        if (!item.shouldDisplay) return null;
        return (
          <ListItem key={item.registryInternalKey} style={styles.listItem}>
              <View style={styles.idTextContainer}>
                <Text style={styles.idText}>{item.id}</Text>
              </View>
            <Left>
              <View style={styles.dateAndStatusContainer}>
                <Text style={styles.date}>
                  <Text style={styles.dateTitle}>Date: </Text>
                  {item.date}
                </Text>
                {item.shouldDisplayStatus && (
                  <Text style={styles.status}>
                    <Text style={styles.statusTitle}>Status: </Text>
                    {item.status}
                  </Text>
                )}
              </View>
            </Left>
            <Right>
              <View>
                <Icon
                  style={styles.icon}
                  type="Feather"
                  name={item.type === 'clock in' ? 'log-in' : 'log-out'}
                />
              </View>
            </Right>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ClockItemsList;
