export const randomInt = (fr, to) => {
  return Math.round(fr + Math.random() * to)
}

export const generateRGBColors = () => {
  return {
    r: randomInt(0, 255),
    g: randomInt(0, 255),
    b: randomInt(0, 255)
  }
}