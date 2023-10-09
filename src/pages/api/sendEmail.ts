import { sendMail } from "../../service/sendEmail";

const handler = async (req: any, res: any) => {
  try {
    const { method } = req;

    switch (method) {
      case "POST": {
        const { email, subject, message } = req.body;
        await sendMail(subject, email, message);
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        res.status(200).send(req.auth_data);
        break;
      }
      default: {
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
      }
    }
  } catch (err: any) {
    console.error("Erro no controlador:", err);
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
