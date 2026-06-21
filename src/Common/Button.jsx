import React from 'react';

const Button = ({
  variant = 'primary', // options: primary, secondary, ghost, destructive, surface
  height,
  width,
  className = '',
  children,
  disabled,
  style = {},
  onClick,
  ...props
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  const customStyles = {
    ...style,
    ...(height && { height }),
    ...(width && { width }),
  };

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      style={customStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
