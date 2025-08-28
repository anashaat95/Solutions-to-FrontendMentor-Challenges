import { eAddOn, ePlan } from "../components/types/formTypes";

export const addOnsData = [
  { title: eAddOn.OnlineService, price: { monthly: 1, yearly: 10 }, description: "Access to multiplayer games" },
  { title: eAddOn.LargerStorage, price: { monthly: 2, yearly: 20 }, description: "Extra 1TB of cloud save" },
  { title: eAddOn.CustomizableProfile, price: { monthly: 2, yearly: 20 }, description: "Custom theme on your profile" },
];

export const plansData = [
  { title: ePlan.arcade, price: { monthly: 9, yearly: 90 }, icon: "icon-arcade.svg" },
  { title: ePlan.advanced, price: { monthly: 12, yearly: 120 }, icon: "icon-advanced.svg" },
  { title: ePlan.pro, price: { monthly: 15, yearly: 150 }, icon: "icon-pro.svg" },
];
