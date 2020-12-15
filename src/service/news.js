import {news_url,country_code,apiKey} from '../configs/config'

export async function getNews(category='general'){
    try{
        let news = await fetch(`${news_url}?country=${country_code}&category=${category}`,{
            headers:{
                'X-API-KEY':apiKey
            }
        });

        let result = await news.json();
        news = null;
        return result.articles
    }
    catch(error){
        throw error;
    }
}