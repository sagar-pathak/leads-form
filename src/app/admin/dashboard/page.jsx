"use client";
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image'
import Leads from '@/components/Leads'
import Settings from '@/components/Settings'
import { useRouter } from 'next/navigation'

const adminStyle = {
    sidebar: {
        width: '250px',
        height: '97vh',
        backgroundImage: "url('sidebar-back.png')",
        backgroundPosition: `left top`,
        backgroundRepeat: `no-repeat`,
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'black',
        padding: '30px 0px 0px 40px',
        borderRight: '2px solid #f2f2f2'
    },
    sidebarHeader: {
        textAlign: 'center',
    },
    sidebarList: {
        listStyleType: 'none',
        padding: 0,
    },
    sidebarListItem: {
        margin: '15px 0',
    },
    sidebarLink: {
        color: '#fff',
        textDecoration: 'none',
        display: 'block',
        padding: '10px',
        borderRadius: '5px',
    },
    sidebarLinkHover: {
        backgroundColor: '#575757',
    },
    logoutButton: {
        backgroundColor: '#ff4c4c',
        color: '#fff',
        textDecoration: 'none',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        marginTop: 'auto',
    },
    content: {
        marginLeft: '270px',
        padding: '20px',
        boxSizing: 'border-box',
        paddingTop: '40px'
    },
    contentParagraph: {
        marginBottom: '20px',
    },
}

const menuItems = {
    marginTop: '80px',
    activeItem: {
        fontWeight: '700'
    },
    inactiveItem: {
        fontWeight: '400'
    }
}


export function Logo() {
    return <Image src={`/logo.png`} alt={"logo"} width={120} height={48} />
}

export function MenuItem({ title, active, onClick }) {
    return (
        <Box sx={active ? menuItems.activeItem : menuItems.inactiveItem} onClick={onClick}>
            {title}
        </Box>
    )
}

export default function Dashboard() {
    const router = useRouter()
    const [activeMenu, setActiveMenu] = useState('leads');
    const handleClick = (currentMenu) => {
        setActiveMenu(currentMenu)
        console.log('clicked', currentMenu)
    }

    const handleLogout = (e) => {
        console.log("logout")
        localStorage.removeItem('token');
        router.push('/admin', { scroll: false })
    }

    // useEffect(()=>{
    //     let token = localStorage.getItem('token');
    //     console.log('here...')
    //     if(token){
    //         router.push('/admin', { scroll: false })
    //     }
    // }, [])

    return (
        <Box>
            <Box sx={adminStyle.sidebar}>
                <Box>
                    {/* <h2>Sidebar</h2> */}
                    <Logo />
                    <Grid container
                        direction="row"
                        sx={menuItems}
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <MenuItem title="Leads" active={activeMenu === "leads"} onClick={() => handleClick('leads')} />
                        </Grid>
                        <Grid item xs={12}>
                            <MenuItem title="Settings" active={activeMenu === "settings"} onClick={() => handleClick('settings')} />
                        </Grid>
                    </Grid>
                </Box>

                <a href="#logout" sx={adminStyle.logoutButton} onClick={(e)=>handleLogout(e)}>Logout</a>
            </Box>
            <Box sx={adminStyle.content}>
                {activeMenu === "leads" && <Leads />}
                {activeMenu === "settings" && <Settings />}
                {/* <h1>Main Content</h1>
                <p id="section1">Content for section 1...</p>
                <p id="section2">Content for section 2...</p>
                <p id="section3">Content for section 3...</p>
                <p id="section4">Content for section 4...</p> */}
            </Box>
        </Box>
    )
    // return (
    //     <Grid
    //         container
    //         direction="row"
    //         justifyContent="center"
    //         alignItems="center"
    //     >
    //         <Grid item xs={12}>
    //             test
    //         </Grid>
    //         <Grid item xs={12}>
    //             test
    //         </Grid>
    //     </Grid>
    // )
}