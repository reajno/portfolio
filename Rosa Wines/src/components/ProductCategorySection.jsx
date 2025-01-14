import React from 'react'
import { Box, Image, VStack, HStack } from '@chakra-ui/react'
import { pinotNoir } from '@/utils/assets'

// Category Card template
<Box>
    <VStack spacing={2}>
    <Image src={pinotNoir} alt='' />
    <HStack spacing={2}>
        <Text> CATEGORY NAME</Text>
        {/* Arrow from lucide icons here */}
    </HStack>
    </VStack>
    </Box>


const ProductCategorySection = () => {
  return (
    <div>ProductCategorySection</div>

  )
}

export default ProductCategorySection