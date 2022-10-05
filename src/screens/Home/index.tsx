import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../../components/Header';
import { Participant } from '../../components/Participant';
import { styles } from './styles'


export function Home() {

  const participants = ['Hugo', 'Milena', 'Jamie', 'Emily', 'nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6'];

    function handleParticipantAdd() {
        console.log('i clicked on handleParticipantAdd button');
        
    }

    function handleParticipantRemover(name: string) {
      console.log(`i clicked to remove ${name}`);
    }

        return (
            <View style={styles.container}>
              <Header />

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
                  <Text
                  style={styles.btnText}
                  >
                    +
                  </Text> 
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false}>
                {
                  participants.map(participant => {
                    
                    return (

                      <Participant
                      key={participant}
                      name={participant}
                      onRemove={() => handleParticipantRemover('Rodrigo')} 
                      />
                    )
                  })
                }
              </ScrollView>
     
              </View>
        )
}