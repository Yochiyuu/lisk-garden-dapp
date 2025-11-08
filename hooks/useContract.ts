"use client";

import { LISK_GARDEN_CONTRACT_ADDRESS } from "@/lib/contract";
import { useActiveAccount, usePanna } from "panna-sdk";
import { useMemo } from "react";

/**
 * Hook to get the Panna client and active account
 * Returns client, account, and wallet connection status
 */
export function useContract() {
  const activeAccount = useActiveAccount();
  const { client } = usePanna();

  const contractInfo = useMemo(() => {
    return {
      client: client || null,
      account: activeAccount || null,
      isConnected: !!activeAccount && !!client,
      address: activeAccount?.address || null,
      contractAddress: LISK_GARDEN_CONTRACT_ADDRESS,
    };
  }, [activeAccount, client]);

  return contractInfo;
}
