export enum SCATrait {
  signer = 'signerType',
  account = 'accountType',
  bundler = 'bundlerType',
  paymaster = 'paymasterType',
}

// Smart Account traits include the following:
// - Signer
// - Account
// - Bundler
// - Paymaster
export const smartAccountTraits = [
  {
    label: 'Signer',
    value: SCATrait.signer,
  },
  {
    label: 'Account',
    value: SCATrait.account,
  },
  {
    label: 'Bundler',
    value: SCATrait.bundler,
  },
  {
    label: 'Paymaster',
    value: SCATrait.paymaster,
  },
]
