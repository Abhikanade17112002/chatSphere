


const sendEmail = (e) =>{
    e.preventDefault() ;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abhikanade301@gmail.com",
        Password : "571A32764179A6CDD5BC778115481B8918D2",
        To : "abhikanade301@gmail.com",
        From :e.target[0].value ,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(" Enquiry Sent Succesfully To " + emailInput.value ) 
    );
} ;


export default sendEmail ;
