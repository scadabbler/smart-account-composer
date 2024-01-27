interface SignerType {
  id: string
  name: string
  disabled?: boolean
}

export const signerOptions: SignerType[] = [
  {
    id: 'metamask',
    name: 'Metamask',
  },
  {
    id: 'privy',
    name: 'Privy',
    disabled: true,
  },
  {
    id: 'dynamic',
    name: 'Dynamic',
  },
  {
    id: 'web3Auth',
    name: 'Web3Auth',
  },
  {
    id: 'particle',
    name: 'Particle',
  },
]
