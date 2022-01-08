import React from "react";
import "bulma/css/bulma.css";

const commonProps = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}

function CoolButton({className, children, ...otherProps}) {
  let classes = `button ${className}`;

  Object.keys(otherProps).forEach(prop => {
    if (prop in commonProps) {
      classes += ` ${commonProps[prop]}`
    }
  })

  return (
    <div className="CoolButton">
      <button className={classes}>{children}</button>
    </div>
  );
}

export default CoolButton;