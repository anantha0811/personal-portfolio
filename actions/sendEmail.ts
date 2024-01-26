"use server";

import { getErrorMessage, validateString } from "@/lib/Utils";
import {Resend} from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');


    if(!validateString(senderEmail, 500)){
      return{
        error: "Invalid sender Email"
      }
    }

    if(!validateString(message, 5000)){
      return{
        error:"Invalid message"
      }
    }

    let data;

    try{
      data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'ananthakrishnanb0@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail,
        text: message
      })
    }catch(error){
      return{
        error: getErrorMessage(error)
      }
    }

    return{
      data
    }
    
  };