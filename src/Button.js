//1. componet 만든다.
import propTypes from  "prop-types";
function Button({text}){

    return(
 <button>
     {text}
 </button>
    );
}

Button.propTypes = {
    text: propTypes.string.isRequired,
}

export default Button;