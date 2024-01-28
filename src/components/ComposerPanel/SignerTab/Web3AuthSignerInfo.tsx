import { useEffect, useState } from 'react'
import { CHAIN_NAMESPACES, IProvider } from '@web3auth/base'
import { Web3Auth } from '@web3auth/modal'
import { WEB3AUTH_CLIENT_ID } from '@/configs/env'
import { Button } from '@/components/ui/button'

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: '0x1',
  rpcTarget: 'https://rpc.ankr.com/eth',
  displayName: 'Ethereum Mainnet',
  blockExplorer: 'https://etherscan.io/',
  ticker: 'ETH',
  tickerName: 'Ethereum',
}

const web3auth = new Web3Auth({
  clientId: WEB3AUTH_CLIENT_ID,
  chainConfig,
  web3AuthNetwork: 'sapphire_mainnet',
})

export const Web3AuthSignerInfo = () => {
  const [provider, setProvider] = useState<IProvider | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal()
        setProvider(web3auth.provider)

        if (web3auth.connected) {
          setLoggedIn(true)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  const handleLogin = async () => {
    const web3authProvider = await web3auth.connect()
    setProvider(web3authProvider)
    if (web3auth.connected) {
      setLoggedIn(true)
    }
  }

  const getUserInfo = async () => {
    const user = await web3auth.getUserInfo()
  }

  const logout = async () => {
    await web3auth.logout()
    setProvider(null)
    setLoggedIn(false)
  }

  const getAccounts = async () => {
    if (!provider) {
      return
    }
  }

  return (
    <div>
      <Button variant="outline" onClick={handleLogin}>
        Connect
      </Button>
    </div>
  )
}
