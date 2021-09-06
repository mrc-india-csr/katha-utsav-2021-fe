import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';




const ContactText = (props) => (
    <Typography component={Link} to="/contact" gutterBottom variant="subtitle1" className={props.contactUsClassName}>Contact us</Typography>);


export default ContactText;

