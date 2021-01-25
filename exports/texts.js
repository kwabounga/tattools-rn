import { Platform, NativeModules } from "react-native";

// récupération du language du mobile
const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

// définition des textes de l'application
import { cst } from './const';
const locales = cst.locales

// force le fr sur les variantes
const languages = {
  fr_BE: "fr_FR",
  "fr_BE@euro": "fr_FR",
  fr_CA: "fr_FR",
  fr_CH: "fr_FR",
  fr_FR: "fr_FR",
  "fr_FR@euro": "fr_FR",
  fr_LU: "fr_FR",
  "fr_LU@euro": "fr_FR",
};

// récupère les textes Fr ou En en fonction du language du mobile
export const local = function () {
  if (languages.hasOwnProperty(deviceLanguage)) {
    return locales[languages[deviceLanguage]];
  } else {
    return locales["en_US"];
  }
};
