import styled from 'styled-components';

export const LabelContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0;
`;

export const ExpressionContainer = styled.Text`
    font-size: 28px;
    width: 290px;
    color: ${({color}) => color};
    justify-content: center;
    text-align: right;
`;

export const IconContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
