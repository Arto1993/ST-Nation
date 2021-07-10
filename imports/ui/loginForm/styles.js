import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    paperSize: {
        display: 'flex',
        height: '100vh',
        width: '50vw',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#3AB397',
        '@media (max-width:1200px)': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },

    buttonSize: {
        height: '55px',
        width: '100%',
        margin: 'auto',
        '@media (max-width:1200px)': {
            marginBottom: '15px'
        }
    },

    input: {
        width: '100%',
        margin: 'auto'
    },

    imageBox: {
        alignItems: 'center',
        marginTop: '10%',
        width: '50%',
        height: '50%',
        '@media (max-width:1200px)': {
            width: '100%',
            height: '40%',
            margin: '5%',
            marginTop: '10%'
        }
    },

    image: {
        height: '100%',
        width: 'auto'
    },

    formBox: {
        display: 'flex',
        '@media (max-width:1200px)': {
            justifyContent: 'center'
        }
    },

    boxLogin: {
        display: 'flex',
        width: '80%',
        flexDirection: 'column'
    },

    buttonProgress: {
        color: theme.palette.primary,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },

    wrapper: {
        width: '100%',
        position: 'relative',
        margin: 'auto',
        '@media (max-width:1200px)': {
            marginBottom: '20%'
        }
    }
}));

export { useStyles };