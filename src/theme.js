import { createMuiTheme} from '@material-ui/core/styles';

const rapidBlue = "#0B72B9"
const rpaidOrange = "#FFBB60"

const theme = createMuiTheme({
    
    palette : {
      common : {
        blue : rapidBlue,
        orange : rpaidOrange
      },
      primary : {
        main : rapidBlue
      }
    },
    typography : {
      h1 : { 
        fontSize : '4em',
      color : rpaidOrange,
      fontWeight : 'bold'
      }
    } ,
    overrides : {
      MuiFormControl : {
        root : {
          marginLeft : 'auto',
          marginRight : '1em'
        }
      }
    
    }
    }

)

export default theme