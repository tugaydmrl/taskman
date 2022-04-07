import { useRef } from 'react';
import './InputField.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}>
        <input ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} type="input" placeholder="Enter a task" className="input-box" />
        <button className="input-submit" type="submit">Go</button>
    </form>
  )
}

export default InputField