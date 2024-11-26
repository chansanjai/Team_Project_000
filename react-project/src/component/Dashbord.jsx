import  { useState } from "react";
import  './Main.css'
import { Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import Profile from "./Profile";
import About from "./About"
import Terms from "./Terms";
function Dashboard() {
  const [selectedPage, setSelectedPage] = useState("Home");

  // Define the content for each page
  const pageContent = {
    Home: <About/>,
    About: <Typography variant="h6">About Us: Learn more about our mission and vision.</Typography>,
    Terms: <Terms />,
    Project: <Typography variant="h6">Projects: Explore our projects here.</Typography>,
    Setting: <Typography variant="h6">Settings: Adjust your preferences here.</Typography>,
    Profile: <Typography variant="h6">Profile: View and edit your profile.</Typography>,
  };

  return (
    <div style={{
        padding:"20px"
    }}>
         <div style={{
            display:'flex',
            justifyContent:'end',
            marginBottom:"40px"
          }}>
          <Profile/>
          </div>
      <Box
        sx={{
          display: "flex",
        
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
           
            // flex: 1,
            // border: "1px solid #ccc",
            // borderRadius: 2,
            padding: 3,
            // backgroundColor: "red",
            width:'15%',
         
          }}
        >
          <Typography variant="h6" gutterBottom>
            eProduct
          </Typography>
          <List>
            {["Home", "About", "Terms", "Project", "Setting", "Profile"].map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => setSelectedPage(item)}
                sx={{
                  padding: 1,
                  backgroundColor: selectedPage === item ? "primary.main" : "transparent",
                  color: selectedPage === item ? "white" : "inherit",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "white",
                  },
                }}
                style={{
                    marginBottom:'20px'
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            width:'100%',
            // flex: 3,
            // border: "1px solid #ccc",
            // borderRadius: 2,
            padding: 2,
            // backgroundColor: "#fff",
          }}
        >
          {pageContent[selectedPage]}
        </Box>
      </Box>
      </div>
  );
}

export default Dashboard;
