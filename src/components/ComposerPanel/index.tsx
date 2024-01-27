import React, { useState } from 'react'
import { Select } from '../Select'
import { SCATrait, smartAccountTraits } from '../../constants'
import { SignerSection } from './SignerSection'

const sectionToComponent: Record<SCATrait, React.ReactNode> = {
  [SCATrait.signer]: <SignerSection />,
  [SCATrait.account]: <div>Account</div>,
  [SCATrait.bundler]: <div>Bundler</div>,
  [SCATrait.paymaster]: <div>Paymaster</div>,
}

export const ComposerPanel = () => {
  const [selectedTrait, setSelectedTrait] = useState<SCATrait>(
    smartAccountTraits[0].value,
  )
  return (
    <div>
      <Select
        options={smartAccountTraits}
        onChange={(val) => setSelectedTrait(val as SCATrait)}
        value={selectedTrait}
      />
      {sectionToComponent[selectedTrait]}
    </div>
  )
}
