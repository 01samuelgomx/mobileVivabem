import React, { useState } from 'react';
import { ScrollView ,View, Text, Button, StyleSheet,Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendario';
import { estilo }  from '../../estilo/style';


const ControlledOpenSelect = () => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ScrollView contentContainerStyle={estilo.dashView}>
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />

        <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e', marginTop: 50}}> Suas matriculas</Text>
      {/* <View style={{flexDirection: 'row'}}>   */}
      <View style={{padding: 5}}>
      <Button style={estilo.input} title="Aulas" onPress={handleOpen} />
      {open && (
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Selecione</Text>
          <Picker
            selectedValue={age}
            onValueChange={(itemValue) => {
              setAge(itemValue);
              handleClose();
            }}
          >
            <Picker.Item label="Zumba" value="" />
            <Picker.Item label="Pilates" value={10} />
            <Picker.Item label="Yoga" value={20} />
            <Picker.Item label="Dança" value={30} />
          </Picker>
        </View>
      )}
      </View>
      <View style={{padding: 5}}>
      <Button style={estilo.input} title="Horario" onPress={handleOpen} />
      {open && (
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Selecione</Text>
          <Picker
            selectedValue={age}
            onValueChange={(itemValue) => {
              setAge(itemValue);
              handleClose();
            }}
          >
            <Picker.Item label="9:00" value="" />
            <Picker.Item label="10:00" value={10} />
            <Picker.Item label="11:00" value={20} />
            <Picker.Item label="12:00" value={30} />
          </Picker>
        </View>
      )}
      </View>

      <Calendar
  onChange={(range) => console.log(range)}
  minDate={new Date(2018, 3, 20)}
  startDate={new Date(2018, 3, 30)}
  endDate={new Date(2018, 4, 5)}
  theme={{
    activeDayColor: {},
    monthTitleTextStyle: {
      color: '#6d95da',
      fontWeight: '300',
      fontSize: 16,
    },
    emptyMonthContainerStyle: {},
    emptyMonthTextStyle: {
      fontWeight: '200',
    },
    weekColumnsContainerStyle: {},
    weekColumnStyle: {
      paddingVertical: 10,
    },
    weekColumnTextStyle: {
      color: '#b6c1cd',
      fontSize: 13,
    },
    nonTouchableDayContainerStyle: {},
    nonTouchableDayTextStyle: {},
    startDateContainerStyle: {},
    endDateContainerStyle: {},
    dayContainerStyle: {},
    dayTextStyle: {
      color: '#2d4150',
      fontWeight: '200',
      fontSize: 15,
    },
    dayOutOfRangeContainerStyle: {},
    dayOutOfRangeTextStyle: {},
    todayContainerStyle: {},
    todayTextStyle: {
      color: '#6d95da',
    },
    activeDayContainerStyle: {
      backgroundColor: '#6d95da',
    },
    activeDayTextStyle: {
      color: 'white',
    },
    nonTouchableLastMonthDayTextStyle: {},
  }}
/>

      </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 20,
    margin: 10,
    width: '80%',
    color: '#48c9b0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default ControlledOpenSelect;
