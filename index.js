
import { Platform, NativeModules } from 'react-native';

const { RNMeiqia } = NativeModules;

export async function MeiqiaInit(params) {
    return await RNMeiqia.init(params);
}

export function MeiqiaShow(params = {}) {
    // const data = {clientInfo:{}, ...params};
    RNMeiqia.show(params);
}

export function MeiqiaStartService() {
    RNMeiqia.openMeiqiaService();
}

export function MeiqiaStopService() {
    RNMeiqia.closeMeiqiaService();
}

export function MeiqiaRegisterDeviceToken(deviceToken) {
    if(Platform.OS === 'ios') {
        RNMeiqia.registerDeviceToken(deviceToken);
    }
}
