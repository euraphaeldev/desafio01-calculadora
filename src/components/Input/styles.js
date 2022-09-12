import styled from "styled-components";

export const InputContainer = styled.div`
    width:100%;
    height:70px;
    background-color: #AAAAFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size:24px;
    font-family: 'Roboto';

    input {
        width:100%;
        height:70px;
        background-color: #AAAAFF;
        border: none;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        padding: 0 10px;
        color: #FFF;
    
        font-size:24px;
        font-family: 'Roboto';
    }

    input:focus{
        outline: none;
    }
`