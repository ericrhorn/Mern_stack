const Form = (props) => {
    const {handleSubmitSkill, setSkill, skill} = props


    
  return (
    <form onSubmit={(e) => handleSubmitSkill(e)}>
      <h4>Add a Skill</h4>
      <input
        type="text"
        onChange={(e) => setSkill(e.target.value)}
        value={skill}
      />
      <button type="submit">Add a Skill</button>
    </form>
  );
};

export default Form;
