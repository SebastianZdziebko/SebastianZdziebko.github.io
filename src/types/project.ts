export interface Project {
  title: string;
  description: {
    EN: string;
    PL: string;
  };
  youtubeId: string;
  blueprintId: string;
  blueprintTitle: {
    EN: string;
    PL: string;
  };
  blueprintLabel: {
    EN: string;
    PL: string;
  };
  tags: string[];
  githubUrl: string;
  status: {
    EN: string;
    PL: string;
  };
  updates: {
    note: {
      EN: string;
      PL: string;
    };
  }[];
}
