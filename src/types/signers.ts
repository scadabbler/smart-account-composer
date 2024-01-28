import iconMM from '@/assets/icon-mm.svg'
import iconPrivy from '@/assets/icon-privy.svg'
import iconDynamic from '@/assets/icon-dynamic.svg'
import iconWeb3Auth from '@/assets/icon-web3Auth.svg'
import iconParticle from '@/assets/icon-particle.png'

interface SignerOption {
  id: string
  name: string
  disabled?: boolean
  icon: string
}

export enum SignerType {
  METAMASK = 'metamask',
  PRIVY = 'privy',
  DYNAMIC = 'dynamic',
  WEB3AUTH = 'web3Auth',
  PARTICLE = 'particle',
}

export const CNT_SELF_CUSTODIAL_SIGNERS = 1
export const signerOptions: SignerOption[] = [
  {
    id: SignerType.METAMASK,
    name: 'Metamask',
    icon: iconMM,
  },
  {
    id: SignerType.PRIVY,
    name: 'Privy',
    disabled: true,
    icon: iconPrivy,
  },
  {
    id: SignerType.DYNAMIC,
    name: 'Dynamic',
    icon: iconDynamic,
  },
  {
    id: SignerType.WEB3AUTH,
    name: 'Web3Auth',
    icon: iconWeb3Auth,
  },
  {
    id: SignerType.PARTICLE,
    name: 'Particle',
    icon: iconParticle,
  },
]
