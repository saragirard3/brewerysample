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
        <div className="navbar" sx={{ backgroundColor:'#C2DED1' }}>
            <Box sx={{ flexGrow: 1, backgroundColor:'#C2DED1' }}>
                <AppBar position="static" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    backgroundColor: '#354259',
                    textDecoration: 'none',
                }}>
                    <Toolbar >
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#CDC2AE',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                            }}
                        ><Link style={{textDecoration:"none", color:"#C2DED1"}} to={`/`}>Girard Brewery</Link>

                        </Typography>

                        {pages.map((page) => (
                            <MenuItem key={page}>
                                <Typography textAlign="center">
                                    <Link style={{textDecoration:"none", color:"#CDC2AE",textTransform: 'capitalize',}} to={`/${page}`}>{page}</Link>
                                </Typography>
                            </MenuItem>
                        ))}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}