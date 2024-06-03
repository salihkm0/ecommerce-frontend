import Styled from "styled-components";

export const ShopAllHeadding = Styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    text-align: center;
    margin: 4rem 0;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        }
`;

export const ShopAllDesc = Styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: #4c4c4c;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: .6rem;
        }
`;

export const ShopAllContainer = Styled.div`
    display: flex;
    flex-wrap : wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height : 100%;
    margin-top: 2rem;
    gap : 50px;
@media screen and (max-width: 768px) {
    /* margin-top: 1rem; */
    }
`;