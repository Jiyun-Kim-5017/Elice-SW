import styled from "styled-components";
import AppButton from "../../components/AppButton/AppButton";

export const Container = styled.div`
  width: 1000px;
  padding: 50px 100px;
  margin: 0 auto;
`;

export const Etc = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatchPostAppButton = styled(AppButton)`
  cursor: pointer;
  margin-top: 10px;
  :first-child {
    margin-right: 150px;
  }
`;
