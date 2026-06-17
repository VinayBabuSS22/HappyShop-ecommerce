const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    // 1. Check if Brevo API is configured
    if (process.env.BREVO_API_KEY) {
        console.log("Sending email using Brevo HTTP API...");
        const senderMail = process.env.SMPT_MAIL || "vinaysetty22@gmail.com";
        const senderName = "HappyShop";
        
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": process.env.BREVO_API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                sender: {
                    name: senderName,
                    email: senderMail
                },
                to: [{
                    email: options.email
                }],
                subject: options.subject,
                textContent: options.message
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Brevo API returned error ${response.status}: ${errorText}`);
        }
        
        console.log("Email sent successfully via Brevo HTTP API.");
        return;
    }

    // 2. Check if SendGrid API is configured
    if (process.env.SENDGRID_API_KEY) {
        console.log("Sending email using SendGrid HTTP API...");
        const senderMail = process.env.SMPT_MAIL || "vinaysetty22@gmail.com";
        
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: options.email }]
                }],
                from: { email: senderMail, name: "HappyShop" },
                subject: options.subject,
                content: [{
                    type: "text/plain",
                    value: options.message
                }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`SendGrid API returned error ${response.status}: ${errorText}`);
        }
        
        console.log("Email sent successfully via SendGrid HTTP API.");
        return;
    }

    // 3. Fallback to standard Nodemailer SMTP
    console.log("Sending email using SMTP Nodemailer...");
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: parseInt(process.env.SMPT_PORT || "465"),
        service: process.env.SMPT_SERVICE,
        secure: process.env.SMPT_PORT == "465", // secure connection if port is 465
        auth:{
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000,
    });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully via SMTP.");
};

module.exports = sendMail;