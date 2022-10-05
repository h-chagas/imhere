import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#000',
          padding: 16,
          
    },
    eventName: {
       color: '#fff',
          fontSize: 20,
          marginTop: 40,
    },
    eventDate: {
          color: '#6b6b6b',
          fontSize: 12,
    },
    input: {
        flex: 1,
        marginRight: 12,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCF3',
        padding: 16,
        fontSize: 16,
    },
    submitBtn: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#07D962',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btnText: {
    fontSize: 20,
    color: '#fff',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    } 
  
 })