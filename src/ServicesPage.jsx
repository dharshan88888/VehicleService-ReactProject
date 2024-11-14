import React, { useEffect, useState } from 'react';
import './homepage.css';
import './ServicesPage.css';
import { Box, Button, InputBase, Paper, TextareaAutosize, Typography, IconButton, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
const ServicesPage = () => {
    const [currentService, setCurrentService] = useState(0);
    const [ser,setSer]=useState({title:"",description:""});
    const [serviceData,setServiceData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/item")
        .then((response)=>{
            setServiceData(response.data);
        })
    },[serviceData])
    const handleServ=(e)=>{
        const{name,value}=e.target;
        setSer({...ser,[name]:value})
    }

    const addService=(e)=>{
        axios.post("http://localhost:3001/item",ser)
        .then((response)=>{
            setServiceData([...serviceData],ser);
            setSer({title:"",description:""});

        })
    }
    const onDelete=(id)=>{
        axios.delete(`http://localhost:3001/item/${id}`)
        .then(()=>{
            setServiceData(serviceData.filter(item=>item.id!==id))
        })
    }
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="https://www.cars24.com/images/logo.svg" alt="Cars24 Logo" />
        </div>
        <ul>
          <li><a href="/">Buy used car</a></li>
          <li><a href="/">Sell car</a></li>
          <li><a href="/">Car finance</a></li>
          <li><a href="/">New cars</a></li>
          <li><a href="/service">Car services</a></li>
        </ul>
        <div className="account">
          <span style={{padding:10}}><a href="/login">Login</a></span>
          <span style={{padding:10}}><a href="/signup">Sign in</a></span>
        </div>
      </nav>

      <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Discover the wide range of services we offer to help your business succeed online.</p>
            </header>
            <Paper sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:20,width:"80%",minHeight:"50vh",backgroundColor:"#001e3e", padding:10}}>
                <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(0,0,0,0.4)",borderRadius:5,width:"60%",minHeight:"40vh"}}>
                    <Typography variant='h6' color={"white"}>SERVICE: </Typography>
                    <Paper sx={{display:"flex",justifyContent:"center",width:"40%",alignItems:"center"}}>
                        <InputBase value={ser.title} name="title" onChange={handleServ} sx={{display:"flex",justifyContent:"center",width:"90%",alignItems:"center"}}></InputBase>
                    </Paper>
                    <br/>
                    <Typography variant='h6' color={"white"}>DESCRIPTION: </Typography>
                    <Paper sx={{display:"flex",justifyContent:"center",width:"40%",alignItems:"center",minHeight:"20vh"}}>
                        <textarea value={ser.description} name="description" onChange={handleServ} style={{width:"100%",minHeight:"160px"}}/>
                    </Paper>
                    
                    <br/>
                    <Button variant='contained' onClick={addService}>ADD SERVICE</Button>
                    <br/>
                </Box>
            
            <div>
                <Box sx={{padding:5}}>
                <Typography variant="h4" component="h2"  color="white" gutterBottom>
                    Our Services
                </Typography>
                <ol>
                    {serviceData.map(item => (
                        <Paper key={item.id} sx={{ marginBottom: 2, padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body1">{item.description}</Typography>
                            </Box>
                            <IconButton onClick={() => onDelete(item.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Paper>
                    ))}
                </ol>
                </Box>
            </div>
            </Paper>
        </div>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 CARS24. All Rights Reserved.</p>
      </footer>
    </div>
  );
};


export default ServicesPage;