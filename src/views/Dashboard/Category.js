import {
  Flex,
  Table,
  Tbody,
  Input ,
  Button,
  Th,
  Thead,
  FormControl ,
  FormLabel ,
  useDisclosure,
  Stack ,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Grid 
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CategoryTableRow  from "components/Tables/CategoryTableRow";
import React , { useState, useEffect } from 'react';
import axios from 'axios';
import SpinnerPage from  "components/Spinner/SpinnerPage"

function Category() {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const [ posts, setPosts] = useState([]);
    const [ loading , setLoading ] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const sizes = ["5xl"]

  useEffect(() => {
    axios.get('http://localhost:8000/category')
      .then(response => {
        setPosts(response.data.list);
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return ( <>
            <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
              <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
                <CardHeader p="6px 0px 22px 0px">
                  <Stack direction='row' spacing={4} align='center'>
                    <Button onClick={onOpen}>Create Category</Button>
                    <Modal
                      initialFocusRef={initialRef}
                      finalFocusRef={finalRef}
                      isOpen={isOpen}
                      onClose={onClose}
                      size={sizes}
                    >
                      <ModalOverlay />
                      <ModalContent>
                      <ModalHeader>Create your Category</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                              <FormControl>
                                  <FormLabel>Category name</FormLabel>
                                  <Input ref={initialRef} placeholder="Category name" />
                              </FormControl>
                              <FormControl>
                                  <FormLabel>Parent Id</FormLabel>
                                  <Input ref={initialRef} placeholder="Parent Id" />
                              </FormControl>
                              <FormControl>
                                  <FormLabel>Description</FormLabel>
                                  <Input ref={initialRef} placeholder="Description" />
                              </FormControl>
                              <FormControl>
                                  <FormLabel>Status</FormLabel>
                                  <Input ref={initialRef} placeholder="Description" />
                              </FormControl>
                          </Grid>
                      </ModalBody>    
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Stack>
                </CardHeader>
                <CardBody>
                { loading ? <SpinnerPage/> : 
                  <Table variant="simple" color={textColor} size='sm'>
                    <Thead>
                      <Tr my=".8rem" pl="0px" color="gray.600" >
                          <Th borderColor={borderColor} color="gray.600" >id</Th>
                          <Th borderColor={borderColor} color="gray.600" >Category Name</Th>
                          <Th borderColor={borderColor} color="gray.600" >description</Th>
                          <Th borderColor={borderColor} color="gray.600" >create_at</Th>
                          <Th borderColor={borderColor} color="gray.600" >Action</Th>
                          <Th borderColor={borderColor}></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                        { 
                          posts.map((row , index , arr) => {
                              return (
                                    <CategoryTableRow
                                        id={row.category_id}
                                        name={row.name}
                                        Description={row.description}
                                        Create_at={row.create_at}
                                        key={index}
                                    />
                                );
                            })
                         }
                    </Tbody>
                  </Table>}
                </CardBody>
              </Card>
            </Flex>
        </>
    );
}

export default Category;
