import { Button } from '@/components/ui/button'
import { DynamicConnect } from '@/routes/DynamicRoot/DynamicConnect'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export const DynamicSignerInfo = () => {
  const {
    authMode,
    primaryWallet,
    handleLogOut: logout,
    handleUnlinkWallet: unlink,
    sdkHasLoaded,
  } = useDynamicContext()

  const [connectModalOpen, setConnectModalOpen] = useState(false)

  if (!sdkHasLoaded) {
    return (
      <div className="py-4">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      </div>
    )
  }

  if (!primaryWallet) {
    return (
      <div>
        <Button variant="outline" onClick={() => setConnectModalOpen(true)}>
          Connect
        </Button>
        <DynamicConnect
          open={connectModalOpen}
          onOpenChange={setConnectModalOpen}
        />
      </div>
    )
  }

  const { connector, address } = primaryWallet
  const handleSign = async () => {
    try {
      const sig = await connector.signMessage('hello world')
      console.log(sig)
    } catch (err) {
      console.error(err)
    }
  }
  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="py-4 space-y-2">
      <div>Auth mode: {authMode}</div>
      <div>Connector: {connector.name}</div>
      <div>Address: {address ?? '-'}</div>
      <div className="flex flex-row space-x-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="text-red-600"
        >
          Logout
        </Button>
        <Button onClick={handleSign} variant="outline">
          Sign
        </Button>
      </div>
    </div>
  )
}
