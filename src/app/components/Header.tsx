import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
    <center>
    <Box as='section'  color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px' pl={"10px"} textAlign={{base:'left',md:'left',lg:'center'}}>
        <Heading fontSize='48px' fontWeight='800' > Simple pricing for you business</Heading>
        <Text fontSize='24px' fontWeight='500' pt='16px'>Plans that are carefully carfted to suit your business</Text>
    </Box>
    </center>
    </>
  )
}
