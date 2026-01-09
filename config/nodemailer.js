import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD} from "./env.js";

export const accountEmail = 'sachin.code88@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'email',
  auth: {
    user: accountEmail,
    pass:  EMAIL_PASSWORD,
  }
})

export default transporter;