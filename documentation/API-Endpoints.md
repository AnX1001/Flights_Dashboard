# API Documentation

## Overview

This document provides information about the external APIs used in this project.

## Weather API 🌞

- **Name**: Norwegian Meteorological Institute's MET Weather API
- **Endpoint**: `https://api.met.no/weatherapi/locationforecast/2.0/compact`
- **Description**: Provides detailed weather forecasts based on geographic coordinates.
  **Usage**:
  - **Method**: `GET`
  - **Parameters**:
    - `lat`: Latitude of the location (e.g., `59.9139` for Oslo).
    - `lon`: Longitude of the location (e.g., `10.7522` for Oslo).
- **Response Structure**:
  ```json
  {
    "data": {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [ 10.7522, 59.9139, 5 ] },
      "properties": {
        "timeseries": [
          {
            "time": "2024-07-01T08:00:00Z",
            "data": {
              "instant": {
                "details": {
                  "air_pressure_at_sea_level": 1003,
                  "air_temperature": 18,
  ```
