import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';

const cruds = [
  { label: 'Atendimentos', icon: 'clipboard-text', route: 'atendimentos' },
  { label: 'Clientes', icon: 'account', route: 'clientes' },
  { label: 'Veículos', icon: 'car', route: 'veiculos' },
  { label: 'Usuários', icon: 'account-cog', route: 'usuarios' },
  { label: 'Produtos', icon: 'package-variant', route: 'produtos' },
  { label: 'Serviços', icon: 'tools', route: 'servicos' },
  { label: 'Filas', icon: 'format-list-bulleted-square', route: 'filas' }
];

export function CrudButtonGrid() {
  const theme = useTheme();

  return (
    <View style={styles.grid}>
      {cruds.map(({ label, icon, route }) => (
        <TouchableOpacity
          key={route}
          style={styles.button}
          onPress={() => console.log(`Navigate to ${route}`)}
        >
          <IconButton icon={icon} size={28} />
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between'
  },
  button: {
    width: '30%',
    alignItems: 'center'
  },
  label: {
    textAlign: 'center'
  }
});
