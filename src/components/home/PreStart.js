import styled from "styled-components";
import Nav from "../Nav";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bon1 from "../../img/bon1.jpg";
import bon2 from "../../img/bon2.jpg";
import bon3 from "../../img/bon3.jpg";

const CustomSlider = styled(Slider)`
  width: 100vw;
  height: 90vh;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #315c40;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 90vh;

  filter: brightness(35%);
`;

const BackImage = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: #282828;
  opacity: 75%;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 83vw;
  text-align: right;
  opacity: 100%;
  border-right: 5px solid white;
  padding-right: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;

  @media screen and (max-width:1199px) {
    font-size: 4vw;
  }

  @media screen and (max-width:899px) {
    font-size: 5vw;
  }

  @media screen and (max-width:599px) {
    font-size: 8vw;
  }
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 35px;
  margin-bottom: -1.2vw;

  @media screen and (max-width:1199px) {
    font-size: 2.4vw;
  }

  @media screen and (max-width:899px) {
    font-size: 3.3vw;
  }

  @media screen and (max-width:599px) {
    font-size: 4.5vw;
  }
`;

const PreStart = () => {
  const navigate = useNavigate();
  const images = [bon1, bon2, bon3];
  const onClick = () => {
    navigate("/select");
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Nav bgcolor={"white"} fontcolor={"#315C40"} />
      <CustomSlider {...settings}>
        {images.map((item) => (
          <Image src={item} />
        ))}
      </CustomSlider>
      <TitleContainer onClick={onClick}>
        <SubTitle>카몽이와 함께하는 초콜릿 체험</SubTitle>
        <Title>시작하기</Title>
      </TitleContainer>
    </div>
  );
};

export default PreStart;
