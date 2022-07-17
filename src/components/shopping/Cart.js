import Popover from "@mui/material/Popover";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonGroup from "@mui/material/ButtonGroup";
import { connect } from "react-redux";
import { addItemQty, subtractItemQty } from "../../redux/shopping-actions";
function Cart({
  cart,
  qty,
  id,
  open,
  anchorEl,
  handleClick,
  handleClose,
  addItemQty,
  subtractItemQty,
}) {
  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <ShoppingCartIcon
          md={3}
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
        <Typography md={6}>View Cart</Typography>

        <Typography md={3}>{qty}</Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography align="center" sx={{ p: 2 }}>
          Your Cart:
        </Typography>
        {cart?.map((item, index) => (
          <Stack key={index} direction="row" spacing={2}>
            <Avatar src={item.image} />
            <Typography variant="subtitle2">{item.title}</Typography>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={() => addItemQty(item.id)}>+</Button>
              <Button disabled>{item.qty}</Button>
              <Button onClick={() => subtractItemQty(item.id)}>-</Button>
            </ButtonGroup>
            <Typography variant="subtitle2">{item.qty}</Typography>
          </Stack>
        ))}
      </Popover>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shopping.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemQty: (id) => dispatch(addItemQty(id)),
    subtractItemQty: (id) => dispatch(subtractItemQty(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
