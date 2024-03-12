const nodemailer = require('nodemailer');

exports.sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		host: 'sandbox.smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: 'acf659034085c9',
			pass: '63f812d3822172',
		},
	});

	const mailOptions = {
		from: '',
		to: options.email,
		subject: options.subject,
		text: options.message,
	};

	await transporter.sendMail(mailOptions);
};
