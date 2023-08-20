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
import ProductsTableRow from "components/Tables/ProductsTableRow";
import React , { useState , useEffect } from 'react';
import axios from 'axios';
// import SkeletonPage from  "components/Skeleton/SkeletonProduct"
import SpinnerPage from  "components/Spinner/SpinnerPage"
// import Modal from "components/Modal/modalProduct"

function Product() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [posts, setPosts] = useState([]);
  const [ loading , setLoading ] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const sizes = ["5xl"]

  useEffect(() => {
    axios.get('http://localhost:8000/product/')
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
                  <Button onClick={onOpen}>Create Product</Button>
                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size={sizes}
                  >
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Create your Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                      <FormControl>
                        <FormLabel>Product name</FormLabel>
                        <Input ref={initialRef} placeholder="Product name" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input ref={initialRef} placeholder="Price" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Quantity</FormLabel>
                        <Input ref={initialRef} placeholder="Quantity" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input ref={initialRef} placeholder="Description" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Product Type</FormLabel>
                        <Input ref={initialRef} placeholder="Product Type" />
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
                {loading ? <SpinnerPage/> : 
                  <Table variant="simple" color={textColor} size='sm'>
                    <Thead>
                      <Tr my=".8rem" pl="0px" color="gray.600" >
                        <Th borderColor={borderColor} color="gray.600" >id</Th>
                        <Th pl="0px" borderColor={borderColor} color="gray.600" >
                            Product Name
                        </Th>
                        <Th borderColor={borderColor} color="gray.600" >Product_type</Th>
                        <Th borderColor={borderColor} color="gray.600" >Price</Th>
                        <Th borderColor={borderColor} color="gray.600" >Quantity</Th>
                        <Th borderColor={borderColor} color="gray.600" >Barcode</Th>
                        <Th borderColor={borderColor} color="gray.600" >create_at</Th>
                        <Th borderColor={borderColor} color="gray.600" >Action</Th>
                        <Th borderColor={borderColor}></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                            { posts.map((row, index, arr) => {
                              return (
                                <ProductsTableRow
                                  id={row.product_id}
                                  name={row.name}
                                  image={row.image}
                                  // email={row.price}
                                  Product_type={row.product_type}
                                  domain={row.domain}
                                  price={row.price}
                                  date={row.quantity}
                                  Barcode={row.barcode}
                                  Create_at={row.create_at}
                                  isLast={index === arr.length - 1}
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

export default Product;
