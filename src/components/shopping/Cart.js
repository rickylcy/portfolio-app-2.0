import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart({ id, open, anchorEl, handleClick, handleClose }) {
  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <ShoppingCartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        View Cart
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
      </Popover>
    </>
  );
}

export default Cart;
