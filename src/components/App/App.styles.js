import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -8px;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PointsTittle = styled.div`
    font-size: 50px;
    font-weight: 700;
    margin-top: 200px;
    user-select: none;
`

export const AddButton = styled.div`
    display: flex;
    justify-content: center; 
    width: 150px;
    font-size: 30px;
    margin-top: 100px;
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    font-size: 20px;
    margin-top: 90px;
`

export const Item = styled.div`
    text-align: center;
    width: 150px;
    font-size: 15px;
    padding: 3px;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`