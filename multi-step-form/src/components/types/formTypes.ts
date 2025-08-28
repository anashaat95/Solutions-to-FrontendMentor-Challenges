export type FormTypes = {
  name: string;
  email: string;
  phone: string;
  plan: ePlan;
  period: ePeroid;
  addOns: eAddOn[];
};

export enum ePlan {
  arcade = "Arcade",
  advanced = "Advanced",
  pro = "Pro",
}

export enum ePeroid {
  monthly,
  yearly,
}

export enum eAddOn {
  OnlineService = "Online Service",
  LargerStorage = "Larger Storage",
  CustomizableProfile = "Customizable Profile",
}
