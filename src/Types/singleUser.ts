export interface SingleUser {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: Profile;
    guarantor: Guarantor;
    accountBalance: string;
    accountNumber: string;
    socials: Socials;
    education: Education;
    id: string;
  }
  
  interface Education {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  }
  
  interface Socials {
    facebook: string;
    instagram: string;
    twitter: string;
  }
  
  interface Guarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
    email?: string;
    relationship?: string;
  }
  
  interface Profile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  }