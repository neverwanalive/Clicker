import React, { useState, useEffect } from "react";
import { itemsArr } from "../../items/items";
import { saveGame, loadGame } from "../../saves/saves";
import {
  Main,
  MainContainer,
  PointsTittle,
  AddButton,
  ItemsContainer,
  Item,
} from "./App.styles";

export const App = () => {
  const [points, updatePoints] = useState(0);
  const [pointsPerClick, updatePointsPerClick] = useState(1);
  const [pointsPerSecond, updatePointsPerSecond] = useState(1);

  const buyItem = (item) => {
    if (points >= item.price && item.amount < 10) {
      item.type === "Points per click"
        ? updatePointsPerClick(pointsPerClick + item.buffPerClick)
        : updatePointsPerSecond(pointsPerSecond + item.buffPerSecond);
      updatePoints(points - item.price);
      item.price = Math.round(item.price * 1.5);
      item.amount = item.amount + 1;
    }
  };

  useEffect(() => {
    loadGame(updatePoints, updatePointsPerSecond, updatePointsPerClick);
  }, []);

  useEffect(() => {
    saveGame(points, pointsPerSecond, pointsPerClick);
  }, [points, pointsPerSecond, pointsPerClick]);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePoints((currPoints) => currPoints + pointsPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [pointsPerSecond]);

  return (
    <Main>
      <MainContainer>
        <PointsTittle>Total points: {points}</PointsTittle>
        <AddButton onClick={() => updatePoints(points + pointsPerClick)}>
          Click
        </AddButton>
      </MainContainer>
      <ItemsContainer>
        {itemsArr.map((item) => (
          <Item onClick={() => buyItem(item)}>
            {item.name}
            <br />
            {item.type}:{" "}
            {item.type === "Points per click"
              ? item.buffPerClick
              : item.buffPerSecond}
            <br />
            Amount: {item.amount}
            <br />
            Price: {item.amount === 10 ? "MAX" : item.price}
          </Item>
        ))}
      </ItemsContainer>
    </Main>
  );
};
