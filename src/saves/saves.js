import { itemsArr } from "../items/items";

const getData = (name, updateData) => {
    if (window.localStorage.getItem(name)) updateData(parseInt(window.localStorage.getItem(name)))
}

const setData = (name, value) => {
    window.localStorage.setItem(name, value)
}

export const saveGame = (points, pointsPerSecond, pointsPerClick) => {
    setData('points', points)
    setData('pointsPerSecond', pointsPerSecond)
    setData('pointsPerClick', pointsPerClick)
    itemsArr.forEach(item => {
        setData(item.name, JSON.stringify(item))
    })
}

export const loadGame = (updatePoints, updatePointsPerSecond, updatePointsPerClick) => {
    getData('points', updatePoints)
    getData('pointsPerClick', updatePointsPerClick)
    getData('pointsPerSecond', updatePointsPerSecond)
    itemsArr.forEach(item => {
        Object.assign(item, JSON.parse(window.localStorage.getItem(item.name)))
    })
}