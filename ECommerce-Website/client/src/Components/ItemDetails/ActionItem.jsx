import { useState, useContext } from "react";

import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { LoginContext } from "../../context/ContextProvider";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;
const StyledButtonSpecial = styled(Button)`
  width: 46%;
  height: 50px;
  background: transparent;
  border: 2px solid #222;
  color: #222;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #222;
    color: white;
  }
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;
  const { account, setAccount } = useContext(LoginContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const buyNow = async () => {
    // console.log(id);
    // let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    // var information = {
    //     action: 'https://securegw-stage.paytm.in/order/process',
    //     params: response
    // }
    // post(information);
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/transferreward`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: id, userId: account._id }),
        });
      
        if (response.ok) {
          // Coupon successfully earned
          Swal.fire("TezCoins Successfully Earned!", "", "success");
        } else {
          // Handle error response
          Swal.fire(
            "Earn Error",
            "There was an issue earning the TezCoins.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error earning TezCoins:", error);
        // Handle error, e.g., show an error message
      }
      
  };

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButtonSpecial
        onClick={() => addItemToCart()}
        style={{ marginRight: 10 }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButtonSpecial>
        <StyledButtonSpecial
          onClick={() => buyNow()}        
          variant="contained"
          // style={{marginRight:10}}
        >
          <Flash /> Buy Now
        </StyledButtonSpecial>
    </LeftContainer>
  );
};

export default ActionItem;
