import {
  Box,
  Flex,
  Icon,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

export default function Continent() {
  return (
    <Flex direction="column" align="center">
      <Flex
        as="header"
        h={100}
        direction="row"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Link href="/">
          <ChakraLink ml={100} position="absolute" left={100}>
            <Icon as={FiChevronLeft} />
          </ChakraLink>
        </Link>
        <Flex>
          <Img src="images/logo.svg" />
        </Flex>
      </Flex>
      <Flex
        backgroundImage="images/brasil.jpg"
        w="100%"
        h={500}
        backgroundSize="cover"
        backgroundPosition="center"
        alignItems="flex-end"
      >
        <Text
          as="strong"
          marginBottom={100}
          fontSize={36}
          marginLeft={100}
          color="#FFF"
        >
          BRASIL
        </Text>
      </Flex>
      <Flex
        maxWidth={1160}
        width="100%"
        justify="space-between"
        align="center"
        mt={8}
      >
        <Flex w={600} h={211} textAlign="justify" align="center">
          O Brasil, um vasto país sul-americano, estende-se da Bacia Amazônica,
          no norte, até os vinhedos e as gigantescas Cataratas do Iguaçu, no
          sul. O Rio de Janeiro, simbolizado pela sua estátua de 38 metros de
          altura do Cristo Redentor, situada no topo do Corcovado, é famoso
          pelas movimentadas praias de Copacabana e Ipanema, bem como pelo
          imenso e animado Carnaval, com desfiles de carros alegóricos,
          fantasias extravagantes e samba.
        </Flex>
        <Flex w={490} h={99} ml={70} justify="space-between">
          <Box
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            w={99}
            h={99}
            textAlign="center"
            fontWeight="bold"
          >
            <Text fontSize="46" color="orange.300">
              50
            </Text>
            <Text fontSize="20">paises</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            w={99}
            h={99}
            textAlign="center"
            fontWeight="bold"
          >
            <Text fontSize="46" color="orange.300">
              60
            </Text>
            <Text fontSize="20">línguas</Text>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            w={150}
            h={99}
            textAlign="center"
            fontWeight="bold"
          >
            <Text fontSize="46" color="orange.300">
              27
            </Text>
            <Text fontSize="20">cidades +100</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex maxWidth={1160} w="100%" direction="column" mt={10} mb={10}>
        <Text fontSize={36}>Cidades +100</Text>
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="256px"
          alignItems="flex-start"
        >
          <Box
            w={256}
            h={279}
            borderColor="orange.300"
            borderWidth={1}
            borderRadius={10}
          >
            <Img src="images/bahia.jpg" borderTopRadius={10} />
            <Flex alignItems="center" justifyContent="space-between" mt={18}>
              <Flex direction="column" flex={1} ml={3}>
                <Text fontSize="20">Praia teste</Text>
                <Text fontSize="20">Bahia</Text>
              </Flex>
              <Img
                src="images/bandeira.jpg"
                w={30}
                h={30}
                borderRadius={15}
                mr="5"
              />
            </Flex>
          </Box>
          <Box
            w={256}
            h={279}
            borderColor="orange.300"
            borderWidth={1}
            borderRadius={10}
          >
            <Img src="images/bahia.jpg" borderTopRadius={10} />
            <Flex alignItems="center" justifyContent="space-between" mt={18}>
              <Flex direction="column" flex={1} ml={3}>
                <Text fontSize="20">Praia teste</Text>
                <Text fontSize="20">Bahia</Text>
              </Flex>
              <Img
                src="images/bandeira.jpg"
                w={30}
                h={30}
                borderRadius={15}
                mr="5"
              />
            </Flex>
          </Box>
          <Box
            w={256}
            h={279}
            borderColor="orange.300"
            borderWidth={1}
            borderRadius={10}
          >
            <Img src="images/bahia.jpg" borderTopRadius={10} />
            <Flex alignItems="center" justifyContent="space-between" mt={18}>
              <Flex direction="column" flex={1} ml={3}>
                <Text fontSize="20">Praia teste</Text>
                <Text fontSize="20">Bahia</Text>
              </Flex>
              <Img
                src="images/bandeira.jpg"
                w={30}
                h={30}
                borderRadius={15}
                mr="5"
              />
            </Flex>
          </Box>
          <Box
            w={256}
            h={279}
            borderColor="orange.300"
            borderWidth={1}
            borderRadius={10}
          >
            <Img src="images/bahia.jpg" borderTopRadius={10} />
            <Flex alignItems="center" justifyContent="space-between" mt={18}>
              <Flex direction="column" flex={1} ml={3}>
                <Text fontSize="20">Praia teste</Text>
                <Text fontSize="20">Bahia</Text>
              </Flex>
              <Img
                src="images/bandeira.jpg"
                w={30}
                h={30}
                borderRadius={15}
                mr="5"
              />
            </Flex>
          </Box>
          <Box
            w={256}
            h={279}
            borderColor="orange.300"
            borderWidth={1}
            borderRadius={10}
          >
            <Img src="images/bahia.jpg" borderTopRadius={10} />
            <Flex alignItems="center" justifyContent="space-between" mt={18}>
              <Flex direction="column" flex={1} ml={3}>
                <Text fontSize="20">Praia teste</Text>
                <Text fontSize="20">Bahia</Text>
              </Flex>
              <Img
                src="images/bandeira.jpg"
                w={30}
                h={30}
                borderRadius={15}
                mr="5"
              />
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
