import { Button } from '@/components/ui/button'
import {
  ConnectButton,
  useAccountInfo,
} from '@particle-network/connect-react-ui'
import '@particle-network/connect-react-ui/dist/index.css'

export const ParticleSignerInfo = () => {
  const { account } = useAccountInfo()

  if (!account) {
    return (
      <div>
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <Button variant="outline" onClick={openConnectModal}>
              Connect
            </Button>
          )}
        </ConnectButton.Custom>
      </div>
    )
  }

  return (
    <div>
      <p>Account: {account}</p>
    </div>
  )
}
