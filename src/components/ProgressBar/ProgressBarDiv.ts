import styled from 'styled-components';

const ProgressBarDiv = styled.div<{ $completedProgress: number }>`
  width: ${(props) => props.$completedProgress}%;
  height: 30px;
  border-radius: 25px;
  background-color: #00b797;
  display: inline-flex;
  justify-content: flex-end;
  padding-left: 3%;
  padding-right: 3%;
  align-items: center;
  align-content: center;
  margin: auto;
`;

export default ProgressBarDiv;
