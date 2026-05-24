import { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import {
  FaPaperPlane,
  FaGithub,
  FaTwitter,
  FaFile,
  FaRegStickyNote,
} from "react-icons/fa";
import { SiZenn, SiWantedly } from "react-icons/si";

const ContactSection = styled.section`
  min-height: 100vh;
  padding: var(--section-padding);
  padding-left: calc(var(--header-width) + 60px);

  @media (max-width: 1279px) and (min-width: 768px) {
    padding-left: calc(var(--header-width-tablet) + 40px);
  }

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-top: 100px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
  }

  @media (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 65% 30%;
  gap: 5%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactFormContainer = styled.div``;

const FormDescription = styled.p`
  margin-bottom: 40px;
  color: var(--text-color-muted);
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: var(--accent-color);
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  color: var(--text-color);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &.error {
    border-color: #ff3860;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  color: var(--text-color);
  min-height: 200px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &.error {
    border-color: #ff3860;
  }
`;

const ErrorMessage = styled.div`
  color: #ff3860;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background-color: #c01d73;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div``;

const InfoBlock = styled(motion.div)`
  margin-bottom: 40px;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 30px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const InfoText = styled.p`
  line-height: 1.8;
  color: var(--text-color-muted);
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    margin-right: 8px;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(212, 45, 131, 0.2);
    color: var(--accent-color);
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 20px;
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid green;
  margin-bottom: 30px;
`;

const ResourcesContainer = styled.div`
  margin-top: 20px;
`;

const ResourceLink = styled(motion.a)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
    color: var(--accent-color);
  }

  &:hover {
    color: var(--accent-color);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // リアルタイムバリデーション
    if (name === "name" || name === "message") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          [name]: "入力必須項目です",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    } else if (name === "email") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          email: "入力必須項目です",
        });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({
          ...errors,
          email: "有効なメールアドレスを入力してください",
        });
      } else {
        setErrors({
          ...errors,
          email: "",
        });
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // 名前の検証
    if (formData.name.trim() === "") {
      newErrors.name = "入力必須項目です";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // メールの検証
    if (formData.email.trim() === "") {
      newErrors.email = "入力必須項目です";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // メッセージの検証
    if (formData.message.trim() === "") {
      newErrors.message = "入力必須項目です";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // フォーム送信のシミュレーション
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // 成功メッセージを5秒後に消す
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactSection id="message" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        MESSAGE
      </SectionTitle>

      <ContactContent>
        <ContactFormContainer>
          <FormDescription>
            AI時代のエンジニアリングについてディスカッションしたい方、プロジェクトのご相談、お仕事のご依頼など、お気軽にご連絡ください。SNSのDMでも対応可能です。
          </FormDescription>

          {isSubmitSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              メッセージを送信しました。折り返しご連絡いたします。
            </SuccessMessage>
          )}

          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormGroup>
              <Label htmlFor="name">
                お名前<span>*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="山田 太郎"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                メールアドレス<span>*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="example@example.com"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">件名</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="お問い合わせ内容の件名"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">
                メッセージ<span>*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                placeholder="お問い合わせ内容をご記入ください"
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "送信中..." : "送信する"} <FaPaperPlane />
            </SubmitButton>
          </Form>
        </ContactFormContainer>

        <ContactInfo>
          <InfoBlock
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InfoTitle>お問い合わせについて</InfoTitle>
            <InfoText>
              通常2営業日以内にご返信いたします。お急ぎの場合は、SNSのDMでのお問い合わせもお受けしております。
            </InfoText>

            <SocialLinksContainer>
              <SocialLink
                href="https://github.com/tKwbr999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaGithub /> GitHub
              </SocialLink>
              <SocialLink
                href="https://x.com/tkwbr999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaTwitter /> X (Twitter)
              </SocialLink>
              <SocialLink
                href="https://zenn.dev/tkwbr999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <SiZenn /> Zenn
              </SocialLink>
              <SocialLink
                href="https://wantedly.com/id/tkwbr999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <SiWantedly /> Wantedly
              </SocialLink>
              <SocialLink
                href="https://note.com/tkwbr999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaRegStickyNote /> note
              </SocialLink>
            </SocialLinksContainer>
          </InfoBlock>

          <InfoBlock
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InfoTitle>プロジェクトについて</InfoTitle>
            <InfoText>
              各種お仕事承ります。Goを用いたバックエンド開発、TypeScriptとReactを使ったフロントエンド開発、AIを活用した開発支援など、お気軽にご相談ください。
            </InfoText>

            <ResourcesContainer>
              <ResourceLink href="#" target="_blank">
                <FaFile /> 職務経歴書（PDF）
              </ResourceLink>
              <ResourceLink href="https://zenn.dev/tkwbr999" target="_blank">
                <SiZenn /> 技術記事一覧
              </ResourceLink>
              <ResourceLink href="https://tkwbr999.github.io/monthly5-offer/" target="_blank">
                <FaRegStickyNote /> $5 Short Text Summary
              </ResourceLink>
            </ResourcesContainer>
          </InfoBlock>
        </ContactInfo>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
