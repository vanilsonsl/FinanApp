import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import History from '../../components/History'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '125,00',
        date: '30/03/2023',
        type: 0 // despesas/saida
    },
    {
        id: 2,
        label: 'Pix cliente x',
        value: '2.500,00',
        date: '22/03/2023',
        type: 1 // receitas/entrada
    },
    {
        id: 3,
        label: 'Salário',
        value: '5.000,00',
        date: '01/03/2023',
        type: 1 // entrada
    },    
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Rodrido F"/>

      <History saldo="9.000,00" gastos="555,00" />

      <Actions/>
        
      <Text style={styles.title}>Últimas viagens</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item}/> }
      />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
  },
  list:{
      marginStart: 14,
      marginEnd: 14,
  }
});
