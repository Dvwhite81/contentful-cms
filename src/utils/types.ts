export type ProjectType = {
  id?: string;
  title: string;
  url: string;
  image: string;
};

export type ImageType = {
  fields: {
    file: {
      url: string;
    };
  };
};
