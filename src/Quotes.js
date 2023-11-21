import React from "react";
import fetchdata from  "./quotesData.js"


const quotes = await fetchdata();

export default function Quotes(){

    const quotesArray = quotes
    const randomNumber =  Math.floor(Math.random() * quotesArray.length)

    const [quote,setQuote] = React.useState(quotesArray[0])
   

    function getQuote(){

           setQuote(quotesArray[randomNumber])
        
    }
       
    return (
        <main>
            <div className="maincontainer">
                
                <button 
                    className="button"
                    onClick={getQuote}
                >
                New Quote </button>

                <h3>{quote.text}</h3>
                <h4><i>-- {quote.author}</i></h4>
            </div>
            
        </main>
    )
}