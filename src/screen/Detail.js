import styled from "styled-components";
import Nav from "../components/Nav";
import List from "../components/admin/List";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const TopContainer = styled.div`
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: #4b3327;
  font-size: 30px;
  font-weight: bold;
  margin: 0px;
  margin-left: 5vw;
`;
const ScriptBtn = styled.button`
  background-color: #315c40;
  width: 10vw;
  margin-right: 1vw;
  height: 3vh;
  color: white;
  font-weight: bold;
  border: none;
`;
const Newbtn = styled.button`
  background-color: #e4e4e4;
  color: #4b3327;
  margin-right: 5vw;
  width: 10vw;
  height: 3vh;
  font-weight: bold;
  border: none;
`;
const Container = styled.div``;
const Detail = () => {
  const params = useParams();
  const param = params.expId;
  const [maxStep, setMaxStep] = useState(0);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get("http://35.216.68.47:8080/api/experiences")
      .then(function (response) {
        // 성공 핸들링

        const findTitle = response.data.result.content.find(
          (item) => item.experienceId === parseInt(params.expId, 10)
        );

        if (findTitle) {
          setTitle(findTitle.title);
        } else {
          console.log("can't find");
        }
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });

    axios
      .get(`http://35.216.68.47:8080/api/experiences/${param}/pages`)
      .then(function (response) {
        // 성공 핸들링
        console.log(response);
        setMaxStep(
          Math.max(...response.data.result.map((item) => item.stepId))
        );
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, [title]);
  return (
    <div>
      <Nav bgcolor={"white"} fontcolor={"#315C40"}></Nav>
      <TopContainer>
        <Title>{title}</Title>
        <div>
          <ScriptBtn>대사 전체보기</ScriptBtn>
          <Newbtn
            onClick={() =>
              navigate("/script/makescript", {
                state: {
                  expId: param,
                  stepId: maxStep,
                },
              })
            }
          >
            +새 페이지
          </Newbtn>
        </div>
      </TopContainer>
      <List expId={param} />
      
    </div>
  );
};

export default Detail;
