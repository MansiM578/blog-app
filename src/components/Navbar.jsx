/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../routing/auth";

import "../styles.css";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {auth.isLoggedIn ? (
              <Link to="/dashboard" style={{ color: "white" }}>
                My Blog APP
              </Link>
            ) : (
              <Link to="/" style={{ color: "white" }}>
                My Blog APP
              </Link>
            )}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {auth.isLoggedIn ? (
                    <Link to="../addForm" sx={{ mx: 2 }}>
                      Create a New Post
                    </Link>
                  ) : (
                    <Link to="/" sx={{ mx: 2 }}>
                      Create a New Post
                    </Link>
                  )}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {!auth.isLoggedIn ? (
                    <Link to="../">LogIn</Link>
                  ) : (
                    <Link type="button" onClick={handleLogout}>
                      Logout
                    </Link>
                  )}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {auth.isLoggedIn ? (
              <Link to="/dashboard" style={{ color: "white" }}>
                My Blog APP
              </Link>
            ) : (
              <Link to="/" style={{ color: "white" }}>
                My Blog APP
              </Link>
            )}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {auth.isLoggedIn ? (
                <Link to="../addForm" sx={{ mx: 2 }}>
                  Create a New Post
                </Link>
              ) : (
                <Link to="/" sx={{ mx: 2 }}>
                  Create a New Post
                </Link>
              )}
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {!auth.isLoggedIn ? (
                <Link to="../">LogIn</Link>
              ) : (
                <Link type="button" onClick={handleLogout}>
                  Logout
                </Link>
              )}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    // <header className="Navbar">
    //   <div
    //     style={{ marginRight: "1.5rem", marginLeft: "1.5rem" }}
    //     className="Toolbar"
    //   >
    //     <div className="Logo">
    //       {auth.isLoggedIn ? (
    //         <Link to="/dashboard">
    //           {" "}
    //           <span role="img" aria-label="logo">
    //             ✍
    //           </span>{" "}
    //         </Link>
    //       ) : (
    //         <Link to="/">
    //           {" "}
    //           <span role="img" aria-label="logo">
    //             ✍
    //           </span>{" "}
    //         </Link>
    //       )}
    //     </div>
    //     <div className="Title">
    //       {auth.isLoggedIn ? (
    //         <Link to="/dashboard">My Blog APP</Link>
    //       ) : (
    //         <Link to="/">My Blog APP</Link>
    //       )}
    //     </div>
    //     <div style={{ display: "flex", gap: "1.5rem" }}>
    //       {auth.isLoggedIn ? (
    //         <Link to="../addForm" sx={{ mx: 2 }}>
    //           Create a New Post
    //         </Link>
    //       ) : (
    //         <Link to="/" sx={{ mx: 2 }}>
    //           Create a New Post
    //         </Link>
    //       )}
    //       {!auth.isLoggedIn ? (
    //         <Link to="../">LogIn</Link>
    //       ) : (
    //         <Link type="button" onClick={handleLogout}>
    //           Logout
    //         </Link>
    //       )}
    //     </div>
    //   </div>
    // </header>
  );
}

export default Navbar;
