import { DYNAMIC_ENV_ID } from '@/configs/env'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { ComposerPanel } from '@/components/ComposerPanel'

const settings = {
  environmentId: DYNAMIC_ENV_ID,
  walletConnectors: [EthereumWalletConnectors],
}

export const DynamicRoot = () => {
  return (
    <DynamicContextProvider settings={settings}>
      <div className="w-[600px] float-right">
        <ComposerPanel />
      </div>
    </DynamicContextProvider>
  )
}
