import { CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";
import "./App.css";
import Employees from "../pages/Employees/Employees";
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette:{
    background:{
      default:"#f4f5fd"
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:"translateZ(0)"
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft:"320px",
    width:'100%'
  },
});

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
     <SideMenu />
     <div className={classes.appMain}>
     <Header/>
     <Employees/>
     </div>
     <CssBaseline/>
     </ThemeProvider>

  );
}

export default App;
