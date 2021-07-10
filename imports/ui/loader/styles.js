import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.9s'
    },

    logoImage: {
        width: 'auto',
        marginTop: '13px'
    },

    header: {
        marginBottom: '0px',
    },

    inHeaderBox: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        height: '98%',
        '@media (max-width:600px)': {
            marginTop: '23px',
        },
    }
}));

export { useStyles };