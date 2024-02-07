import  nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    const reqBody= await req.json()
    const {name, email,phone, message} = reqBody
    // console.log(reqBody)
    
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
        }
    })
    // console.log(process.env.EMAIL)
    const mailOptions = {
        to: 'navaritih.ju@gmail.com',
        subject: `New Query from ${name}`,
        html:
       ` <h3 >Hello This is ${name}</h3>
        <p>User Phone Number is :- ${phone}</p>
        <p>User Email is :- ${email}</p>
        <h3>This is the Query From the user</h3>
        <p>${message}</p>
        <hr />
        
        `

    }
    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({
            message:"Message sent successfully",
            success:true,
        })
    } catch (error) {
        return NextResponse.json({error:"User does not exist"},{status:400});

    }
}
