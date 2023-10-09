import nodemailer from "nodemailer";

export async function sendMail(subject: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: 'silveira.kayara@gmail.com',
      subject: subject,
      text: `Mensagem: ${message} de: ${email}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email Sent");
    return true;
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    throw error;
  }
}
