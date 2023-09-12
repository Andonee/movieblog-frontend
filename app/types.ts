export type Movie = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    genre: string;
    description: string;
    release_date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    poster: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null;
          caption: null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: ".jpg";
              mime: "image/jpeg";
              path: null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: ".jpg";
              mime: "image/jpeg";
              path: null;
              width: number;
              height: 500;
              size: 47.96;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: ".jpg";
              mime: "image/jpeg";
              path: null;
              width: number;
              height: 500;
              size: 47.96;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: ".jpg";
              mime: "image/jpeg";
              path: null;
              width: number;
              height: 500;
              size: 47.96;
              url: string;
            };
          };
          hash: string;
          ext: ".jpg";
          mime: "image/jpeg";
          size: number;
          url: string;
          previewUrl: null;
          provider: "local";
          provider_metadata: null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    actors: {
      data: [
        {
          id: 1;
          attributes: {
            first_name: "Leonardo";
            last_name: "DiCaprio";
            createdAt: "2023-08-29T18:10:18.881Z";
            updatedAt: "2023-08-29T18:15:29.550Z";
            publishedAt: "2023-08-29T18:10:31.348Z";
          };
        }
      ];
    };
  };
};

export type Nav = {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
};
