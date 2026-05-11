import React from 'react';

type IconProps = {
  className?: string;
  title?: string;
};

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.8
} as const;

const Svg: React.FC<IconProps & { children: React.ReactNode; viewBox?: string }> = ({
  children,
  className = 'h-5 w-5',
  title,
  viewBox = '0 0 24 24'
}) => (
  <svg className={className} viewBox={viewBox} aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
    {title && <title>{title}</title>}
    {children}
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="M7 3.75h6.2L17 7.55v12.7H7z" />
    <path {...strokeProps} d="M13 3.9v4h4" />
    <path {...strokeProps} d="M9.5 12h5M9.5 15h5" />
  </Svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="M5 12h13" />
    <path {...strokeProps} d="m13 6 6 6-6 6" />
  </Svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="M7 17 17 7" />
    <path {...strokeProps} d="M9 7h8v8" />
  </Svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <circle {...strokeProps} cx="12" cy="12" r="8.25" />
    <path {...strokeProps} d="m8.5 12.25 2.25 2.25 4.75-5" />
  </Svg>
);

export const SendIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="M4.5 11.25 19 4.75l-4.75 14.5-3-6.5z" />
    <path {...strokeProps} d="m11.25 12.75 7.5-8" />
  </Svg>
);

export const DiplomaIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="m4 8 8-4 8 4-8 4z" />
    <path {...strokeProps} d="M7 10.25v4.25c0 1.45 2.25 2.75 5 2.75s5-1.3 5-2.75v-4.25" />
    <path {...strokeProps} d="M20 8v6" />
  </Svg>
);

export const GlobeIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <circle {...strokeProps} cx="12" cy="12" r="8.25" />
    <path {...strokeProps} d="M3.75 12h16.5M12 3.75c2 2.15 3 4.9 3 8.25s-1 6.1-3 8.25c-2-2.15-3-4.9-3-8.25s1-6.1 3-8.25Z" />
  </Svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="m9 8-4 4 4 4M15 8l4 4-4 4" />
  </Svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <path {...strokeProps} d="M18.5 15.25A7.75 7.75 0 0 1 8.75 5.5 7.75 7.75 0 1 0 18.5 15.25Z" />
  </Svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
  <Svg {...props}>
    <circle {...strokeProps} cx="12" cy="12" r="3.25" />
    <path {...strokeProps} d="M12 3.75v1.5M12 18.75v1.5M20.25 12h-1.5M5.25 12h-1.5M17.83 6.17l-1.06 1.06M7.23 16.77l-1.06 1.06M17.83 17.83l-1.06-1.06M7.23 7.23 6.17 6.17" />
  </Svg>
);
