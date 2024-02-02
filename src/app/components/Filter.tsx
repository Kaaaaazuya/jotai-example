import { useAtom } from 'jotai'
import { Radio, RadioChangeEvent } from 'antd'
import { filterAtom } from '../data-flow/atom'

export const Filter = () => {
  // filterAtomをfilterに代入
  const [filter, setFilter] = useAtom(filterAtom)
  const handleOnChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value as string)
  }
  return (
    // 各ラジオボタンが押されるたびにsetFilterで値をFilterにセットする
    <Radio.Group onChange={handleOnChange} value={filter}>
      <Radio value='all'>All</Radio>
      <Radio value='completed'>Completed</Radio>
      <Radio value='incompleted'>Incompleted</Radio>
    </Radio.Group>
  )
}
