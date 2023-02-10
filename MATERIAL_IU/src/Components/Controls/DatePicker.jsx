import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props) {
	const {name , label , value , onChange} =props;
	const convertToDefaultEvent = (name,value) =>({
		target:{
			name, value
		}
	})
  return (
	<div><MuiPickersUtilsProvider utils={DateFnsUtils}>
		<KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined' label={label} format="MMM/dd/yyyy" name={name} value={value} onChange={date => onChange(convertToDefaultEvent(name,date))}/>
		</MuiPickersUtilsProvider></div>
  )
}
