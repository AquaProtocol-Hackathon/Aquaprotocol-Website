'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { mainnet, sepolia, polygon, arbitrum, base } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required');
}

export const config = getDefaultConfig({
  appName: 'Aqua Protocol',
  projectId,
  chains: [mainnet, polygon, arbitrum, base, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
