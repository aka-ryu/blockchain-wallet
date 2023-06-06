import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({

    headerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },
    left: {
        flex: 1,
        backgroundColor: 'red'
    },
    center: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'flex-end',
    },

});