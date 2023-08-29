
const nodemailer=require('nodemailer')
const mailgen=require('mailgen')
const sendEmail=async(req,res)=>{

    let config={
        service:"gmail",
        auth:{
            user:'sumanth6633@gmail.com',
            pass:'ywbvoboguatkamnp'
        }
    }
    const transporter=nodemailer.createTransport(config)

    let MailGenerator= new mailgen({
        theme:"default",
        product:{
            name:'mailgen',
            link:'https://mailgen.js/'
        }
    })

    let response= `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Congratulations!</title>
            </head>
            <body>
                <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                    <h1>Congratulations!</h1>
                    <p>Dear Friend</p>
                    <p>We wanted to extend our warmest congratulations to you on this special occasion. Your achievements are truly remarkable, and we are proud of everything you've accomplished.</p>
                    <p>May your journey ahead be filled with even more success, happiness, and wonderful moments.</p>
                    <p>Cheers to your continued success!</p>
                    <p>Best regards,</p>
                    <p>intelligent</p>
                </div>
            </body>
            </html>
            `
        
    
    
    // let mail=MailGenerator.generate(response)

    const message={
        from:"sumanth6633@gmail.com",
        to:"haripriyanaidu124@gmail.com",
        subject:"to my friend",
        html:response
    }

    transporter.sendMail(message).then(()=>{
        return res.status(200).json({
            msg:"You Should Receive Message"

        })

    }).catch((error)=>{
        return res.status(400).json({error})
    })

    res.send({messgae:"Email Send Sucessfully....."})

}

module.exports=sendEmail