import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const SLink = styled(Link)`
    all : unset;
    cursor : pointer;
    padding : 0 10px;
    &: hover {
        color : blue;
    }
    background-color : ${props => props.selected ? "skyblue" : ""}
`;


export const Section = styled.section`
    padding : 1px;
    margin : 1px;
    border : 1px solid black;
    
`;

export const Button = styled.button``;

export const Note = styled.pre``;

export const Code =  styled.code``;

export  const Row = styled.div``;
