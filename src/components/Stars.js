import { Star, StarHalf, StarBorderOutlined } from "@material-ui/icons";

export const stars = (star) => {
  if (star === 0) {
    return (
      <>
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star > 0 && star < 1) {
    return (
      <>
        <StarHalf />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star === 1) {
    return (
      <>
        <Star />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star > 1 && star < 2) {
    return (
      <>
        <Star />
        <StarHalf />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star === 2) {
    return (
      <>
        <Star />
        <Star />
        <StarBorderOutlined />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star > 2 && star < 3) {
    return (
      <>
        <Star />
        <Star />
        <StarHalf />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star === 3) {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <StarBorderOutlined />
        <StarBorderOutlined />
      </>
    );
  } else if (star > 3 && star < 4) {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <StarHalf />
        <StarBorderOutlined />
      </>
    );
  } else if (star === 4) {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <StarBorderOutlined />
      </>
    );
  } else if (star > 4 && star < 5) {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <StarHalf />
      </>
    );
  } else if (star === 5) {
    return (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    );
  }
};
