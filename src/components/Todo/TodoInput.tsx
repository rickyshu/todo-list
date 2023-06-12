import styled from "styled-components";

interface setInputValueProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const TodoInput = ({ inputValue, setInputValue }: setInputValueProps) => {
  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return <Input type="text" placeholder="To do" value={inputValue} onChange={InputHandler} />;
};

const Input = styled.input`
  height: 5rem;
  width: 40rem;
  border: 0;
  position: relative;
  top: 20rem;
  left: 50%;
  border-radius: 2rem;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  padding-left: 1.5rem;
  background-color: rgb(233, 233, 233);

  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
`;

export default TodoInput;
