import React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { loadCurrentItem, addToCart } from "../../redux/shopping-actions";

function ProductCard({ product, addToCart, loadCurrentItem, cart }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography>Price: {product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            console.log(cart);
          }}
          size="small"
        >
          View Item
        </Button>
        <Button onClick={() => addToCart(product.id)} size="small">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shopping.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
