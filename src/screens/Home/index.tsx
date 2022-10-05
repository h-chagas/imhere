import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'


export function Home() {

    function handleParticipantAdd() {
        console.log('i clicked on handleParticipantAdd button');
        
    }

        return (
            <View style={styles.container}>
         
      <Text 
      key='1'
      style={styles.eventName}
      >
         Event name
      </Text>
      
      <Text
      key='2'
      style={styles.eventDate}
      >
         Fri, 05th of October 2022
      </Text>

    <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder='Participant name'
        placeholderTextColor='#6b6b6b'
      />

      <TouchableOpacity
      style={styles.submitBtn}
      onPress={handleParticipantAdd}
      >
        <Text style={styles.btnText}>+</Text> 
      </TouchableOpacity>
    </View>
      


      </View>
        )
}