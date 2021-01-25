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
      <Image src={iconUrl} aria-label={iconUrl} width="60px" height="60px" />
      <Text
        as="h3"
        fontWeight="700"
        fontSize="28px"
        lineHeight="130%"
        mt="32px"
      >
        {title}
      </Text>
      <Text as="p" fontWeight="400" fontSize="18px" lineHeight="140%" mt="16px">
        {subTitle}
      </Text>
    </Box>
  );
};

export default ParagraphWithIcon;
