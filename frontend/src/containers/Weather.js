import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  addCard,
  fetchCurrentWeather,
  fetchCityGeo,
} from "../redux/weatherReducer";
import CountrySelect from "../components/weather/CountrySelect.js";
import CityCard from "../components/weather/CityCard";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

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
          <Container maxWidth="xl">
            <Grid container>
              <Grid item sx={12} md={2}>
                <Paper sx={{ margin: 3 }}>
                  This feature is developed with Redux and using Open Weather
                  and Leaflet API. The purpose is to practice using API and
                  material ui.
                </Paper>
              </Grid>
              <Grid item sx={12} md={8}>
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
                  weather.
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  You can start typing and search your preference city.
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
              </Grid>
              <Grid item sx={12} md={2}>
                <Paper>
                  TO DO: 1. Disable adding when api is loading by adding spinner
                  2. Connect to DB and store all cities info for retriving it
                  when user first enter the page 3. Add a pic search api for
                  searching random picture for each city when added.
                </Paper>
              </Grid>
            </Grid>
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
    cities: state.weather.cityWeather,
    cityGeo: state.weather.cityGeo,
    targetLat: state.weather.targetLat,
    targetLong: state.weather.targetLong,
  };
};

export default connect(mapStateToProps)(Weather);
