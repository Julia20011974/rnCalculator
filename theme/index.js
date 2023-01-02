import styled from 'styled-components';

export const darkTheme = {
    bgColor: '#17181A',
    headerTitleColor: '#FFFFFF',
    primaryDisplayColor: '#818181',
    secondaryDisplayColor: '#FFFFFF',
    primaryKeyBgColor: '#303136',
    secondaryKeyBgColor: '#005DB2',
    primaryKeyTextColor: '#29A8FF',
    secondaryKeyTextColor: '#339DFF',
    historyTextColor: '#FFFFFF',
    iconsColor: '#FFFFFF',
};

export const lightTheme = {
    bgColor: '#F7F8FB',
    headerTitleColor: '#000000',
    primaryDisplayColor: '#818181',
    secondaryDisplayColor: '#000000',
    primaryKeyBgColor: '#FFFFFF',
    secondaryKeyBgColor: '#109DFF',
    primaryKeyTextColor: '#38B9FF',
    secondaryKeyTextColor: '#303136',
    historyTextColor: '#000000',
    iconsColor: '#000000',
};

export const Container = styled.View`
    background-color: ${({bgColor}) => bgColor};
    flex: 1;
    padding: 0 10px 20px;
`;
