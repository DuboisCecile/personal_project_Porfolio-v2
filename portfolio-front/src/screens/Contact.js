import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import '../assets/styles/contact.css';

import API from '../APIClient';
import FormErrorMessages from '../components/FormErrorMessages';
import LogoLinkedIn from '../assets/images/linkedin-64.png';
import LogoGithub from '../assets/images/GitHub-Mark-Light-64px.png';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = async (form) => {
    try {
      await API.post(`${process.env.REACT_APP_API_BASE_URL}/contactMail`, form);
      toast.success(<span>Votre message a bien été envoyé&nbsp;!</span>);
    } catch (err) {
      toast.error(JSON.stringify(err));
      toast.error(
        <span>Il y a eu un problème lors de l'envoi du message&nbsp;!</span>
      );
      window.console.log(err);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        {isMobile && <div className="text-block page-title">Contact</div>}
        <div className="text-block section-title">
          Vous souhaitez avoir des renseignements ?<br /> N'hésitez pas à me
          contacter !
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit(sendEmail)}
          action="send"
          method="POST"
        >
          <div className="form-entry">
            <label htmlFor="userName">
              Veuillez saisir votre nom...
              <input
                name="userName"
                type="text"
                placeholder="Nom"
                autoComplete="userName"
                {...register('userName', {
                  required: 'Vous devez saisir votre nom',
                })}
              />
            </label>
          </div>
          <div className="form-entry">
            <label htmlFor="email">
              <div>... ainsi que votre email</div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Vous devez saisir un email',
                  })}
                />
              </div>
            </label>
          </div>
          <div className="form-entry">
            <label htmlFor="message">
              et, bien sûr, votre message !
              <textarea
                rows="8"
                name="message"
                type="text"
                placeholder="Message"
                {...register('message', {
                  required: 'Vous devez saisir un message 😉!',
                })}
              />
            </label>
          </div>
          <div>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              envoyer
            </Button>
          </div>
          <FormErrorMessages errors={errors} />
        </form>
        <div className="text-block">Vous pouvez aussi me retrouver ici :</div>
        <div id="links-logo">
          <a
            href="https://www.linkedin.com/in/duboiscecilepro/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LogoLinkedIn} width="25px" alt="Logo LinkedIn" />
          </a>
          <a
            href="https://github.com/DuboisCecile/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LogoGithub} width="25px" alt="Logo Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
