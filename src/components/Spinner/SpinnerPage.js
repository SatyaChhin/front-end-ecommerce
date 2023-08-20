import React, { Component } from 'react';
import { Spinner } from '@chakra-ui/react'
class SpinnerPage extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <Spinner
                thickness='5px'
                speed='1s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            </div>
        );
    }
}

export default SpinnerPage;
