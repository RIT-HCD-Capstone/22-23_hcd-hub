export interface AllCapstoneProjects extends ArrayLike<CapstoneProject> {
  data: CapstoneProject[];
}

export interface CapstoneProject {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    Logo: Logo | null;
    annual_year: AnnualYear;
    public_facing_reports: AllPFRs;
    Link: string;
    users: GroupedUser;
  };
}

export interface SingleCapstoneProject {
  data: CapstoneProject;
}

export interface AllPFRs extends ArrayLike<PFR> {
  data: PFR[];
}

export interface PFR {
  id: number;
  attributes: {
    Title: string;
    Report: string;
    createdAt: string;
    updatedAt: string;
    Date: string;
  };
}

export interface AnnualYear {
  data: {
    id: number;
    attributes: {
      Year: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface Logo {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {};
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface MultipleUsers extends Array<GroupedUser> {
  data: GroupedUser[];
}

export interface AllUsers extends Array<User> {
  data: User[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
  avatar: {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  };
  capstone_projects: CapstoneProject[];
}

export interface GroupedUser {
  data: User;
}