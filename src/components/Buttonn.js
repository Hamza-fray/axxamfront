import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Button =()=>{
    return(
        <>
            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button as="input" type="submit" value="Submit" />{' '}
            <Button as="input" type="reset" value="Reset" />
        </>
    );

}
export default Button;