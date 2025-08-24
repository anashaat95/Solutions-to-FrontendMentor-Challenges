import { useContext } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import LinksContext from "./../../contexts/LinksContext";
import Button from "./../../elements/Button";
import flexCenter from "./../../elements/flexCenter";
import { getRandomString } from "./../../helpers";

const Form = styled.form`
  width: 100%;
  gap: 1rem;
  ${flexCenter}
  padding: 0 6rem;

  button {
    width: 25%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 2rem;

    button {
      width: 100%;
    }
  }
`;

const FormBoxGroup = styled.div`
  width: 100%;

  input {
    width: 100%;

    outline: none;
    padding: 1.4rem 2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    line-height: 1.5;

    &:focus {
      border: 2px solid var(--secondary-color-light);
    }

    &::placeholder {
      color: var(--primary-color-lighter);
    }
  }

  ${(props) =>
    props.iserror &&
    `
    input {
      outline: var(--error-color);  
      &::placeholder {
        color: var(--error-color);
      }
    }
    `}

  p {
    position: absolute;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--error-color);
    transform: translate(0.5rem, 0.5rem);
  }
`;

const ShorteningForm = () => {
  const { addLink } = useContext(LinksContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ url }) => {
    addLink({ original: url, shortened: `https://rel.ink/${getRandomString()}` });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormBoxGroup iserror={errors?.url?.message}>
        <input
          placeholder="Shorten a link here..."
          {...register("url", {
            required: "Please add a link",
            pattern: {
              value: /^(https?:\/\/)?([\w\d-]+\.)+[\w-]{2,}(\/.*)?$/i,
              message: "Please enter a valid URL",
            },
          })}
        />
        {errors?.url && <p>{errors.url.message}</p>}
      </FormBoxGroup>
      <Button custompadding="1.8rem 2rem" borderradius="1rem">
        <>Shorten It!</>
      </Button>
    </Form>
  );
};

export default ShorteningForm;
