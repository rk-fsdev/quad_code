import React from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { AiFillApple } from 'react-icons/ai';
import { SiGoogleplay } from 'react-icons/si';

import Logo from '../../components/svgs/Logo';
import CustomButton from '../../components/buttons/CustomButton';
import paragraphs from './paragraph';
import ParagraphWithIcon from '../../components/ParagraphWithIcon';

const Home: React.FC = () => {
  const renderParagraphs = () =>
    paragraphs.map((paragraph) => (
      <ParagraphWithIcon key={paragraph.iconUrl} {...paragraph} />
    ));

  return (
    <Box>
      <Flex
        backgroundColor="brand.primary"
        overflow="hidden"
        flexDir={{ base: 'column', xl: 'row' }}
      >
        <Box
          pl="135px"
          py="96px"
          zIndex="2"
          width={{ base: '100%', xl: '50%' }}
        >
          <Text
            as="h1"
            fontSize="92px"
            fontWeight="700"
            color="brand.white"
            lineHeight="92px"
          >
            Quadpay <br />
            anywhere
          </Text>
          <Text
            as="p"
            fontSize="24px"
            lineHeight="24px"
            color="brand.white"
            mt="24px"
          >
            Shop your favorite brands with the Quadpay app—online or in-store.
          </Text>
          <Box mt="32px">
            <CustomButton leftIcon={<AiFillApple />}>
              Get on the App Store
            </CustomButton>
            <CustomButton leftIcon={<SiGoogleplay />} ml="12px">
              Get on Google Play
            </CustomButton>
          </Box>
        </Box>
        <Box
          position="relative"
          width={{ base: '100%', xl: '50%' }}
          zIndex="1"
          backgroundImage="url(/assets/background.png)"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Logo
            position="absolute"
            top="400px"
            left="100px"
            transform="scale(3.5)"
            transformOrigin="center"
          />
        </Box>
      </Flex>
      <Box py="96px" px="135px" bgColor="brand.secondary">
        <Text as="h2" fontSize="64px" lineHeight="110%" fontWeight="700">
          Partnering with Quadpay
        </Text>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            xl: 'repeat(3,1fr)',
          }}
          mt="72px"
          gridGap="48px 30px"
        >
          {renderParagraphs()}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
