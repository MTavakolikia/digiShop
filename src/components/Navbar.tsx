import { AppBar, Toolbar, Typography, Link, IconButton, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Navbar = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap', justifyContent: "space-between" }} >
                <Typography variant="h6" color="inherit" noWrap>
                    DigiShop
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Home
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        About
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Products
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        FAQ
                    </Link>
                </nav>
                <span>
                    <IconButton >
                        <PersonOutlineIcon />
                    </IconButton>
                    <IconButton >
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </span>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar