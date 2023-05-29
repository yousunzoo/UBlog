import nodemailer from 'nodemailer';

export type EmailData = {
	from: string;
	subject: string;
	message: string;
	name: string;
};

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.AUTH_USER,
		pass: process.env.AUTH_PASS,
	},
});

export async function sendEmail({ name, subject, from, message }: EmailData) {
	const mailData = {
		to: process.env.AUTH_USER,
		subject: `[BLOG] ${subject}`,
		from,
		html: `
		<h1>${subject}</h1>
		<div>${message}</div>
		<br />
		<p>보낸 사람 : ${name}</p>
		`,
	};

	return transporter.sendMail(mailData);
}
