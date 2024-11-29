# Lottery Smart Contract Project

This project implements a lottery system using smart contracts. The system includes a main Lottery contract and an associated LotteryToken contract for handling bets and prizes.

## Features

- Purchase lottery tokens with ETH
- Place bets using lottery tokens
- Automated prize distribution
- Owner fee collection system
- Token burn mechanism

## Scripts

The project includes an interactive CLI script (`LotteryScript.ts`) that allows you to:

- Check lottery state and closing time
- Open/close betting periods
- Purchase lottery tokens
- Place bets
- Check and claim prizes
- Withdraw fees (owner only)
- Burn tokens

## Usage

To interact with the lottery system, run:

```bash
npx hardhat run scripts/LotteryScript.ts --network <network-name>
```

Where `<network-name>` can be:
- `localhost` for local development
- `goerli` for Goerli testnet
- `mainnet` for Ethereum mainnet

Make sure to:
1. Configure your network settings in `hardhat.config.ts`
2. Set up your environment variables in `.env`
3. Have sufficient ETH in your wallet for the target network
