/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import React, { useState, useEffect } from "react";

function App() {
  const [body, setBody] = useState();

  const [eyes, setEyes] = useState();
  const [mouth, setMouth] = useState();
  const [eyebrows, setEyebrows] = useState();

  const [hair, setHair] = useState();

  const [hat, setHat] = useState();
  const [glasses, setGlasses] = useState();
  const [neckwear, setNeckwear] = useState();
  const [earrings, setEarrings] = useState();

  const [clothing1, setClothing1] = useState();
  const [clothing2, setClothing2] = useState();
  const [clothing3, setClothing3] = useState();

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    neckwear: 18,
    earrings: 32,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const handleClick = () => {
    const randomBody = Math.floor(Math.random() * total.body);
    setBody(randomBody);

    const randomEyes = Math.floor(Math.random() * total.eyes);
    setEyes(randomEyes);
    const randomMouth = Math.floor(Math.random() * total.mouth);
    setMouth(randomMouth);
    const randomEyebrows = Math.floor(Math.random() * total.eyebrows);
    setEyebrows(randomEyebrows);

    const randomHair = Math.floor(Math.random() * total.hair);
    setHair(randomHair);

    const randomGlasses = Math.floor(Math.random() * total.glasses);
    setGlasses(randomGlasses);
    const randomHat = Math.floor(Math.random() * total.hat);
    setHat(randomHat);
    const randomNeckwear = Math.floor(Math.random() * total.neckwear);
    setNeckwear(randomNeckwear);
    const randomEarrings = Math.floor(Math.random() * total.earrings);
    setEarrings(randomEarrings);
    const randomClothing1 = Math.floor(Math.random() * total.clothing1);
    setClothing1(randomClothing1);
    const randomClothing2 = Math.floor(Math.random() * total.clothing2);
    setClothing2(randomClothing2);
    const randomClothing3 = Math.floor(Math.random() * total.clothing3);
    setClothing3(randomClothing3);
  };
  const bodyList = [];
  for (let i = 0; i < total.body; i++) {
    bodyList.push(i + 1);
  }
  const eyesList = [];
  for (let i = 0; i < total.eyes; i++) {
    eyesList.push(i + 1);
  }
  const mouthList = [];
  for (let i = 0; i < total.mouth; i++) {
    mouthList.push(i + 1);
  }
  const eyebrowsList = [];
  for (let i = 0; i < total.eyebrows; i++) {
    eyebrowsList.push(i + 1);
  }
  const hairList = [];
  for (let i = 0; i < total.hair; i++) {
    hairList.push(i + 1);
  }
  const glassesList = [];
  for (let i = 0; i < total.glasses; i++) {
    glassesList.push(i + 1);
  }
  const layer1List = [];
  for (let i = 0; i < total.clothing1; i++) {
    layer1List.push(i + 1);
  }
  const layer2List = [];
  for (let i = 0; i < total.clothing2; i++) {
    layer2List.push(i + 1);
  }
  const layer3List = [];
  for (let i = 0; i < total.clothing3; i++) {
    layer3List.push(i + 1);
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="app">
      <div>
        <div className="title">minecraft character creator</div>
      </div>

      <div className="main">
        <div className="avatar-item">
          <div className="avatar">
            <Avatar
              body={body}
              eyes={eyes}
              mouth={mouth}
              eyebrows={eyebrows}
              hair={hair}
              hat={hat}
              glasses={glasses}
              neckwear={neckwear}
              earrings={earrings}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
          </div>

          <div className="random">
            <div>
              <button onClick={() => handleClick()}>Randomize!</button>
            </div>
          </div>
        </div>

        <div>
          <div className="list">
            <h1>body</h1>
            <PartList path="body" part={bodyList} set={setBody} />
          </div>
          <div className="list">
            <h1>eyes</h1>
            <PartList path="eyes" part={eyesList} set={setEyes} />
          </div>
          <div className="list">
            <h1>mouth</h1>
            <PartList path="mouths" part={mouthList} set={setMouth} />
          </div>
          <div className="list">
            <h1>eyebrows</h1>
            <PartList path="eyebrows" part={eyebrowsList} set={setEyebrows} />
          </div>
          <div className="list">
            <h1>hair</h1>
            <PartList path="hair" part={hairList} set={setHair} />
          </div>
          <div className="list">
            <h1>glasses</h1>
            <PartList
              path="accessories/glasses"
              part={glassesList}
              set={setGlasses}
            />
          </div>
          <div className="list">
            <h1>clothing 1 </h1>
            <PartList
              path="clothes/layer_1"
              part={layer1List}
              set={setClothing1}
            />
          </div>
          <div className="list">
            <h1>clothing 2 </h1>
            <PartList
              path="clothes/layer_2"
              part={layer2List}
              set={setClothing2}
            />
          </div>
          <div className="list">
            <h1>clothing 3 </h1>
            <PartList
              path="clothes/layer_3"
              part={layer3List}
              set={setClothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
