import Popover from "@mui/material/Popover";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

function Cart({ cart, qty, id, open, anchorEl, handleClick, handleClose }) {
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
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        {cart?.map((item, index) => (
          <Stack key={index} direction="row" spacing={2}>
            <Avatar src={item.image} />
            <Typography variant="subtitle2">{item.title}</Typography>
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

export default connect(mapStateToProps)(Cart);
