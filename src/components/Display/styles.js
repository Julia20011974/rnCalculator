import styled from 'styled-components';

export const DisplayContainer = styled.View`
    flex: 1;
    wrap: wrap;
    justify-content: flex-end;
`;

export const TextOperation = styled.Text`
    font-size: ${({fontSize}) => fontSize}px;
    color: #fff;
    text-align: right;
`;

export const TextAnswer = styled.Text`
    font-size: 48px;
    color: #ffffff;
    text-align: right;
`;
