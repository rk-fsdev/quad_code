import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

const CustomButton: React.FC<ButtonProps> = ({
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <Button
      fontSize="16px"
      backgroundColor="brand.white"
      color="brand.primaryBlue"
      px={{ base: '16px', md: '20px', xl: '24px' }}
      py="12.5px"
      fontWeight="700"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
