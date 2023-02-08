import axios from "../data/axios";
import { useEffect, useState } from "react";


export function useGettingDataHook<TValue extends {}>(fetchUrl:string){

    const [data, setData] = useState<TValue|undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          setData(request.data.results);
    
          return request;
        }
        fetchData();
      }, [fetchUrl]);

      return data;

}