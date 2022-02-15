import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// type
export interface DjangoProps extends SvgIconProps {
  bgColor?: Property.Fill;
}

const Django: React.FunctionComponent<DjangoProps> = (props) => {
  const {
    bgColor = '#001e36',
    viewBox = '0 0 24 24',
    focusable = false,
    'aria-hidden': ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      focusable={focusable}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      <path 
      d="M11 3v5.158C10.653 8.018 9.904 8 9.535 8 6.76 8 4.19 9.306 4.19 13c0 4.42 3.481 5 5.811 5 .92 0 3-.09 4-.38V3h-3zm5 0v3h3V3h-3zm0 5v8.701c0 1.516-.922 3.094-3 4l2.86 1.295c2.905-1 3.14-4.295 3.14-5.295V8h-3zm-6.03 2.55c.32 0 .68.06 1.03.14v4.703c-.35.08-.71.14-1.03.14-1.31 0-2.58-.413-2.58-2.533s1.27-2.45 2.58-2.45z"/>
    </SvgIcon>
  );
};

export default Django;