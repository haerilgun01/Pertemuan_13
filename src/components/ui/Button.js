import styled from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props){
        if(props.variant === "primary"){
            return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,3,50,0.9769230769230769) 52%, rgba(9,31,100,1) 69%, rgba(0,212,255,1) 100%);"
        }

        else if(props.variant === "secondary"){
            return " linear-gradient(90deg, rgba(1,1,31,1) 39%, rgba(12,1,19,1) 45%, rgba(224,8,8,1) 100%);"
        }

        else {
            return "#6c6c6c838"
        }
        
    }};
`


export default Button;