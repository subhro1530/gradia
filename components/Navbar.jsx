import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Button,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Courses", "AI Tools", "About"];
const isLoggedIn = true; // <-- toggle this to simulate auth state

const NavLink = ({ children }) => (
  <Button variant="ghost" _hover={{ bg: "gray.100", color: "blue.600" }}>
    {children}
  </Button>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  return (
    <>
      <Box bg="white" px={4} shadow="sm" position="sticky" top={0} zIndex={50}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            Gradia
          </Text>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Avatar
              size="sm"
              name="User"
              cursor="pointer"
              onClick={openDrawer}
              src="https://i.pravatar.cc/300"
            />
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Avatar
                size="sm"
                name="User"
                cursor="pointer"
                onClick={openDrawer}
                src="https://i.pravatar.cc/300"
              />
            </Stack>
          </Box>
        )}
      </Box>

      {/* Drawer on Avatar Click */}
      <Drawer placement="right" onClose={closeDrawer} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">User Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} mt={4} align="stretch">
              {isLoggedIn ? (
                <>
                  <Button colorScheme="blue" variant="ghost">
                    Profile
                  </Button>
                  <Button colorScheme="blue" variant="ghost">
                    Dashboard
                  </Button>
                  <Button colorScheme="red" variant="outline">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button colorScheme="blue">Login</Button>
                  <Button colorScheme="gray" variant="outline">
                    Register
                  </Button>
                </>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
