import { SignerType } from '@/types/signers'
import { FC, useEffect, useState } from 'react'
import { SignerSelector } from './SignerSelector'
import { DynamicSignerInfo } from './DynamicSignerInfo'
import { Web3AuthSignerInfo } from './Web3AuthSignerInfo'
import { useMatch } from 'react-router-dom'
import { ParticleSignerInfo } from './ParticleSignerInfo'

export const SignerTab: FC = () => {
  const match = useMatch('/:signerType')
  const [selectedSignerType, setSelectedSignerType] =
    useState<SignerType | null>(null)
  useEffect(() => {
    if (match) {
      const { signerType } = match.params as { signerType: SignerType }
      setSelectedSignerType(signerType)
    }
  }, [match])

  const hasSelectedSigner = !!selectedSignerType

  return (
    <div>
      {!hasSelectedSigner && <SignerSelector />}
      {hasSelectedSigner && (
        <>
          <h4 className="text-lg font-bold">{selectedSignerType}</h4>
          {selectedSignerType === SignerType.DYNAMIC && <DynamicSignerInfo />}
          {selectedSignerType === SignerType.WEB3AUTH && <Web3AuthSignerInfo />}
          {selectedSignerType === SignerType.PARTICLE && <ParticleSignerInfo />}
        </>
      )}
    </div>
  )
}
