const RobotoRegular = require('../../assets/fonts/Roboto/Roboto-Regular.ttf');
const RobotoItalic = require('../../assets/fonts/Roboto/Roboto-Italic.ttf');
const RobotoSemiBold = require('../../assets/fonts/Roboto/Roboto-SemiBold.ttf');
const RobotoSemiBoldItalic = require('../../assets/fonts/Roboto/Roboto-SemiBoldItalic.ttf');

const CAIXAStdRegular = require('../../assets/fonts/CAIXAStd/CAIXAStd-Regular.ttf');
const CAIXAStdItalic = require('../../assets/fonts/CAIXAStd/CAIXAStd-Italic.ttf');
const CAIXAStdSemiBold = require('../../assets/fonts/CAIXAStd/CAIXAStd-SemiBold.ttf');
const CAIXAStdSemiBoldItalic = require('../../assets/fonts/CAIXAStd/CAIXAStd-SemiBoldItalic.ttf');

export const dscFonts = {
  'Roboto-Regular': RobotoRegular,
  'Roboto-Italic': RobotoItalic,
  'Roboto-SemiBold': RobotoSemiBold,
  'Roboto-SemiBoldItalic': RobotoSemiBoldItalic,
  'CAIXA Std Regular': CAIXAStdRegular,
  'CAIXA Std Italic': CAIXAStdItalic,
  'CAIXA Std SemiBold': CAIXAStdSemiBold,
  'CAIXA Std SemiBold Italic': CAIXAStdSemiBoldItalic,
} as const;

export type DscFonts = typeof dscFonts;
