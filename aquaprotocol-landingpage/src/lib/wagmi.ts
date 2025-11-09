'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'Aquafier',
  projectId: '6381ce9608eca5a446e50123075f1529',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
