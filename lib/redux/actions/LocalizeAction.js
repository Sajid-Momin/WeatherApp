import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../../languages/i18n';

export const setLanguage = () => {
    return async (dispatch, getState) => {
        try {
            const [translation, i18n] = useTranslation();
            i18n.changeLanguage('hi');
            console.log(translation);
        dispatch({
                type: 'SET_LANGUAGE',
                payload: translation
            })
        } catch (error) {
            console.log("setLanguage :", error);
            throw error
        }
    }
}