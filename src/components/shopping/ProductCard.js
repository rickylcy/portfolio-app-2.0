import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        height: 500,
        width: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h6" component="h2">
        {product.title}
      </Typography>
      <CardMedia
        component="img"
        sx={{
          height: "30%",
        }}
        image={product.image}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.description}
        </Typography>
        <Typography>Price: {product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;
