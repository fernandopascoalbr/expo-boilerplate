import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { CrudButtonGrid } from './components/crud-button-grid';
import { StatusCard } from './components/status-card';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Painel de Atendimentos" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Visão Geral
        </Text>

        <View style={styles.statusRow}>
          <StatusCard
            label="Atendimentos ativos"
            value="12"
            icon="account-wrench"
          />
          <StatusCard label="Produtos vendidos" value="38" icon="cart" />
        </View>

        <View style={styles.statusRow}>
          <StatusCard label="Serviços hoje" value="14" icon="hammer-wrench" />
          <StatusCard
            label="Clientes atendidos"
            value="8"
            icon="account-group"
          />
        </View>

        <Text variant="titleLarge" style={styles.sectionTitle}>
          Acessos Rápidos
        </Text>

        <CrudButtonGrid />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  sectionTitle: {
    marginVertical: 12
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12
  }
});
