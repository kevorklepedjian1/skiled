import React from 'react';

export const withDefaultProps = (WrappedComponent, defaultProps) => {
  const WithDefaultProps = (props) => {
    const mergedProps = { ...defaultProps, ...props };
    return <WrappedComponent {...mergedProps} />;
  };
  return WithDefaultProps;
};

export const withImageSource = (WrappedComponent) => {
  const WithImageSource = ({ type, ...props }) => {
    const src = (() => {
      switch (type) {
        case 'animation':
          return '../assets/icon-animation.svg';
        case 'business':
          return '../assets/icon-business.svg';
        case 'photography':
          return '../assets/icon-photography.svg';
        case 'design':
          return '../assets/icon-design.svg';
        case 'crypto':
          return '../assets/icon-crypto.svg';
        default:
          return '../assets/icon-animation.svg';
      }
    })();

    return <WrappedComponent {...props} src={src} />;
  };
  return WithImageSource;
};
