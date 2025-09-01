import Svg, { SvgProps } from 'react-native-svg';
import { ExtractListVariant } from '../ExtractList.model';

export type ExtractItemProps = {
  item: {
    value: string;
    service: string;
    detail: string;
    supportTextValue?: string;
  };
  icon?: React.ForwardRefExoticComponent<SvgProps & React.RefAttributes<Svg>>;
  variant?: ExtractListVariant;
  showIcon?: boolean;
  showSupportTextValue?: boolean;
};
