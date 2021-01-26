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
          pl={{ base: '20px', md: '50px', xl: '135px' }}
          pr={{ base: '20px', md: '50px', xl: '0px' }}
          py={{ base: '20px', md: '50px', xl: '96px' }}
          zIndex="2"
          width={{ base: '100%', xl: '50%' }}
        >
          <Text
            as="h1"
            fontSize={{ base: '32px', md: '64px', xl: '92px' }}
            fontWeight="700"
            color="brand.white"
            lineHeight={{ base: '32px', md: '64px', xl: '92px' }}
          >
            Quadpay <br />
            anywhere
          </Text>
          <Text
            as="p"
            fontSize={{ base: '16px', md: '20px', xl: '24px' }}
            lineHeight={{ base: '16px', md: '20px', xl: '24px' }}
            color="brand.white"
            mt="24px"
          >
            Shop your favorite brands with the Quadpay app—online or in-store.
          </Text>
          <Flex
            mt="32px"
            flexDir={{ base: 'column', xl: 'row' }}
            justifyContent={{ base: 'center', xl: 'flex-start' }}
            alignItems="center"
          >
            <CustomButton leftIcon={<AiFillApple />}>
              Get on the App Store
            </CustomButton>
            <CustomButton
              leftIcon={<SiGoogleplay />}
              ml={{ base: '0px', xl: '12px' }}
              mt={{ base: '15px', xl: '0px' }}
            >
              Get on Google Play
            </CustomButton>
          </Flex>
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
      <Box
        py={{ base: '20px', md: '50px', xl: '96px' }}
        px={{ base: '20px', md: '50px', xl: '135px' }}
        bgColor="brand.secondary"
      >
        <Text
          as="h2"
          fontSize={{ base: '28px', md: '40px', xl: '64px' }}
          lineHeight="110%"
          fontWeight="700"
        >
          Partnering with Quadpay
        </Text>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            xl: 'repeat(3,1fr)',
          }}
          mt={{ base: '25px', md: '50px', xl: '72px' }}
          gridGap={{ base: '30px 12px', md: '42px 24px', xl: '48px 30px' }}
        >
          {renderParagraphs()}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
