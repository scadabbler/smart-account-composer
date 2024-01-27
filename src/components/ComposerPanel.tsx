import { useState } from 'react'
import { Select } from './Select'
import { smartAccountTraits } from '../constants'

export const ComposerPanel = () => {
  const [selectedTrait, setSelectedTrait] = useState(
    smartAccountTraits[0].value,
  )
  return (
    <div>
      <Select
        options={smartAccountTraits}
        onChange={setSelectedTrait}
        value={selectedTrait}
      />
    </div>
  )
}
