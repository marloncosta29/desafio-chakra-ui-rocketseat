import { Flex, HStack, Icon, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { TravelTypes } from "../components/Home/TravelType";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <Flex direction="column">
      <Flex borderWidth={3} as="header" w="100%" justify="center">
        <Img src="images/logo.svg" />
      </Flex>
      <Img src="images/banner.png" />
      <SimpleGrid
        maxWidth={1160}
        minChildWidth="158px"
        marginLeft="auto"
        marginRight="auto"
        gap="8"
      >
        <TravelTypes type="nightlife" text="Vida Notura" />
        <TravelTypes type="beach" text="Praia" />
        <TravelTypes type="modern" text="Moderno" />
        <TravelTypes type="classic" text="Clássico" />
        <TravelTypes type="more" text="e mais..." />
      </SimpleGrid>
      <Flex
        width={839}
        ml="auto"
        mr="auto"
        mt="10"
        fontSize="36"
        direction="column"
        align="center"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então scolha seu continente</Text>
      </Flex>
      <Flex w={1160} h={420} ml="auto" mr="auto" mb="20">
        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onClick={() => {
            router.push("/continent");
          }}
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              backgroundImage="images/slide1.jpg"
              backgroundSize="cover"
              align="center"
              justifyContent="space-between"
              borderRadius={10}
            >
              <Icon as={FiChevronLeft} fontSize={36} ml="5" fontWeight="bold" />
              <Flex direction="column" color="">
                <Text as="strong" fontSize={36} letterSpacing={2}>
                  Brasil
                </Text>
                <Text>O continente mais robado</Text>
              </Flex>
              <Icon
                as={FiChevronRight}
                fontWeight="bold"
                fontSize={36}
                mr="5"
              />
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              backgroundImage="images/slide2.jpg"
              backgroundSize="cover"
              align="center"
              justifyContent="space-between"
              borderRadius={10}
            >
              <Icon as={FiChevronLeft} fontSize={36} ml="5" fontWeight="bold" />
              <Flex direction="column" color="">
                <Text as="strong" fontSize={36} letterSpacing={2}>
                  Brasil
                </Text>
                <Text>O continente mais robado</Text>
              </Flex>
              <Icon
                as={FiChevronRight}
                fontWeight="bold"
                fontSize={36}
                mr="5"
              />
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              backgroundImage="images/slide3.jpg"
              backgroundSize="cover"
              align="center"
              justifyContent="space-between"
              borderRadius={10}
            >
              <Icon as={FiChevronLeft} fontSize={36} ml="5" fontWeight="bold" />
              <Flex direction="column" color="">
                <Text as="strong" fontSize={36} letterSpacing={2}>
                  Brasil
                </Text>
                <Text>O continente mais robado</Text>
              </Flex>
              <Icon
                as={FiChevronRight}
                fontWeight="bold"
                fontSize={36}
                mr="5"
              />
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              backgroundImage="images/slide4.jpg"
              backgroundSize="cover"
              align="center"
              justifyContent="space-between"
              borderRadius={10}
            >
              <Icon as={FiChevronLeft} fontSize={36} ml="5" fontWeight="bold" />
              <Flex direction="column" color="">
                <Text as="strong" fontSize={36} letterSpacing={2}>
                  Brasil
                </Text>
                <Text>O continente mais robado</Text>
              </Flex>
              <Icon
                as={FiChevronRight}
                fontWeight="bold"
                fontSize={36}
                mr="5"
              />
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              backgroundImage="images/slide5.jpg"
              backgroundSize="cover"
              align="center"
              justifyContent="space-between"
              borderRadius={10}
            >
              <Icon as={FiChevronLeft} fontSize={36} ml="5" fontWeight="bold" />
              <Flex direction="column" color="">
                <Text as="strong" fontSize={36} letterSpacing={2}>
                  Brasil
                </Text>
                <Text>O continente mais robado</Text>
              </Flex>
              <Icon
                as={FiChevronRight}
                fontWeight="bold"
                fontSize={36}
                mr="5"
              />
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
