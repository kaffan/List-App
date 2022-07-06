import { FormControl, FormLabel, Input, InputLabel } from "@mui/material";
import Card from "../ReusableComponents/Card";

const Form = () =>
{
    return(
        <>
          <Card>
            <form>
                <FormControl>
                    <InputLabel sx={{fontSize:"30px",fontWeight:"700"}}>Username</InputLabel>
                    <Input fullWidth />
                </FormControl>
            </form>
          </Card>
        </>
    );
}

export default Form;