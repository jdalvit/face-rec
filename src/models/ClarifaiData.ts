export interface ClarifaiData {
  outputs?: Output[];
}

interface Output {
  data?: {
    regions?: Region[];
  };
}

interface Region {
  region_info: {
    bounding_box: {
      left_col: number;
      right_col: number;
      top_row: number;
      bottom_row: number;
    };
  };
}
