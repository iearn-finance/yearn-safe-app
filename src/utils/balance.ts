import { Contract } from "@ethersproject/contracts";
import { Provider } from "@ethersproject/providers";
import { BigNumberish } from "@ethersproject/bignumber";
import Erc20Abi from "../abis/erc20.json";

const getBalance = async (provider: Provider, erc20Address: string, userAddress: string): Promise<BigNumberish> => {
  try {
    const erc20Contract = new Contract(erc20Address, Erc20Abi, provider);
    const userBalance = await erc20Contract.balanceOf(userAddress);
    return userBalance;
  } catch (e) {
    return "0";
  }
};

export default getBalance;