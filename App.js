import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
     <View style={{ flexDirection:'row' }}>
       <Image
        style={styles.bg}
        source={ require('./assets/img/bg.jpg') }
       />
     </View>

     <View style={styles.contenedor}>
      <Text style={{marginBottom:10, fontWeight:'bold'}}>Que hacer en Paris</Text>

      <ScrollView horizontal>
        <Image
          style={styles.actividad}
          source={ require('./assets/img/actividad1.jpg') }
        />
        <Image
          style={styles.actividad}
          source={ require('./assets/img/actividad2.jpg') }
        />
        <Image
          style={styles.actividad}
          source={ require('./assets/img/actividad3.jpg') }
        />
        <Image
          style={styles.actividad}
          source={ require('./assets/img/actividad4.jpg') }
        />
        <Image
          style={styles.actividad}
          source={ require('./assets/img/actividad5.jpg') }
        />
      </ScrollView>

     </View>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    height: 250
  },
  contenedor: {
    padding: 10
  },
  actividad: {
    height: 300,
    width: 250,
    marginRight: 5
  }
});

export default App;
