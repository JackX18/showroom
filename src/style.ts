import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    vehCategory: {
        
    },
    categoryItem: {
        display: 'flex',
        
        fontSize: 22,
        fontFamily: 'Bebas Neue',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(4),

        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'all .2s ease-in-out',

        color: '#1E2024',
        opacity:'50%', 

        '&:hover': {
            transform: 'scale(1.4)',
            color: '#F2A716',
            opacity: '100%',
        }
    },
    vehContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '25em',
    },
    paper: {
        height: 150,
        width: 200,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

        // boxShadow: 'none',
        // flexDirection: 'row'
    },
    vehImg: {
        display: 'flex',
        maxHeight: '100%',
        width: 'auto',
        // overflow: 'visible',
    },
}));