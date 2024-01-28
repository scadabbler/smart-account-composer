import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { CNT_SELF_CUSTODIAL_SIGNERS, signerOptions } from '@/types/signers'
import { Button } from '@/components/ui/button'

export const SignerSelector: FC = () => {
  const navigate = useNavigate()

  const handleOpen = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <div className="space-y-6">
      <section>
        <h4 className="text-sm font-medium leading-none mb-4">
          Self-custodial
        </h4>
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {signerOptions
            .slice(0, CNT_SELF_CUSTODIAL_SIGNERS)
            .map(({ id, name, disabled, icon }) => (
              <Button
                key={id}
                variant={'outline'}
                disabled={disabled}
                className="justify-start"
              >
                <img src={icon} alt="some" className="w-5" />
                <span className="ml-4">{name}</span>
              </Button>
            ))}
        </div>
      </section>
      <section>
        <h4 className="text-sm font-medium leading-none mb-4">
          Wallet as a Service
        </h4>
        <div className="grid grid-cols-2 gap-4 w-1/2">
          {signerOptions
            .slice(CNT_SELF_CUSTODIAL_SIGNERS)
            .map(({ id, name, disabled, icon }) => (
              <Button
                key={id}
                variant={'outline'}
                disabled={disabled}
                className="justify-start"
                onClick={() => handleOpen(id)}
              >
                <img src={icon} alt="some" className="w-5" />
                <span className="ml-4">{name}</span>
              </Button>
            ))}
        </div>
      </section>
    </div>
  )
}
