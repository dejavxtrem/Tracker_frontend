import { NavigationActions} from 'react-navigation'




let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}

//help function to help navigate inside dispatch function
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })

    )
}