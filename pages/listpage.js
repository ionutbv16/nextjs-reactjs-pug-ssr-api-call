export default ({list}) => { 
    
return pug` 
div.div_header
    h1 MATCHESFASHION.COM
    p The fashion point of view
    div.div_line
    
    div.padding_top20
        each val,key in list
            div.div_item(key=key)
                a(href=val.url)
                    img.movie-poster(src=val.thumbnail)
                p 
                    a(href=val.url)= val.designerData.name
                p   
                    a(href=val.url)= val.name
                p   
                    a(href=val.url)= val.priceData.formattedWasPrice
`};
