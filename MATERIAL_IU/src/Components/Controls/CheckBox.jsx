import { FormControl, FormControlLabel ,Checkbox as MuiCheckbox} from '@material-ui/core'
import React from 'react'

export default function CheckBox(props) {
	const {name,label,value,onChange}=props;

	const convertToDefaultEvent = (name,value) =>({
		target:{
			name, value
		}
	})
  return (
	<FormControl>
		<FormControlLabel control={<MuiCheckbox name={name}  color="primary" onChange={e => onChange(convertToDefaultEvent(name,e.target.checked))} checked={value}/>} label={label}/>
	</FormControl>
  )
}
