import React, { Children } from 'react'
import { Box,Heading,Text,Flex,Button,Stack, HStack,Icon, StackProps} from '@chakra-ui/react'
import {CheckIcon} from '../icons/Icon'

export const ListItem=(props: StackProps)=>{
    const {children , ...rest}=props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon  as={CheckIcon} w='22px' h='22px'/> 
            <Text>{children}</Text>
        </HStack>
    );
}


export default function Pricing() {
  return (
    <>
      <Box border='1px' borderColor='gray' maxWidth='994px' mx={{base:'10px',md:'auto',lg:'auto'}} mt='-160px' borderRadius='12px' overflow='hidden'  boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.5), 0px 10px 10px -5px rgba(0, 0, 0, 0.5),'>
        <Flex direction={{base:'column',md:'column',lg:'row'}} > 
            <center> 
            <Box bg='#F0EAFB' p='60px'>
            <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
            <Heading as='h3' fontSize='60px' fontWeight='800'>$329</Heading>
            <Text fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
            <Button colorScheme='purple' size='lg' w='282px' h='51px' mt='24px'>Get Started</Button>
            </Box>
            </center>
            <Box p='60px' fontSize='16px' bg='#FFFFFF' >
                <Text fontSize='18px' fontWeight='400' textAlign='left'>Access these features when you get this pricing package for your business.</Text>
                <Stack as='ul' spacing='20px' pt='16px'>
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
                </Stack>
            </Box>
        </Flex>
      </Box>
    </>
  )
}
