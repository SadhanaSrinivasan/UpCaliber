import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-1900"
        maxDate="14-04-2020"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 20
          },
          dateInput: {
            marginLeft: 60
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
            this.setState({date: date})
            this.props.onDateHandler(date);
        }}

        
      />
    )
  }
}