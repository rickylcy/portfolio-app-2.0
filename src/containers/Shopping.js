import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  adjustItemQty,
  laodCurrentItem,
} from "../redux/shoppingReducer";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Cart from "../components/shopping/Cart";
import ProductCard from "../components/shopping/ProductCard";
function Shopping({ products, cart }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Grid container spacing={8}>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  paragraph
                >
                  LASNFLASFNLASNLK ALKSGNLAKSGN ALSNGLAGN ALSKNGLAKG ALKSGNASG
                  ALKSGNASG
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Cart
                  qty={cartCount}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  handleClick={handleClick}
                  handleClose={handleClose}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Grid container spacing={4}>
          {products?.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shopping.products,
    cart: state.shopping.cart,
  };
};

export default connect(mapStateToProps)(Shopping);
