import Button from '@mui/material/Button';

const Button = (props) =>
{
    return(
        <>
          <Button sx={{backgroundColor:"purple"}} onClick={props.buttonHandler} variant="contained">{props.text}</Button>
        </>
    );
}

export default Button;