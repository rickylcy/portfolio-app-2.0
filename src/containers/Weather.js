import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addCard, fetchCurrentWeather, fetchCityGeo } from "../redux/reducers";
import Map from "../components/Map";
import CountrySelect from "../components/CountrySelect.js";
import CityCard from "../components/CityCard";
import NavBar from "../components/NavBar";
import NewNavBar from "../components/Nav";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Weather({ cities, cityGeo, targetLat, targetLong }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather({ lat: targetLat, lng: targetLong }));
  }, []); // eslint-disable-line

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [counter, setCounter] = useState(1);

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
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Weather Track
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Choose the country and press the add card button to check the
              weather. You can start typing and search your preference city.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <CountrySelect handleChange={setSelectedOptions} />
              <Button
                variant="outlined"
                onClick={async () => {
                  await dispatch(fetchCityGeo(selectedOptions.label));
                  //console.log("new tarLatLong:", targetLat, targetLong);
                  await dispatch(
                    fetchCurrentWeather({
                      lat: cityGeo[counter][0],
                      lng: cityGeo[counter][1],
                    })
                    //fetchCurrentWeather({ lat: targetLat, lng: targetLong })
                  );
                  setCounter(counter + 1);
                  console.log("cities after clicked:", cities);
                  console.log("cityGeo after clicked:", cityGeo);
                }}
              >
                ADD CARD
              </Button>
              <Typography>Total Card: {counter}</Typography>
            </Stack>
          </Container>
        </Box>
        <Grid container spacing={4}>
          {cities?.map((city, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CityCard
                url={"https://source.unsplash.com/random"}
                city={city}
                citygeo={cityGeo}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.cityWeather,
    cityGeo: state.cityGeo,
    targetLat: state.targetLat,
    targetLong: state.targetLong,
  };
};

export default connect(mapStateToProps)(Weather);
