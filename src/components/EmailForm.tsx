import styles from "../styles/EmailForm.module.css"
import BtnYellow from "./BtnYellow"
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Ativar o estado de carregamento

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
        toast.success("Email enviado com sucesso!");
      } else {
        console.log(response);
        toast.error("Ocorreu um erro ao enviar o email.");
      }
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsLoading(false); // Desativar o estado de carregamento
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="email">Seu email</label>
            <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                placeholder="exemplo@email.com"
                required
                value={formData.email}
                onChange={handleInputChange}
            />
        </div>
        <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="subject">Assunto</label>
            <input
                className="form-control"
                id="subject"
                type="text"
                name="subject"
                placeholder="Motivo do contato"
                required
                value={formData.subject}
                onChange={handleInputChange}
            />
        </div>
        <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="message">Mensagem</label>
            <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Olá, ..."
                required
                value={formData.message}
                onChange={handleInputChange}
            ></textarea>
        </div>

        <div className={`form-group d-flex justify-content-end ${styles.formGroup}`}>
          <BtnYellow type="submit" text={isLoading ? 'Enviando...' : 'Enviar email'} disabled={isButtonDisabled || isLoading}/>
        </div>
      </form>
    </div>
  );
}

