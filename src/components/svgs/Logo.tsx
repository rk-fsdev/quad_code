import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FC<BoxProps> = ({ ...restProps }: BoxProps) => {
  return (
    <Box width="498px" height="535px" {...restProps}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 498 535"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5548 313.112H298.091V312.52C359.422 312.52 409.328 261.739 409.328 199.332C409.328 136.939 359.422 86.171 298.091 86.171C236.838 86.171 186.997 136.807 186.881 199.122V508.015C186.881 518.495 178.522 527 168.223 527H120.931C110.619 527 102.26 518.495 102.26 508.015V199.332H102.182C102.182 198.858 102.247 198.397 102.26 197.923V197.054H102.299C103.515 88.0274 190.646 0 298.091 0C406.287 0 494 89.2519 494 199.332C494 306.661 410.583 393.925 306.152 398.27V398.678H22.5548C12.3201 398.678 3.99997 390.225 3.99997 379.811V331.992C3.99997 321.565 12.3201 313.112 22.5548 313.112Z"
            fill="#022059"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="498"
            height="535"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

export default Logo;
