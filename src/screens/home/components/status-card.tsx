import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

interface Props {
  label: string;
  value: string | number;
  icon: string;
}

export function StatusCard({ label, value, icon }: Props) {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <IconButton icon={icon} size={24} />
        <Text variant="labelMedium">{label}</Text>
        <Text variant="headlineSmall">{value}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1
  },
  content: {
    alignItems: 'center'
  }
});
