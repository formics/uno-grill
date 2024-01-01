import styled from "styled-components";

const GoogleMap = () => {
  return (
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11308.369449428401!2d20.4526873!3d44.8807693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a648171738651%3A0x36e9c155b7f95500!2sGrill%20Uno!5e0!3m2!1sen!2srs!4v1704131684131!5m2!1sen!2srs"
      allowfullscreen="no"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="map"
    />
  );
};

export default GoogleMap;

const StyledMap = styled.iframe`
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
`;
