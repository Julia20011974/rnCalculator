import styled from 'styled-components';
import {Container} from 'theme';

export const HistoryContainer = styled(Container)`
    flex-wrap: wrap;
`;

export const HistoryText = styled.Text`
    color: ${({theme}) => theme.tertiaryDisplayColor};
    font-size: 22px;
`;
