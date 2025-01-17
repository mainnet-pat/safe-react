import { FiatCurrencies, getFiatCurrencies } from '@gnosis.pm/safe-react-gateway-sdk'
import { GATEWAY_URL } from 'src/utils/constants'

export const fetchAvailableCurrencies = async (): Promise<FiatCurrencies> => {
  try {
    return getFiatCurrencies(GATEWAY_URL)
  } catch {
    return ["USD"]
  }
}
