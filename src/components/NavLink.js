import { useColorModeValue } from "@chakra-ui/react";
import { Link as CLink } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <CLink
      as={Link}
      textDecoration="none"
      px="0.8rem"
      py="0.5rem"
      
      outline="0px transparent solid" 
      transition="all 0.3s"
      bg={useColorModeValue("telegram.100", "telegram.900")}
     rounded={"xl"}
      _hover={{
        
        textDecoration: "none",
       
        bg: useColorModeValue("telegram.200", "telegram.800"),
        color: useColorModeValue("black", "white"),
      }}
      to={props.url}
    >
      {props.title}
    </CLink>
  );
}

export default NavLink;
