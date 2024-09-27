import React from "react"
import Header from "../components/Header"
import {
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Box
} from "@mui/material"
import {styled, useTheme} from "@mui/system"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import hadisContent from "./data/hadister/hadis"
import Footer from "../components/Footer"

const Container = styled(Box)(({theme}) => ({
   display: "flex",
   flexDirection: "column",
   minHeight: "100vh"
}))

const Content = styled(Box)(({theme}) => ({
   flex: 1,
   paddingBottom: "40px",
   padding: "1rem",
   [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px"
   }
}))
const AccordionBackground = styled(Box)(({theme}) => ({
   minHeight: "100vh",
   paddingBottom: "40px",
   marginTop: "80px",
   [theme.breakpoints.down("sm")]: {
      paddingBottom: "20px",
      marginTop: "60px"
   }
}))

const StyledAccordion = styled(Accordion)(({theme}) => ({
   //  borderRadius: "12px",
   transition: "background-color 0.3s ease",
   "&::before": {
      background: 0
   }
}))

const StyledAccordionSummary = styled(AccordionSummary)(({theme}) => ({
   borderRadius: "12px 12px 0 0",
   padding: theme.spacing(2),
   transition: "background-color 0.3s ease"
}))

const StyledAccordionDetails = styled(AccordionDetails)(({theme}) => ({
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   padding: theme.spacing(3),
   textAlign: "center",
   [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "left"
   }
}))

const Hadis = () => {
   const theme = useTheme()

   return (
      <Container>
         <Header />
         <Content>
            <AccordionBackground>
               <Typography
                  variant="h3"
                  align="center"
                  gutterBottom
                  sx={{
                     marginTop: "90px",
                     fontWeight: "bold",
                     color: "#f4e9db",
                     fontSize: {
                        xs: "1.5rem",
                        sm: "1.5rem"
                     }
                  }}
               >
                  КУТТУУ ХАДИСТЕР
               </Typography>
               {hadisContent.map((item, index) => (
                  <StyledAccordion key={index}>
                     <StyledAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                     >
                        <Typography
                           variant="h6"
                           sx={{fontWeight: "bold", color: "#f4e9db"}}
                        >
                           {item.title}
                        </Typography>
                     </StyledAccordionSummary>
                     <StyledAccordionDetails>
                        <img
                           src={item.image}
                           alt="Content"
                           style={{
                              maxWidth: "100%",
                              height: "auto",
                              borderRadius: "8px",
                              marginBottom: theme.breakpoints.down("sm")
                                 ? "20px"
                                 : "0"
                           }}
                        />
                        <Box
                           sx={{
                              marginTop: theme.breakpoints.down("sm")
                                 ? "10px"
                                 : "0",
                              maxWidth: "100%",
                              textAlign: "center", // Center text on all screens
                              [theme.breakpoints.up("md")]: {
                                 marginLeft: "20px",
                                 textAlign: "left" // Left align text on larger screens
                              }
                           }}
                        >
                           <Typography
                              variant="body1"
                              sx={{
                                 mb: 2,
                                 lineHeight: "1.8",
                                 color: "#f4e9db",
                                 fontFamily: "Arial, sans-serif"
                              }}
                           >
                              {item.content}
                           </Typography>
                           <Typography
                              variant="subtitle2"
                              sx={{
                                 mb: 1,
                                 color: "#f4e9db",
                                 fontFamily: "fantasy"
                              }}
                           >
                              {item.src}
                           </Typography>
                        </Box>
                     </StyledAccordionDetails>
                  </StyledAccordion>
               ))}
            </AccordionBackground>
         </Content>
         <Footer />
      </Container>
   )
}

export default Hadis
