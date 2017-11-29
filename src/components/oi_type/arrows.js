import React from 'react';
import OiType from './index';

export const OiArrowLeft = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&lt;&ndash;</OiType>;
export const OiArrowRight = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&ndash;&gt;</OiType>;
export const OiArrowDown = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&lt;&#124;</OiType>;
export const OiArrowUp = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&#124;&gt;</OiType>;

export const OiArrowUpLeft = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&lt;&#92;</OiType>;
export const OiArrowUpRight = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&#47;&gt;</OiType>;
export const OiArrowDownLeft = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&lt;&#47;</OiType>;
export const OiArrowDownRight = ({dlig, ...rest}) => <OiType dlig={true} {...rest} >&#92;&gt;</OiType>;


