const RobotoRegular = require('../../assets/fonts/Roboto/Roboto-Regular.ttf');
const RobotoItalic = require('../../assets/fonts/Roboto/Roboto-Italic.ttf');
const RobotoMedium = require('../../assets/fonts/Roboto/Roboto-Medium.ttf');
const RobotoMediumItalic = require('../../assets/fonts/Roboto/Roboto-MediumItalic.ttf');
const RobotoSemiBold = require('../../assets/fonts/Roboto/Roboto-SemiBold.ttf');
const RobotoSemiBoldItalic = require('../../assets/fonts/Roboto/Roboto-SemiBoldItalic.ttf');
const RobotoBold = require('../../assets/fonts/Roboto/Roboto-Bold.ttf');
const RobotoBoldItalic = require('../../assets/fonts/Roboto/Roboto-BoldItalic.ttf');

const CAIXAStdRegular = require('../../assets/fonts/CAIXAStd/CAIXAStd-Regular.ttf');
const CAIXAStdItalic = require('../../assets/fonts/CAIXAStd/CAIXAStd-Italic.ttf');
const CAIXAStdSemiBold = require('../../assets/fonts/CAIXAStd/CAIXAStd-SemiBold.ttf');
const CAIXAStdSemiBoldItalic = require('../../assets/fonts/CAIXAStd/CAIXAStd-SemiBoldItalic.ttf');
const CAIXAStdBold = require('../../assets/fonts/CAIXAStd/CAIXAStd-Bold.ttf');
const CAIXAStdBoldItalic = require('../../assets/fonts/CAIXAStd/CAIXAStd-BoldItalic.ttf');

export const dscFonts = {
  'Roboto-Regular': RobotoRegular,
  'Roboto-Italic': RobotoItalic,
  'Roboto-Medium': RobotoMedium,
  'Roboto-MediumItalic': RobotoMediumItalic,
  'Roboto-SemiBold': RobotoSemiBold,
  'Roboto-SemiBoldItalic': RobotoSemiBoldItalic,
  'Roboto-Bold': RobotoBold,
  'Roboto-BoldItalic': RobotoBoldItalic,
  'CAIXA Std Regular': CAIXAStdRegular,
  'CAIXA Std Italic': CAIXAStdItalic,
  'CAIXA Std Medium': CAIXAStdSemiBold,
  'CAIXA Std Medium Italic': CAIXAStdSemiBoldItalic,
  'CAIXA Std SemiBold': CAIXAStdSemiBold,
  'CAIXA Std SemiBold Italic': CAIXAStdSemiBoldItalic,
  'CAIXA Std Bold': CAIXAStdBold,
  'CAIXA Std Bold Italic': CAIXAStdBoldItalic,
} as const;

export type DscFonts = typeof dscFonts;
