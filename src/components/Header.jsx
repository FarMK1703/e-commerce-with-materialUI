import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {  useDispatch } from 'react-redux'
import { toggleSideBar } from "../redux-store/toggleSideBarSlice";

export default function Header() {

  const dispatch = useDispatch()
    return (
        <>
            <AppBar color='primary' position='sticky'>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding:{
                            xs: '0 5px 0 5px',
                            md: '0 20px 0 20px'
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                ml: 2,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                fontSize: 25,
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>

                        <LocalMallIcon
                        
                        fontSize='large' />
                    </Box>

                    <IconButton
                        onClick={()=>{dispatch(toggleSideBar())}}
                    >
                        <MenuIcon
                            variant='contained'
                            sx={{
                                fontSize: 45,
                                color: "white",
                            }}
                        />
                    </IconButton>
                </Box>
            </AppBar>
        </>
    );
}
