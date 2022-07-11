import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addCard, fetchCurrentWeather, fetchCityGeo } from "../redux/reducers";
import Map from "./Map";
import CountrySelect from "./CountrySelect.js";
import NavBar from "./NavBar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CityCard({ url, city, citygeo, index }) {
  return (
    <Card
      sx={{
        height: 500,
        width: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "30%",
        }}
        image={url}
        alt="random"
      />
      <Map sx={{}} lat={citygeo[index][0]} long={citygeo[index][1]} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {city.name}
        </Typography>
        <Typography>
          Temp: {Math.floor(city.main.feels_like - 273.15)}
        </Typography>
        <Typography>Weather: {city.weather[0].description}</Typography>
        <Typography>Humidity: {city.main.humidity}</Typography>
        <Typography>
          Time zone: UTC/GMT +{city.timezone / 60 / 60} hours
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
export default CityCard;
