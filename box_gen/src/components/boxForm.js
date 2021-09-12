import React, {useState} from "react";

const BoxForm = (props) => {

    const {colorArr, setColorArr} = props;

    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setColorArr ([...colorArr, color]);

        setColor("")
    };

    return(
        <div>
            <form onSubmit = {handleSubmit}>
            <div>
                <lable>Color</lable>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)} value={color}/>
            </div>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
};
export default BoxForm;