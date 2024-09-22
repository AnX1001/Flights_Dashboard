export interface InstantDetails {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
}

export interface Summary {
  symbol_code: string;
}

export interface Timeseries {
  time: string;
  data: {
    instant: {
      details: InstantDetails;
    };
    next_1_hours?: {
      details?: {
        precipitation_amount: number;
      };
      summary: Summary;
    };
    next_6_hours?: {
      details?: {
        precipitation_amount: number;
      };
      summary: Summary;
    };
    next_12_hours?: {
      details?: {
        precipitation_amount: number;
      };
      summary: Summary;
    };
  };
}

export interface WeatherProperties {
  meta: {
    units: Record<string, string>;
    updated_at: string;
  };
  timeseries: Timeseries[];
}

export interface WeatherData {
  data: {
    geometry: {
      coordinates: number[];
      type: string;
    };
    properties: WeatherProperties;
    type: string;
  };
}
