import { ComposerPanel } from '@/components/ComposerPanel'
import { Ethereum } from '@particle-network/chains'
import { ModalProvider } from '@particle-network/connect-react-ui'
import { WalletEntryPosition } from '@particle-network/auth'
import { evmInjectedWallet } from '@particle-network/connect'
import { PN_APP_ID, PN_CLIENT_KEY, PN_PROJECT_ID } from '@/configs/env'

export const ParticleRoot = () => {
  return (
    <ModalProvider
      options={{
        projectId: PN_PROJECT_ID,
        clientKey: PN_CLIENT_KEY,
        appId: PN_APP_ID,
        chains: [Ethereum],
        securityAccount: {
          promptSettingWhenSign: 1,
          promptMasterPasswordSettingWhenLogin: 1,
        },
        wallets: evmInjectedWallet(),
      }}
      theme={'auto'}
      walletSort={['Particle Auth']}
      particleAuthSort={['email', 'phone', 'google', 'apple', 'facebook']}
    >
      <div className="w-[600px] float-right">
        <ComposerPanel />
      </div>
    </ModalProvider>
  )
}
