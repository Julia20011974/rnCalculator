import styled from 'styled-components';

export const KeypadContainer = styled.View`
    flex: 2;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 308px;
`;

export const LeftButtons = styled.View`
    width: 226px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
`;

export const RightButtons = styled.View`
    width: 62px;
    flex-direction: column;
    justify-content: space-between;
`;
