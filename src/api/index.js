import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (ne, sw) => {
    try {
        const {data: {data}} = await axios.get(url, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '699bcbd3e6msh2e191c511d29987p132ec2jsn5bb54351c4f8'
            }
          })

        return data;
    }catch (error){
        console.log(error);
    }
}