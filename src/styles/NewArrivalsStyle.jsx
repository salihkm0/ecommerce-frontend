import Styled from "styled-components";

export const ArrivalsHeadding = Styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        }
`;

export const ArrivalsDesc = Styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: #4c4c4c;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: .6rem;
        }
`;

export const ArrivalsContainer = Styled.div`
    width :  100%;
    height : 400px;
    display : grid;
    gap : 20px;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr;
    grid-template-areas : "banner banner";
    margin-top : 50px;
    /* background: #4c4c4c; */
@media (max-width : 768px){
    grid-template-columns : 1fr;
    grid-template-rows : 1fr 1fr;
    grid-template-areas : "banner";
    height : 600px;
    }
    `;

export const ArrivalsSubContainer = Styled.div`
    display : grid;
    place-items : center;
    text-align :  center;
    width :  100%;
    /* max-width : 600px; */
    height : 100%;
    background : #c30d0d;
    flex-direction : row;
    /* min-height : 300px; */
`;
export const ArrivalsRightContainer = Styled.div`
width :  100%;
height : 100%;
background : #c30d0d;
display : grid;
gap : 10px;
justify-content : center;
align-items : center;
text-align : center;
background : #b49b9b;
grid-template-columns : 1fr;
grid-template-rows : 1fr 1fr;
grid-template-areas : "banner";
@media (max-width : 768px){
    height : 100%;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr;
    grid-template-areas : "banner banner";
    }
    `;
