import { PrimitiveAtom, useAtom } from 'jotai'
import { CloseOutlined } from '@ant-design/icons'

// todoが持つ状態の型を定義
export type Todo = {
  title: string
  completed: boolean
}

// todoを消去する関数の型を宣言
export type RemoveFn = (item: PrimitiveAtom<Todo>) => void

// TodoItemは状態とatom自身を消去する型を持つ
type TodoItemProps = {
  atom: PrimitiveAtom<Todo>
  remove: RemoveFn
}

export const TodoItem = ({ atom, remove }: TodoItemProps) => {
  // 引数で与えられたatomをitemに格納
  const [item, setItem] = useAtom(atom)
  // 元のtodoからcompletedの値だけを逆にする
  const toggleCompleted = () =>
    setItem((todo) => ({ ...todo, completed: !todo.completed }))
  const handleOnClick = () => remove(atom)
  return (
    <>
      <input type='checkbox' checked={item.completed} onChange={toggleCompleted} />
      <span
        style={{ textDecoration: item.completed ? 'line-through' : '', color: 'black' }}
      >
        {item.title}
      </span>
      <CloseOutlined onClick={handleOnClick} />
    </>
  )
}
