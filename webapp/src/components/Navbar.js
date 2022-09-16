import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {MenuItem} from "@mui/material";

export default function Navbar(){
    const pages = ['beer', 'taproom', 'story', 'events', 'contact'];

    return(
        <div className="navbar" sx={{ backgroundColor:'#D8B6A4' }}>
            <Box sx={{ flexGrow: 1, backgroundColor:'#D8B6A4' }}>
                <AppBar position="static" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Papyrus,Fantasy,Serif',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    backgroundColor: '#630000',
                    textDecoration: 'none',
                }}>
                    <Toolbar >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Papyrus,Fantasy,Serif',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#D8B6A4',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                            }}
                        ><Link style={{textDecoration:"none", color:"#D8B6A4"}} to={`/brewerysample/`}>Girard Brewery</Link>

                        </Typography>

                        {pages.map((page) => (
                            <MenuItem key={page}>
                                <Typography textAlign="center">
                                    <Link style={{textDecoration:"none", color:"#D8B6A4",textTransform: 'capitalize',}} to={`/brewerysample/${page}`}>{page}</Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}