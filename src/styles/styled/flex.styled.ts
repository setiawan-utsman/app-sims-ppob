import styled from "styled-components";

const DFlex = styled.div`
  display: flex !important;
  gap: 1rem;
  align-items: center;
`

const DFlexColumn = styled(DFlex)`
  flex-direction: column;
  align-items: flex-start;
`


export {DFlex, DFlexColumn}
