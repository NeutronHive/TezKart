import { useState } from "react";

import { Link } from "react-router-dom";
import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";
import {
  AccountBalanceWallet,
  AccountBalanceWalletOutlined,
  AddCircleOutline,
  AddCircleRounded,
  ArrowDropDown,
  BoltOutlined,
  Favorite,
  FavoriteOutlined,
  LocalMallOutlined,
  NotificationAddOutlined,
  PaymentOutlined,
  PowerSettingsNew,
  Rule,
  RuleFolderOutlined,
} from "@mui/icons-material";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick} style={{cursor:"pointer"}}>
        <Typography style={{ marginTop: 2 }}>
          <div style={{ display: "flex" }}>
            <span style={{ marginTop: "0.3rem" }}> {account.username}</span>{" "}
            <ArrowDropDown />
          </div>
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => logout()}
            >
              <PowerSettingsNew fontSize="small" color="#222" />
              <Logout>Logout</Logout>
            </div>
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <BoltOutlined fontSize="small" color="#222" />
              <Logout>
                <Link
                  to={"/TezCoin"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  TezCoin Zone{" "}
                </Link>
              </Logout>
            </div>
           
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <AccountBalanceWalletOutlined fontSize="small" color="#222" />
              <Logout> Orders </Logout>
            </div>
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FavoriteOutlined fontSize="small" color="#222" />
              <Logout> Wishlist</Logout>
            </div>
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <PaymentOutlined fontSize="small" color="#222" />
              <Link
                to="/coupons"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Logout>Coupons </Logout>
              </Link>
            </div>
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <LocalMallOutlined fontSize="small" color="#222" />
              <Logout>Gift Cards</Logout>
            </div>
            <div
              style={{
                color: "black",
                borderBottom: "1px solid #DCD6D0",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <RuleFolderOutlined fontSize="small" color="#222" />
              <Link
                to="/rulesandregulations"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Logout>
                  Loyalty Program <br /> Guidelines
                </Logout>
              </Link>
            </div>
          </div>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
