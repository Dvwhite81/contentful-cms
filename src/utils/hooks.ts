import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { ImageType, ProjectType } from './types';

console.log('space id:', import.meta.env.VITE_SPACE_ID);
console.log('accessToken:', import.meta.env.VITE_API_KEY);
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID as string,
  accessToken: import.meta.env.VITE_API_KEY as string,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const getData = async () => {
    try {
      console.log('client:', client);
      const response = await client.getEntries({ content_type: 'project' });
      console.log('response:', response);
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        console.log('image:', image);
        const id = item.sys.id;
        const img = (image as ImageType)?.fields?.file?.url;
        return { title, url, id, image: img };
      });
      setProjects(projects as ProjectType[]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
