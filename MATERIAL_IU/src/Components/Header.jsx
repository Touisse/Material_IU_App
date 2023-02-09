import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles( theme =>({
	root:{
		backgroundColor:'#fff'
	},
	searchInput:{
		opacity:'0.6',
		padding:`0px ${theme.spacing(1)}px`,
		fontSize:'0.8rem',
		'&:hover':{
			  backgroundColor:'#f2f2f2'
		},
		'& .MuiSvgIcon-root':{
			marginRight:theme.spacing(1)
		}
	}
}))
export default function Header() {
	const classes = useStyles()
  return (
	<><AppBar position='static' className={classes.root}>
		<Toolbar>
			<Grid container alignItems='center'>
				<Grid item >
					<InputBase placeholder='Search topics' className={classes.searchInput} startAdornment={<SearchIcon fontSize='small'/>}/>
				</Grid>
				<Grid item sm>
				</Grid>
				<Grid item >
					<IconButton>
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon fontSize='small'/>
						</Badge>
						</IconButton>
						<IconButton>
						<Badge badgeContent={3} color="primary">
							<ChatBubbleOutlineIcon fontSize='small'/>
						</Badge>
						</IconButton>
						<IconButton>
							<PowerSettingsNewIcon fontSize='small'/>
						</IconButton>
				</Grid>
			</Grid>
		</Toolbar>
		</AppBar></>
  )
}
