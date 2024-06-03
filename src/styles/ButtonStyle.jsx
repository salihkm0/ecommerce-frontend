import Styled from "styled-components";

export const PrimeryButton = Styled.button`
    background-color: #ffffff;
    color: #000000;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid #000000;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: white;
        color: #474747;
        }
    &:disabled{
        background-color: #ccc;
        color: #ff351ead;
        cursor: not-allowed;
    }
    &:focus{
        outline: none;
    }
    &:active{
        transform: scale(0.95);
    }
    
`;
