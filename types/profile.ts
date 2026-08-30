export interface SocialLinks {
  email: string;
  linkedin: string;
  instagram: string;
}
export interface UserProfile {
  name: string;
  role: string;
  university: string;
  major: string;
  bio: string;
  skills: string[];
  otherSkills?: string[];
  socials: SocialLinks;
  isAvailableForHire: boolean;
}
