import React from 'react';

export interface PixProps {
  width?: number;
  height?: number;
  color?: string;
}

export const Pix: React.FC<PixProps> = ({
  width = 24,
  height = 24,
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7052_12048)">
      <path
        d="M4.99998 7.00001L2.1213 9.87868C0.949723 11.0503 0.94972 12.9498 2.12129 14.1213L4.99998 17M4.99998 7.00001L9.87866 2.12132C11.0502 0.949751 12.9497 0.949753 14.1213 2.12133L19 7.00001M4.99998 7.00001H7.50292C7.82118 7.00001 8.1264 7.12643 8.35145 7.35148L11.1514 10.1515C11.6201 10.6201 12.3799 10.6201 12.8485 10.1515L15.6485 7.35148C15.8735 7.12643 16.1788 7.00001 16.497 7.00001H19M4.99998 17L9.87866 21.8787C11.0502 23.0503 12.9497 23.0503 14.1213 21.8787L19 17M4.99998 17H7.50292C7.82118 17 8.1264 16.8736 8.35145 16.6485L11.1514 13.8485C11.6201 13.3799 12.3799 13.3799 12.8485 13.8485L15.6485 16.6485C15.8735 16.8736 16.1788 17 16.497 17H19M19 17L21.8787 14.1213C23.0502 12.9498 23.0502 11.0503 21.8787 9.87869L19 7.00001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7052_12048">
        <rect width="24" height="24" fill={color} />
      </clipPath>
    </defs>
  </svg>
);
