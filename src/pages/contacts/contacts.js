import './contacts.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Contacts() {
    return (
        <div className='contact-container'>
            <form className="form">
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="ФИО" variant="outlined" />
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField classes={{ root: "custom-input" }} id="outlined-basic" label="Сообщение" variant="outlined" />
                <Button className='button-form' variant="contained">ОТПРАВИТЬ</Button> 
            </form>

        </div>
    )
}

export default Contacts;