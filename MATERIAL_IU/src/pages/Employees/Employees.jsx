import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PageHeader from '../../Components/PageHeader';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../Components/useTable';
import * as EmployeeService from '../../services/EmployeeService'
import Controls from '../../Components/Controls/Controls'
import { Search } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
	pageContent: {
		margin: theme.spacing(5),
		padding: theme.spacing(3)
	},
	searchInput:{
		width:'75%'
	}
}))

const headCells = [
	{
		id:'fullName',label :'Employee Name'
	},
	{
		id:'email',label :'Email Address'
	},
	{
		id:'mobile',label :'Mobile Number'
	},
	{
		id:'department',label :'Department',disableSorting : true
	}
]
const Employees = () => {
	const classes = useStyles();
	const [records,setRecords] = useState(EmployeeService.getAllEmployees());
	const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
	const {TblContainer,TblHead,TblPagination,recordsAfterPagingAndSorting}=useTable(records,headCells,filterFn); 

	const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

	return (
		<>
			<PageHeader title="New Employees" subtitle="Form Design with Validation" icon={<PeopleOutlineOutlinedIcon />} />
			<Paper className={classes.pageContent}>
				<EmployeeForm />
				<Toolbar>
				<Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
				</Toolbar>
				<TblContainer>
					<TblHead/>
					<TableBody>
				{recordsAfterPagingAndSorting().map(item => 
				(
					<TableRow key={item.id}>
						<TableCell>{item.fullName}</TableCell>
						<TableCell>{item.email}</TableCell>
						<TableCell>{item.mobile}</TableCell>
						<TableCell>{item.department}</TableCell>
					</TableRow>
				))}
					</TableBody>
				</TblContainer>
				<TblPagination/>
			</Paper>
		</>
	)
}

export default Employees