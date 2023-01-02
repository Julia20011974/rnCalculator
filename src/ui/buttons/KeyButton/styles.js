import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    background-color: #303136;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 24px;
`;
