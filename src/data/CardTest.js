import { LuMedal } from "react-icons/lu";
import { PiTreasureChestBold } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { HiMiniCubeTransparent } from "react-icons/hi2";

const CardData = [
  {
    title: "1. Two-Level Referral System",
    icon: <HiMiniCubeTransparent />,
    details:
      "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
  },
  {
    title: "2. Earn Rebates & Commissions",
    icon: <BsPeople />,
    details: "Earn rebates on your trades and commissions from F1 and F2.",
  },
  {
    title: "3. Claim Daily Rewards",
    icon: <PiTreasureChestBold />,
    details:
      "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
  },
  {
    title: "4. Referral Tier System",
    icon: <LuMedal />,
    details:
      "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days",
  },
];

export default CardData;
