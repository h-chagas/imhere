import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { Participant } from '../../components/Participant';
import { styles } from './styles'


export function Home() {

  const [participants, setParticipant] = useState<string[]>([]);  //type   this is an array of string    <string[]>
  const [participantName, setParticipantName] = useState('');
  const [eventName, setEventName] = useState('Event name');
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let weekDay = weekday[d.getDay()];
  let day = d.getDate();
  let theMonth = month[d.getMonth()];
  let year = d.getFullYear();



    function handleParticipantAdd() {
      if(participants.includes(participantName)) {
        return Alert.alert('Participant already exist', 'This participant is already included in the list!')
      }

      setParticipant(prevState => [...prevState, participantName]); //new array with current content + new content
      setParticipantName('');
    }

    function handleParticipantRemover(name: string) {
      Alert.alert('Remove participant', `Are you sure you want to remove ${name}?`, [
        {
          text: 'Yes',
          onPress: () => setParticipant(prevState => prevState.filter(participant => participant !== name))
        },
        {
          text: 'No',
          style: 'cancel'
        },
      ]);
      

    }

        return (
            <View style={styles.container}>
              <Header />

              <TextInput
              key='1'
              style={styles.eventName}
              placeholder='Type your event name...'
              placeholderTextColor='#6b6b6b'
              onChangeText={setEventName}
              />
              
      
              <Text
              key='2'
              style={styles.eventDate}
              >
                {weekDay}, {day} {theMonth} {year}
              </Text>

              <View style={styles.form}>
                  <TextInput 
                  style={styles.input}
                  placeholder='Participant name'
                  placeholderTextColor='#6b6b6b'
                  // onChangeText={text => setParticipantName(text)}
                  onChangeText={setParticipantName} //same thing above
                  value={participantName}  //to clean input after add participant
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

              <FlatList 
              data={participants}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <Participant
                key={item}
                name={item}
                onRemove={() => handleParticipantRemover(item)} 
                />
              )}
              showsVerticalScrollIndicator={false} 
              ListEmptyComponent={() => ( //in case the list is empty, this Text will be rendered on the screen
                <Text style={styles.listEmptyText}>
                  No one in the event yet? Add a participant in your presence list!
                </Text>
                
              )}
              />

              </View>
        )
}