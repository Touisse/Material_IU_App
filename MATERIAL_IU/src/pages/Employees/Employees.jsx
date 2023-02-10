import React from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PageHeader from '../../Components/PageHeader';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	pageContent: {
		margin: theme.spacing(5),
		padding: theme.spacing(3)
	}
}))
const Employees = () => {
	const classes = useStyles()
	return (
		<>
			<PageHeader title="New Employees" subtitle="Form Design with Validation" icon={<PeopleOutlineOutlinedIcon />} />
			<Paper className={classes.pageContent}><EmployeeForm />
			</Paper>
		</>
	)
}

export default Employees