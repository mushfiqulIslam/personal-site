import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// type
export interface JavaScriptProps extends SvgIconProps {
  bgColor?: Property.Fill;
}

const JavaScript: React.FunctionComponent<JavaScriptProps> = (props) => {
  const {
    bgColor = '#001e36',
    viewBox = '0 0 50 50',
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
      d="M45.274 2.325A1.001 1.001 0 0 0 44.536 2H5.464a1.001 1.001 0 0 0-.996 1.089l3.52 39.427c.037.412.324.759.722.873l16.01 4.573a1.018 1.018 0 0 0 .548 0l16.024-4.573c.398-.114.685-.461.722-.873l3.518-39.427a1.002 1.002 0 0 0-.258-.764zM12 29.004l7 1.942V11h4v26l-11-3.051v-4.945zM38.054 22 37 34.25 27 37v-4.601l6.75-1.855.25-3.75L27 28V11h12l-.345 4H31v8l7.054-1z"/>
    </SvgIcon>
  );
};

export default JavaScript;