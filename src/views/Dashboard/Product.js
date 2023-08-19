// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import  { React , useState, useEffect } from 'react';
import axios from 'axios';

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/product/')
      .then(response => {
        setPosts(response.data.list);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Product Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400" >
              <Th borderColor={borderColor} color="gray.400" >id</Th>
                <Th pl="0px" borderColor={borderColor} color="gray.400" >
                  Author
                </Th>
                <Th borderColor={borderColor} color="gray.400" >Product_type</Th>
                <Th borderColor={borderColor} color="gray.400" >Price</Th>
                <Th borderColor={borderColor} color="gray.400" >Quantity</Th>
                <Th borderColor={borderColor} color="gray.400" >Barcode</Th>
                <Th borderColor={borderColor} color="gray.400" >create_at</Th>
                <Th borderColor={borderColor} color="gray.400" >Action</Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.map((row, index, arr) => {
                return (
                  <TablesTableRow
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
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
