import React, {useState} from "react"
import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Drawer,
   List,
   ListItem,
   ListItemText,
   Button,
   Box,
   ListItemIcon
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {Verified} from "@mui/icons-material"
import {styled} from "@mui/system"
import {useNavigate} from "react-router-dom"
import bgimg from "../assetts/icons/as.jpg"
import "react-toastify/dist/ReactToastify.css"
import ScrollToTopButton from "./ScrollToTopButton"
import CloseIcon from "@mui/icons-material/Close"

const ResponsiveDrawer = styled(Drawer)(({theme}) => ({
   "& .MuiDrawer-paper": {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "70%"
      },
      [theme.breakpoints.up("md")]: {
         width: "40%"
      },
      [theme.breakpoints.up("lg")]: {
         width: "30%"
      },
      [theme.breakpoints.up("xl")]: {
         width: "20%"
      },
      backgroundImage: `url(${bgimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      backdropFilter: "blur(8px)" // Adds a blur effect for better text contrast
   }
}))

const ResponsiveListItemText = styled(ListItemText)(({theme}) => ({
   "& .MuiTypography-root": {
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
         fontSize: "1rem"
      }
   }
}))

const StyledAppBar = styled(AppBar)({
   backgroundImage: "linear-gradient(to right, #071c6b, #304d9a)",
   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)" // Adds a subtle shadow for depth
})

const Logo = styled(Typography)({
   flexGrow: 1,
   fontSize: "0.9rem",
   fontWeight: "bold",
   textAlign: "left",
   cursor: "pointer",
   color: "#f6edde"
})

const BurgerMenu = styled(IconButton)(({theme}) => ({
   color: "#e8b775",
   fontSize: "1.5rem",
   "&:hover": {
      color: "#ffffff" // Hover effect for icon
   }
}))

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false)
   const navigate = useNavigate()

   const toggleDrawer = open => event => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return
      }
      setMenuOpen(open)
   }

   const handleNavigation = (path, link) => {
      if (link) {
         window.open(link, "_blank", "noopener,noreferrer")
      } else if (path) {
         navigate(path)
      }
   }

   const handleNavHome = () => {
      navigate("/")
   }

   return (
      <div>
         <StyledAppBar position="fixed">
            <Toolbar>
               <Logo onClick={handleNavHome}>
                  <Box
                     display="flex"
                     justifyContent="start"
                     alignItems="center"
                  >
                     <Button
                        style={{
                           color: "#f6edde",
                           fontFamily: "'Lora', serif",
                           fontSize: "0.8rem"
                        }}
                     >
                        NASYIKAT.MEDIA
                     </Button>
                     <Verified
                        sx={{
                           marginBottom: "4px",
                           color: "#4ba9ed"
                        }}
                        fontSize="small"
                     />
                  </Box>
               </Logo>
               <BurgerMenu edge="end" onClick={toggleDrawer(true)}>
                  <MenuIcon sx={{fontSize: "1.9rem"}} />
               </BurgerMenu>
            </Toolbar>
         </StyledAppBar>
         <ResponsiveDrawer
            anchor="right"
            open={menuOpen}
            onClose={toggleDrawer(false)}
         >
            <Box
               py={2}
               px="10px"
               display="grid"
               alignItems="center"
               sx={{gridTemplateColumns: "1fr 4fr 1fr"}}
            >
               <Box
                  component="img"
                  src="/static/logo.jpg"
                  alt=""
                  sx={{width: "100%", aspectRatio: "1/1", borderRadius: "50%"}}
               />
               <Typography
                  color="secondary"
                  sx={{
                     textTransform: "none",
                     padding: 0,
                     fontSize: "1rem",
                     marginLeft: "1.1rem",
                     color: "#161d23"
                  }}
               >
                  NASYIKAT.MEDIA
               </Typography>

               <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon
                     sx={{color: "black", height: "30px", width: "30px"}}
                  />
               </IconButton>
            </Box>
            <List
               style={{
                  color: "#111111",
                  lineHeight: "1.7rem",
                  padding: "10px"
               }}
            >
               {[
                  {text: "Башкы бет", path: "/app"},
                  {text: "Биз жөнүндө", path: "/aboutUs"},
                  {text: "Муаллим сани", path: "/MualimSani"},
                  {text: "Намаз убактысы", path: "/namaztimes"},
                  {text: "Исламда 40 парз", path: "/islamdynparzdary"},
                  {text: "Ислам деген эмне", path: "/islam"},
                  {text: "Электрондук китептер", path: "/books"},
                  {
                     text: "Пайгамбарыбыздын с.а.в акыркы хутбасы",
                     path: "/hutba"
                  },
                  {text: "Кыргыз Республикасы", path: "/kyrgyz"},
                  {text: "Пайдалуу дубалар", path: "/duba"},
                  {text: "Куттуy Хадистер", path: "/hadis"},
                  {text: "Онлайн Дүкөн", path: "/store"},
                  {text: "Ал Жардам", path: "/aljardam"},
                  {text: "Сүрөлөр", path: "/onsuro"},
                  {text: "Курстар", path: "/islamiccourses"},
                  {text: "Тасбих", path: "/zikr"}
               ].map((item, index) => (
                  <ListItem
                     button
                     key={index}
                     onClick={() => handleNavigation(item.path, item.link)}
                     sx={{
                        marginBottom: "10px",
                        padding: "6px 10px",
                        cursor: "pointer",
                        borderRadius: "8px",
                        transition: "background-color 0.3s, transform 0.2s",
                        color: "green",
                        "&:hover": {
                           backgroundColor: "#161c25b7",
                           transform: "scale(1.02)",
                           color: "#f6ecde"
                        }
                     }}
                  >
                     {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                     <ResponsiveListItemText primary={item.text} />
                  </ListItem>
               ))}
            </List>
         </ResponsiveDrawer>
         <ScrollToTopButton />
      </div>
   )
}

export default Header
