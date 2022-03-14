
import { Platform } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default class NetworkUtils {

    static async isNetworkAvailable() {
        const response = await NetInfo.fetch();
        return response.isConnected;
    }

    // const checkConnectivity = (): Promise<boolean | null> => {
    //     return new Promise(resolve => {
    //         // For Android devices
    //         if (Platform.OS === "android") {
    //             NetInfo.fetch().then(state => {
    //                 resolve(state.isInternetReachable);
    //             });
    //         } else {
    //             // For iOS devices
    //             const unsubscribe = NetInfo.addEventListener(state => {
    //                 unsubscribe();
    //                 resolve(state.isInternetReachable);
    //             });
    //         }
    //     });
    // };
    

    // static async isNetworkAvailable = (): Promise<boolean | null> => {
    //     return new Promise(resolve => {
    //         // For Android devices
    //         if (Platform.OS === "android") {
    //             NetInfo.fetch().then(state => {
    //                 resolve(state.isInternetReachable);
    //             });
    //         } else {
    //             // For iOS devices
    //             const unsubscribe = NetInfo.addEventListener(state => {
    //                 unsubscribe();
    //                 resolve(state.isInternetReachable);
    //             });
    //         }
    //     });
    // };
}