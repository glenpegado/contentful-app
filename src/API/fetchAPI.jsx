import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
let apiKey = import.meta.env.VITE_API_KEY;

const client = createClient({
  space: 'd1xfdrbkaimc',
  environment: 'master',
  accessToken: apiKey,
});

export function useFetchProjects() {
  //useState
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  //FUNCTION Get API Data
  const getAPIData = async () => {
    try {
      const data = await client.getEntries({ content_type: 'title' });

      //Loop items
      const projects = data.items.map((el) => {
        const { title, url, image } = el.fields;
        let id = el.sys.id;
        let img = image?.fields?.file?.url;

        return { title, url, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //useEffect
  useEffect(() => {
    getAPIData();
  }, []);

  return { loading, projects };
}

//title, url, id, image
