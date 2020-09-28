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

     <ScrollView style={styles.contenedor}>
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

        <Text style={{marginVertical:10, fontWeight:'bold'}}>Los mejores alojamientos</Text>
        <Image
            style={styles.mejores}
            source={ require('./assets/img/mejores1.jpg') }
        />
        <Image
            style={styles.mejores}
            source={ require('./assets/img/mejores2.jpg') }
        />
        <Image
            style={styles.mejores}
            source={ require('./assets/img/mejores3.jpg') }
        />

        <Text style={{marginVertical:10, fontWeight:'bold'}}>Hospedaje en Buenos Aires</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
            <View style={styles.item}>
                <Image
                    style={styles.hospedaje}
                    source={ require('./assets/img/hospedaje1.jpg') }
                />
            </View>
            <View style={styles.item}>
                <Image
                    style={styles.hospedaje}
                    source={ require('./assets/img/hospedaje2.jpg') }
                />
            </View>
            <View style={styles.item}>
                <Image
                    style={styles.hospedaje}
                    source={ require('./assets/img/hospedaje3.jpg') }
                />
            </View>
            <View style={styles.item}>
                <Image
                    style={styles.hospedaje}
                    source={ require('./assets/img/hospedaje4.jpg') }
                />
            </View>
        </View>
     </ScrollView>
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
  },
  mejores: {
    width: '100%',
    height: 150,
    marginVertical: 5
  },
  item: {
    flexBasis: '49%',
  },
  hospedaje: {
    width: '100%',
    height: 200,
    marginVertical: 4
  }
});

export default App;
