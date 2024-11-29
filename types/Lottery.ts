export type Lottery = {
    read: {
        betsOpen: () => Promise<boolean>;
        betsClosingTarget: () => Promise<bigint>;
        paymentToken: () => Promise<`0x${string}`>;
    };
    write: {
        openBets: (args: [bigint]) => Promise<void>;
    };
} 