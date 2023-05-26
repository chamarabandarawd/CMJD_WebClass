import "./styles.css";
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function LargeButton(props){
    return(
        <Button onClick={props.onClick} variant="primary">{props.name}</Button>
    )
}
export default LargeButton;