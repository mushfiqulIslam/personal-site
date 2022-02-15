import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// type
export interface TypeScriptProps extends SvgIconProps {
  bgColor?: Property.Fill;
}

const TypeScript: React.FunctionComponent<TypeScriptProps> = (props) => {
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
      d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm10.666 7.451h-2.118V19H9.841v-6.549H7.767V11h5.899v1.451zm.332 6.175v-1.751s.956.721 2.104.721c1.148 0 1.103-.75 1.103-.853 0-1.089-3.251-1.089-3.251-3.501 0-3.281 4.737-1.986 4.737-1.986l-.059 1.559s-.794-.53-1.692-.53c-.897 0-1.221.427-1.221.883 0 1.177 3.281 1.059 3.281 3.428 0 3.648-5.002 2.03-5.002 2.03z"/>
    </SvgIcon>
  );
};

export default TypeScript;