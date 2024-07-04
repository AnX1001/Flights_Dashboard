# API Documentation

## Overview

This document provides information about the external APIs used in this project.

## Adding a new API

When adding a new API, please make sure to :

- Describe the usage including method and parameters.
- Provide an example response structure.

## Weather API 🌞

### Docs: https://docs.api.met.no/doc/GettingStarted

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

### Weather Icons and Description Mappings

Icons are retrieved from metno/weathericons repo. A mapping function converts symbol codes to weather descriptions by using a JSON file.
