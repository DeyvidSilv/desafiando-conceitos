import styles from './header.module.css'
import logoTodo from '../../assets/logoTodo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handlesubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={logoTodo} />
      
      <form className={styles.newForm} onSubmit={handlesubmit}>
        <input 
          placeholder='Adicione uma nova tarefa' 
          onChange={onChangeTitle} 
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}