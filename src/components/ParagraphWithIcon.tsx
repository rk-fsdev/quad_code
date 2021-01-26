import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export interface Props {
  /**
   * Top icon url
   */
  iconUrl: string;

  /**
   * Paragraph title
   */
  title: string;

  /**
   * Paragraph sub title
   */
  subTitle: string;
}

const ParagraphWithIcon: React.FC<Props> = ({
  iconUrl,
  title = '',
  subTitle = '',
}: Props) => {
  return (
    <Box color="brand.black">
      <Image
        src={iconUrl}
        aria-label={iconUrl}
        width={{ base: '30px', md: '45px', xl: '60px' }}
        height={{ base: '30px', md: '45px', xl: '60px' }}
      />
      <Text
        as="h3"
        fontWeight="700"
        fontSize={{ base: '14px', md: '20px', xl: '28px' }}
        lineHeight="130%"
        mt={{ base: '12px', md: '24px', xl: '32px' }}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontWeight="400"
        fontSize={{ base: '10px', md: '14px', xl: '18px' }}
        lineHeight="140%"
        mt={{ base: '8px', md: '12px', xl: '16px' }}
      >
        {subTitle}
      </Text>
    </Box>
  );
};

export default ParagraphWithIcon;
