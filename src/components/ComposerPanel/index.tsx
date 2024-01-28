import { FC, useState } from 'react'
import { Select } from '../ui/select'
import { SCATrait, smartAccountTraits } from '../../constants'
import { Separator } from '../ui/separator'
import { SignerTab } from './SignerTab'
import { AccountTab } from './AccountTab'

export const ComposerPanel: FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<SCATrait>(SCATrait.signer)
  const handleTraitTabChange = (val: string) => {
    setSelectedTrait(val as SCATrait)
  }
  return (
    <div>
      <Select
        options={smartAccountTraits}
        onChange={handleTraitTabChange}
        value={selectedTrait}
      />
      <Separator className="mt-2 mb-4" />
      {selectedTrait === SCATrait.signer && <SignerTab />}
      {selectedTrait === SCATrait.account && <AccountTab />}
    </div>
  )
}
