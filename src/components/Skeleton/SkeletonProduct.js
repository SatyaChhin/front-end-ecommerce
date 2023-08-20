import { Box , SkeletonCircle, SkeletonText , Skeleton , Stack } from '@chakra-ui/react'
import React, { Component } from 'react';
class SkeletonPage extends Component {
    render() {
        return (
            <>
               <Stack width={1500}>
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Stack>
            </>
        );
    }
}

export default SkeletonPage;
