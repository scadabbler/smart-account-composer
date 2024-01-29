# Smart Account Composer

[**WIP**] not fully functioning yet

Smart Account Composer aims to showcase composability of 4337 tech stack, by allowing users to customize their smart account across 4 components:

- Signer: support either self-custodial wallets or Wallet-as-a-Service providers with different trust assumptions:
  - Metamask
  - Privy
  - Dynamic
  - Web3Auth
  - Particle Network

- Account Factory
  - SimpleAccount
  - ERC-6900 Modular Account (Kernel)
    - ECDSA Validator
    - SessionKey Validator
    - Passkey Validator

- Bundler
  - Biconomy
  - Pimlico
  - Stackup
  - Zerodev (load balancer)
  - Self hosted

- Paymaster: vendor-specific
