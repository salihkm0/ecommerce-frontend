import Styled from "styled-components";

export const StyledCard = Styled.div`
    width: 350px;
    height: 400px;
    /* background-color: #f10000; */
    transition: all 0.3s ease-in-out;
    @media (max-width : 1259px){
        width: 330px;
        height: 380px;
    }
    @media (max-width : 1195px){
        width: 310px;
        height: 360px;
    }
    @media (max-width : 900px){
        width: 290px;
        height: 340px;
    }
    @media (max-width : 600px){
        width: 250px;
        height: 300px;
    }
    @media (max-width : 600px){
        width: 250px;
        /* height: 300px; */
    }
    @media (max-width : 390px){
        width : 100%;
    }
        
        
`;
export const CardHover = Styled.div`
    width: 100%;
    height: 60px;
    /* background-color: #00000017; */
    display : none;
    position: absolute;
    bottom : -100px;
    transition: all 0.3s ease-in-out;
    /* transition: transform .5s ease; */
    justify-content : center;
    align-items : center;
    gap : 10px;
    overflow : hidden;
    color : #000000;
`;
export const CardImageContainer = Styled.div`
    
    width: 100%;
    height: 330px;
    position: relative;
    /* background : #ffff; */
    &:hover ${CardHover}{
        display : flex;
        bottom : 10px;
    }
    @media (max-width : 1259px){
        height: 300px;
    }
    @media (max-width : 1195px){
        height: 280px;
    }
    @media (max-width : 900px){
        height: 250px;
    }
    @media (max-width : 600px){
        height: 240px;
    }
    /* @media (max-width : 390px){
        height: auto;
    } */
`;
export const CardImage = Styled.img`
    width: 100%;
    height : 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
`;
export const CardBody = Styled.div`
    width: 100%;
    height : auto;
    margin-top : 10px;
`;
export const CardTitle = Styled.h1`
    font-size: 1.5rem;
    color: #000000;
    font-weight : 600;
    @media (max-width : 1259px){
        font-size: 1.5rem;
    }
    @media (max-width : 1195px){
        font-size: 1.3rem;
    }
    @media (max-width : 900px){
        font-size: 1.1rem;
    }
    @media (max-width : 600px){
        font-size: 1rem;
    }
`;
export const CardPrice = Styled.p`
    font-size: 1rem;
    color: #555555;
    font-weight : 400;
    text-decoration : line-through;
    @media (max-width : 900px){
        font-size: .9rem;
    }
    @media (max-width : 600px){
        font-size: .7rem;
    }
`;
export const CardSellingPrice = Styled.p`
    font-size: 1.2rem;
    color: #535353;
    font-weight : 400;
    
    @media (max-width : 900px){
        font-size: 1.1rem;
    }
    @media (max-width : 600px){
        font-size: 1rem;
    }
`;

export const CardIcon = {
  width: "20px",
  height: "20px",
  color: "#000000",
  fontSize: "1.5rem",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "#f50000",
    transform: "scale(1.2)",
  },
};
export const CardIconContainer = Styled.div`
    display : grid;
    place-items : center;
    width : 40px;
    height : 40px;
    background : #fff;
`;

export const RatingStyle = {
    fontSize : "20px",
    "@media (max-width : 600px)" : {
        fontSize : "15px",
    }
}
