import { Box, HStack, Icon, StackProps, Text ,Flex} from '@chakra-ui/react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from '../icons/Icon';

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

export function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='24px'>
      <Icon as={icon} boxSize='48px' />
      <Text textAlign='left' fontWeight='700' fontSize={{ base: '12px', md: '12px', lg: '18px' }}>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='32px' as='section' >
   
      <Flex direction={{base:'column',lg:'row'}}  px='48px' >
        <Feature mt ={{base:'20px',lg:'auto'}} icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature mt ={{base:'20px',lg:'auto'}}  icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature mt ={{base:'20px',lg:'auto'}}  icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Flex>
      
    </Box>
  );
}
