import React from 'react'
import { signerOptions } from './config/signers'
import cls from 'classnames'

export const SignerSection = () => {
  return (
    <div>
      {signerOptions.map(({ id, name, disabled }) => (
        <div
          key={id}
          className={cls('py-1 px-2 select-none rounded cursor-pointer', {
            'text-gray-300 cursor-not-allowed': disabled,
          })}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
