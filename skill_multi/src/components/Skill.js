const Skill = (props) => {
    const {handleDeleteSkill, handleIncreaseSkillLevel, skillObj, index} = props
    return (
        <div key={index}>
        <p>Skill: {skillObj.skill}</p>
        <p>Level: {skillObj.level}</p>
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
    );
};
export default Skill;