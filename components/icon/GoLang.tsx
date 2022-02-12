import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// type
export interface GoLangProps extends SvgIconProps {
  bgColor?: Property.Fill;
}

const GoLang: React.FunctionComponent<GoLangProps> = (props) => {
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
        d="M25 2c-7 0-10.092 3.518-10.092 3.518A3.831 3.831 0 0 0 13 5a4 4 0 0 0-4 4 3.992 3.992 0 0 0 3 3.863V22.88l-3.56 3.56a1.5 1.5 0 1 0 2.12 2.122l1.342-1.342C11.652 29.895 11 31.154 11 36c0 2.529 1.222 5.24 3.54 7.34l-2.1 2.1a1.5 1.5 0 1 0 2.12 2.12l2.471-2.468C19.165 46.26 21.828 47 25 47c3.172 0 5.836-.74 7.97-1.908l2.47 2.469c.291.293.676.439 1.06.439s.768-.146 1.06-.44a1.5 1.5 0 0 0 0-2.12l-2.1-2.1C37.779 41.24 39 38.529 39 36c0-4.846-.651-6.104-.902-8.781l1.341 1.342c.293.294.677.439 1.061.439a1.501 1.501 0 0 0 1.06-2.56L38 22.878V12.863A3.993 3.993 0 0 0 41 9a4 4 0 0 0-4-4c-.699 0-1.343.196-1.908.518C35.092 5.518 32 2 25 2zM13 8c.299 0 .55.143.732.352a7.628 7.628 0 0 0-.75 1.644A.998.998 0 0 1 13 8zm24 0a.998.998 0 0 1 .018 1.996 7.606 7.606 0 0 0-.75-1.644A.965.965 0 0 1 37 8zM19.502 9.002A3.499 3.499 0 0 1 19.498 16c-1.829 0-3.31-1.41-3.467-3.197a1.5 1.5 0 1 0 0-.606 3.486 3.486 0 0 1 3.471-3.195zm10.998 0A3.498 3.498 0 1 1 30.496 16a3.5 3.5 0 1 1 .004-6.998zM28.5 11a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 28.5 11zM25 16c1.105 0 2 .448 2 1s-.895 1-2 1-2-.448-2-1 .895-1 2-1zm3.506 2.49c.305.461.494.984.494 1.51 0 .5 0 2-4 2s-4-1.5-4-2c0-.525.19-1.046.492-1.506.66.92 1.933 1.506 3.508 1.506 1.577 0 2.85-.588 3.506-1.51zM23 23.846c.583.096 1.24.154 2 .154s1.417-.058 2-.154V25a1 1 0 1 1-2 0 1 1 0 1 1-2 0v-1.154z"
        style={{ fill: bgColor }}
      />
    </SvgIcon>
  );
};

export default GoLang;