import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    border: 0.05rem solid white;
    color: white;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{ 
        background: white;
        color: #0275d8;
    }
    &:focus{ 
        outline: none;
    }
`;
