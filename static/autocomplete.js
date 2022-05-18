new autoComplete({
    data: {                              // Data src [Array, Function, Async]
      src: films,
    },
    
    selector: "#autoComplete",           // Input field selector             
    threshold: 3,                        // Min. Characters to enter to start Engine 
    debounce: 100,                       // the time engines take to start. 
    searchEngine: "strict",              // the mode of search engine        
    resultsList: {                       // Rendered results list object     
        render: true,
        container: source => {
            source.setAttribute("id", "food_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    
    maxResults: 5,                         // Maximum number of submitted results 
    highlight: true,                       // Highlight matching results      
    resultItem: {                          // Rendered result items           
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     // Action script on noResults     
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             // Action script onSelection event
        document.getElementById('autoComplete').value = feedback.selection.value;
    }
});
