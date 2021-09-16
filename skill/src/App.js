import React, { useState } from "react";
import "./App.css";

function App() {
  const [skill, setSkill] = useState("");
  const [skillArr, setSkillArr] = useState([]);

  const handleSubmitSkill = (e) => {
    e.preventDefault();

    if (skill.length === 0) {
      return;
    }

    const newSkill = {
      skill: skill,
      level: 1,
    };

    setSkillArr([newSkill, ...skillArr]);
    setSkill("");
  };

  const handleIncreaseSkillLevel = (index) => {
    let skillToUpdate = { ...skillArr[index] };
    console.log(skillToUpdate);
    skillToUpdate.level++;
    console.log(skillToUpdate);

    setSkillArr(
      [...skillArr.slice(0, index), skillToUpdate].concat(
        skillArr.slice(index + 1)
      )
    );
  };

  const handleDeleteSkill = (index) => {
    const filterArr = skillArr.filter((element, idx) => idx !== index);
    setSkillArr(filterArr);
  };

  return (
    <div className="App">
      <h1>Nice Skills</h1>
      <form onSubmit={(e) => handleSubmitSkill(e)}>
        <h4>Add a Skill</h4>
        <input
          type="text"
          onChange={(e) => setSkill(e.target.value)}
          value={skill}
        />
        <button type="submit">Add a Skill</button>
      </form>
      <h2>All my Skills</h2>
      {skillArr.map((element, index) => (
        <div key={index}>
          <p>Skill: {element.skill}</p>
          <p>Level: {element.level}</p>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => handleDeleteSkill(index)}
          >
            Delete
          </button>
          <button onClick={() => handleIncreaseSkillLevel(index)}>
            Level Up!
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
