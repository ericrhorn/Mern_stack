import Skill from "./Skill";

const Display = (props) => {

    const {skillArr, handleDeleteSkill, handleIncreaseSkillLevel} = props

  return (
    <div>
      {skillArr.map((skillObj, index) => (
        <div key={index}>
        <Skill handleDeleteSkill={handleDeleteSkill} handleIncreaseSkillLevel={handleIncreaseSkillLevel} skillObj={skillObj} index={index}/>
        </div>
        // <div key={index}>
        //   <p>Skill: {element.skill}</p>
        //   <p>Level: {element.level}</p>
        //   <button
        //     style={{ backgroundColor: "red", color: "white" }}
        //     onClick={() => handleDeleteSkill(index)}
        //   >
        //     Delete
        //   </button>
        //   <button onClick={() => handleIncreaseSkillLevel(index)}>
        //     Level Up!
        //   </button>
        //   <hr />
        // </div>
      ))}
    </div>
  );
};
export default Display;
