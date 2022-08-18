import { styled } from "@stitches/react";

const StyledBlock = styled("section", {
  position: "relative",
  marginTop: -83,
  backgroundImage: "linear-gradient(-45deg, #2c0133, #150061)",
  padding: 48,
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 0,
  h1: {
    fontSize: "8rem",
    transition: "all 400ms",
    textShadow: "10px 10px 0px lime",
    "&:hover": {
      textShadow: "0px 0px 0px lime",
    },
  },
  ".bgImage": {
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    zIndex: -1,
    filter: "blur(4px)",
  },
});

const HeroBlock = ({
  title = "Hero Block",
  bgImage,
}: {
  title?: string;
  bgImage?: string;
}) => {
  return (
    <StyledBlock>
      <div
        className="bgImage"
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      />
      <h1>{title}</h1>
    </StyledBlock>
  );
};

export default HeroBlock;
